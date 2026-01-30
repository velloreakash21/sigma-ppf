import { NextRequest, NextResponse } from 'next/server';
import { warrantySubmissionSchema } from '@/lib/validations';
import { uploadCarImage } from '@/lib/cloudinary';
import { appendWarrantyData } from '@/lib/google-sheets';

// Maximum file size (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// Allowed image types
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export async function POST(request: NextRequest) {
  try {
    // Parse multipart form data
    const formData = await request.formData();

    // Extract form fields
    const customerName = formData.get('customerName') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const emailAddress = formData.get('emailAddress') as string;
    const sigmaRollCode = formData.get('sigmaRollCode') as string;
    const ppfCategory = formData.get('ppfCategory') as string;
    const detailerName = formData.get('detailerName') as string;
    const detailerMobile = formData.get('detailerMobile') as string;
    const location = formData.get('location') as string;
    const message = formData.get('message') as string | null;
    const carImage = formData.get('carImage') as File | null;

    // Handle image upload
    let imageUrl = '';

    if (carImage && carImage.size > 0) {
      // Validate file size
      if (carImage.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            error: 'Image file is too large. Maximum size is 10MB.',
          },
          { status: 400 }
        );
      }

      // Validate file type
      if (!ALLOWED_TYPES.includes(carImage.type)) {
        return NextResponse.json(
          {
            success: false,
            error: 'Invalid image format. Only JPEG, PNG, and WebP are allowed.',
          },
          { status: 400 }
        );
      }

      // Upload to Cloudinary
      const uploadResult = await uploadCarImage(carImage);

      if (!uploadResult.success) {
        return NextResponse.json(
          {
            success: false,
            error: uploadResult.error || 'Failed to upload image.',
          },
          { status: 500 }
        );
      }

      imageUrl = uploadResult.url || '';
    }

    // Prepare submission data
    const submissionData = {
      customerName,
      phoneNumber,
      emailAddress,
      sigmaRollCode,
      ppfCategory,
      imageUrl,
      detailerName,
      detailerMobile,
      location,
      message: message || '',
    };

    // Validate submission data
    const validationResult = warrantySubmissionSchema.safeParse(submissionData);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((issue) => ({
        field: String(issue.path.join('.')),
        message: issue.message,
      }));

      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: errors,
        },
        { status: 400 }
      );
    }

    // Append to Google Sheets
    const sheetResult = await appendWarrantyData(validationResult.data);

    if (!sheetResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: sheetResult.message,
        },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: sheetResult.message,
      mockMode: sheetResult.mockMode,
      data: {
        customerName: validationResult.data.customerName,
        emailAddress: validationResult.data.emailAddress,
        sigmaRollCode: validationResult.data.sigmaRollCode,
        ppfCategory: validationResult.data.ppfCategory,
        registrationDate: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error processing warranty submission:', error);

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('body exceeded')) {
        return NextResponse.json(
          {
            success: false,
            error: 'Request too large. Please reduce file size.',
          },
          { status: 413 }
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Handle GET request with helpful message
export async function GET() {
  return NextResponse.json(
    {
      message: 'Warranty registration endpoint. Use POST to submit a registration.',
      requiredFields: [
        'customerName',
        'phoneNumber',
        'emailAddress',
        'sigmaRollCode',
        'ppfCategory',
        'carImage (file)',
        'detailerName',
        'detailerMobile',
        'location',
      ],
      optionalFields: ['message'],
    },
    { status: 200 }
  );
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
