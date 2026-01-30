'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';
import { Input, Textarea, Select, FileUpload, Button } from '@/components/ui';
import { warrantyFormSchema, type WarrantyFormData } from '@/lib/validations';
import { ppfCategories } from '@/lib/assets';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function WarrantyForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WarrantyFormData>({
    resolver: zodResolver(warrantyFormSchema),
    defaultValues: {
      customerName: '',
      phoneNumber: '',
      emailAddress: '',
      sigmaRollCode: '',
      ppfCategory: '',
      detailerName: '',
      detailerMobile: '',
      location: '',
      message: '',
    },
  });

  const ppfCategoryOptions = ppfCategories.map((category) => ({
    value: category,
    label: category,
  }));

  const onSubmit = async (data: WarrantyFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      // Create FormData to handle file upload
      const formData = new FormData();
      formData.append('customerName', data.customerName);
      formData.append('phoneNumber', data.phoneNumber);
      formData.append('emailAddress', data.emailAddress);
      formData.append('sigmaRollCode', data.sigmaRollCode);
      formData.append('ppfCategory', data.ppfCategory);
      formData.append('carImage', data.carImage);
      formData.append('detailerName', data.detailerName);
      formData.append('detailerMobile', data.detailerMobile);
      formData.append('location', data.location);
      if (data.message) {
        formData.append('message', data.message);
      }

      const response = await fetch('/api/warranty', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to submit warranty registration');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.'
      );
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Registration Successful!
        </h3>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Thank you for registering your Sigma PPF warranty. You will receive a confirmation email
          shortly with your warranty details.
        </p>
        <Button
          onClick={() => setSubmitStatus('idle')}
          variant="outline"
        >
          Register Another Warranty
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-2xl p-8 md:p-12">
      {submitStatus === 'error' && (
        <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-400 font-medium">Submission Failed</p>
            <p className="text-red-400/80 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Customer Name */}
        <Input
          label="Customer Name"
          type="text"
          placeholder="Enter your full name"
          error={errors.customerName?.message}
          required
          {...register('customerName')}
        />

        {/* Phone Number */}
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+91 98765 43210"
          error={errors.phoneNumber?.message}
          required
          {...register('phoneNumber')}
        />

        {/* Email Address */}
        <Input
          label="Email Address"
          type="email"
          placeholder="your@email.com"
          error={errors.emailAddress?.message}
          required
          {...register('emailAddress')}
        />

        {/* Sigma Roll Unique Code */}
        <Input
          label="Sigma Roll Unique Code"
          type="text"
          placeholder="Enter the unique code from your PPF roll"
          error={errors.sigmaRollCode?.message}
          required
          {...register('sigmaRollCode')}
        />

        {/* PPF Category */}
        <Controller
          name="ppfCategory"
          control={control}
          render={({ field }) => (
            <Select
              label="PPF Category"
              options={ppfCategoryOptions}
              error={errors.ppfCategory?.message}
              required
              {...field}
            />
          )}
        />

        {/* Detailer/Studio Name */}
        <Input
          label="Detailer/Studio Name"
          type="text"
          placeholder="Enter the detailing studio name"
          error={errors.detailerName?.message}
          required
          {...register('detailerName')}
        />

        {/* Detailer Mobile Number */}
        <Input
          label="Detailer Mobile Number"
          type="tel"
          placeholder="+91 98765 43210"
          error={errors.detailerMobile?.message}
          required
          {...register('detailerMobile')}
        />

        {/* Location */}
        <Input
          label="Location"
          type="text"
          placeholder="City, State"
          error={errors.location?.message}
          required
          {...register('location')}
        />
      </div>

      {/* Car Image with PPF Roll - Full Width */}
      <div className="mt-6">
        <Controller
          name="carImage"
          control={control}
          render={({ field }) => (
            <FileUpload
              label="Car Image with PPF Roll"
              accept="image/*"
              maxSize={10}
              onChange={field.onChange}
              value={field.value as File | null}
              error={errors.carImage?.message}
              required
            />
          )}
        />
        <p className="text-white/50 text-sm mt-2">
          Upload a clear photo showing your vehicle with the Sigma PPF roll visible
        </p>
      </div>

      {/* Message - Full Width */}
      <div className="mt-6">
        <Textarea
          label="Message"
          placeholder="Any additional information or special requests (optional)"
          error={errors.message?.message}
          {...register('message')}
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <Button
          type="submit"
          size="lg"
          isLoading={submitStatus === 'loading'}
          className="w-full md:w-auto"
        >
          <Send className="w-5 h-5 mr-2" />
          Submit Warranty Registration
        </Button>
      </div>

      {/* Disclaimer */}
      <p className="mt-6 text-white/40 text-sm">
        By submitting this form, you agree to our warranty terms and conditions.
        Your information will be used solely for warranty registration purposes.
      </p>
    </form>
  );
}
