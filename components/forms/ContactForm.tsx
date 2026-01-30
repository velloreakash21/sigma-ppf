'use client';

import { useState, FormEvent } from 'react';
import { Input, Textarea } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  query: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  query?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    query: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.query.trim()) {
      newErrors.query = 'Please enter your query';
    } else if (formData.query.trim().length < 10) {
      newErrors.query = 'Query must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Thank You for Reaching Out!
        </h3>
        <p className="text-white/60 max-w-md mx-auto">
          We have received your query and will get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', phone: '', query: '' });
          }}
        >
          Send Another Query
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Full Name"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
      />

      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        required
      />

      <Textarea
        label="Your Query"
        name="query"
        placeholder="Tell us how we can help you..."
        value={formData.query}
        onChange={handleChange}
        error={errors.query}
        required
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
      >
        <Send className="w-5 h-5 mr-2" />
        Send Message
      </Button>
    </form>
  );
}
