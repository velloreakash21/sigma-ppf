import { google } from 'googleapis';
import type { WarrantySubmission } from './validations';

// Check if Google Sheets is configured
const isConfigured = () => {
  return !!(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY &&
    process.env.GOOGLE_SHEET_ID
  );
};

// Create Google Sheets client
const getGoogleSheetsClient = async () => {
  if (!isConfigured()) {
    return null;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      // Private key comes with escaped newlines from env, need to unescape
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
};

// Warranty data row structure
interface WarrantyRow {
  timestamp: string;
  customerName: string;
  phone: string;
  email: string;
  rollCode: string;
  category: string;
  imageUrl: string;
  detailerName: string;
  detailerPhone: string;
  location: string;
  message: string;
  status: string;
}

// Convert submission data to row format
const toRowData = (data: WarrantySubmission): string[] => {
  const row: WarrantyRow = {
    timestamp: new Date().toISOString(),
    customerName: data.customerName,
    phone: data.phoneNumber,
    email: data.emailAddress,
    rollCode: data.sigmaRollCode,
    category: data.ppfCategory,
    imageUrl: data.imageUrl || '',
    detailerName: data.detailerName,
    detailerPhone: data.detailerMobile,
    location: data.location,
    message: data.message || '',
    status: 'Pending',
  };

  return [
    row.timestamp,
    row.customerName,
    row.phone,
    row.email,
    row.rollCode,
    row.category,
    row.imageUrl,
    row.detailerName,
    row.detailerPhone,
    row.location,
    row.message,
    row.status,
  ];
};

// Append warranty data to Google Sheet
export async function appendWarrantyData(
  data: WarrantySubmission
): Promise<{ success: boolean; message: string; mockMode?: boolean }> {
  // If not configured, return mock success for testing
  if (!isConfigured()) {
    console.log('Google Sheets not configured. Mock mode enabled.');
    console.log('Would append data:', data);
    return {
      success: true,
      message: 'Warranty registration submitted successfully (test mode)',
      mockMode: true,
    };
  }

  try {
    const sheets = await getGoogleSheetsClient();

    if (!sheets) {
      return {
        success: false,
        message: 'Failed to initialize Google Sheets client',
      };
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Sheet1!A:L'; // Columns A through L

    const rowData = toRowData(data);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return {
      success: true,
      message: 'Warranty registration submitted successfully',
    };
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);

    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('invalid_grant')) {
        return {
          success: false,
          message: 'Google authentication failed. Please check service account credentials.',
        };
      }
      if (error.message.includes('not found')) {
        return {
          success: false,
          message: 'Google Sheet not found. Please check the sheet ID.',
        };
      }
      if (error.message.includes('permission')) {
        return {
          success: false,
          message: 'Permission denied. Please share the sheet with the service account.',
        };
      }
    }

    return {
      success: false,
      message: 'Failed to submit warranty registration. Please try again later.',
    };
  }
}

// Initialize sheet with headers (utility function for setup)
export async function initializeSheetHeaders(): Promise<boolean> {
  if (!isConfigured()) {
    console.log('Google Sheets not configured. Cannot initialize headers.');
    return false;
  }

  try {
    const sheets = await getGoogleSheetsClient();

    if (!sheets) {
      return false;
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const headers = [
      'Timestamp',
      'Customer Name',
      'Phone',
      'Email',
      'Roll Code',
      'Category',
      'Image URL',
      'Detailer',
      'Detailer Phone',
      'Location',
      'Message',
      'Status',
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Sheet1!A1:L1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [headers],
      },
    });

    return true;
  } catch (error) {
    console.error('Error initializing sheet headers:', error);
    return false;
  }
}
