import { z } from 'zod';

// E-Warranty Registration Schema
export const warrantyFormSchema = z.object({
  customerName: z
    .string()
    .min(2, 'Customer name must be at least 2 characters')
    .max(100, 'Customer name must be less than 100 characters'),

  phoneNumber: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[+]?[\d\s-]+$/, 'Please enter a valid phone number'),

  emailAddress: z
    .string()
    .email('Please enter a valid email address'),

  sigmaRollCode: z
    .string()
    .min(5, 'Sigma Roll Unique Code must be at least 5 characters')
    .max(50, 'Sigma Roll Unique Code must be less than 50 characters'),

  ppfCategory: z
    .string()
    .min(1, 'Please select a PPF category'),

  carImage: z
    .custom<File>((val) => val instanceof File, 'Please upload a car image with PPF roll')
    .refine((file) => file.size <= 10 * 1024 * 1024, 'File size must be less than 10MB')
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
      'Only JPG, PNG, and WEBP images are allowed'
    ),

  detailerName: z
    .string()
    .min(2, 'Detailer/Studio name must be at least 2 characters')
    .max(100, 'Detailer/Studio name must be less than 100 characters'),

  detailerMobile: z
    .string()
    .min(10, 'Mobile number must be at least 10 digits')
    .max(15, 'Mobile number must be less than 15 digits')
    .regex(/^[+]?[\d\s-]+$/, 'Please enter a valid mobile number'),

  location: z
    .string()
    .min(3, 'Location must be at least 3 characters')
    .max(200, 'Location must be less than 200 characters'),

  message: z
    .string()
    .max(1000, 'Message must be less than 1000 characters')
    .optional()
    .or(z.literal('')),
});

export type WarrantyFormData = z.infer<typeof warrantyFormSchema>;

// Contact Form Schema (for future use)
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),

  email: z
    .string()
    .email('Please enter a valid email address'),

  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[+]?[\d\s-]+$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),

  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// API Submission Schema (after image upload, with URL instead of File)
export const warrantySubmissionSchema = z.object({
  customerName: z.string().min(2).max(100),
  phoneNumber: z.string().min(10).max(15),
  emailAddress: z.string().email(),
  sigmaRollCode: z.string().min(5).max(50),
  ppfCategory: z.string().min(1),
  imageUrl: z.string().url().optional().or(z.literal('')),
  detailerName: z.string().min(2).max(100),
  detailerMobile: z.string().min(10).max(15),
  location: z.string().min(3).max(200),
  message: z.string().max(1000).optional().or(z.literal('')),
});

export type WarrantySubmission = z.infer<typeof warrantySubmissionSchema>;
