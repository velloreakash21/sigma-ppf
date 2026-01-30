import { v2 as cloudinary } from 'cloudinary';

// Check if Cloudinary is configured
const isConfigured = () => {
  return !!(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  );
};

// Configure Cloudinary
const configureCloudinary = () => {
  if (!isConfigured()) {
    return false;
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  return true;
};

// Upload result type
interface UploadResult {
  success: boolean;
  url?: string;
  publicId?: string;
  error?: string;
  mockMode?: boolean;
}

// Upload car image to Cloudinary
export async function uploadCarImage(file: File): Promise<UploadResult> {
  // If not configured, return mock success for testing
  if (!isConfigured()) {
    console.log('Cloudinary not configured. Mock mode enabled.');
    console.log('Would upload file:', file.name, file.size, file.type);
    return {
      success: true,
      url: `https://placeholder.com/sigmappf-warranty/${Date.now()}-${file.name}`,
      publicId: `sigmappf-warranty/mock-${Date.now()}`,
      mockMode: true,
    };
  }

  try {
    configureCloudinary();

    // Convert File to base64 data URL
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString('base64');
    const mimeType = file.type;
    const dataUrl = `data:${mimeType};base64,${base64}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataUrl, {
      folder: 'sigmappf-warranty',
      resource_type: 'image',
      // Generate a unique public ID
      public_id: `warranty-${Date.now()}`,
      // Optimize for web
      transformation: [
        { quality: 'auto:good' },
        { fetch_format: 'auto' },
        { width: 1920, height: 1080, crop: 'limit' },
      ],
      // Add tags for organization
      tags: ['warranty', 'car-image'],
    });

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);

    // Provide specific error messages
    if (error instanceof Error) {
      if (error.message.includes('Invalid API Key')) {
        return {
          success: false,
          error: 'Cloudinary authentication failed. Please check API credentials.',
        };
      }
      if (error.message.includes('File size too large')) {
        return {
          success: false,
          error: 'Image file is too large. Please upload a smaller image.',
        };
      }
      if (error.message.includes('Invalid image file')) {
        return {
          success: false,
          error: 'Invalid image format. Please upload a JPEG, PNG, or WebP image.',
        };
      }
    }

    return {
      success: false,
      error: 'Failed to upload image. Please try again later.',
    };
  }
}

// Delete image from Cloudinary (utility function)
export async function deleteImage(publicId: string): Promise<boolean> {
  if (!isConfigured()) {
    console.log('Cloudinary not configured. Cannot delete image.');
    return false;
  }

  try {
    configureCloudinary();
    await cloudinary.uploader.destroy(publicId);
    return true;
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    return false;
  }
}

// Get optimized image URL with transformations
export function getOptimizedImageUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: string;
    format?: string;
  } = {}
): string {
  if (!isConfigured()) {
    return '';
  }

  configureCloudinary();

  const { width = 800, height, quality = 'auto', format = 'auto' } = options;

  return cloudinary.url(publicId, {
    transformation: [
      { quality },
      { fetch_format: format },
      height
        ? { width, height, crop: 'fill' }
        : { width, crop: 'scale' },
    ],
    secure: true,
  });
}
