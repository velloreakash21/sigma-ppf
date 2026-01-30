'use client';

import { useCallback, useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface FileUploadProps {
  label?: string;
  error?: string;
  accept?: string;
  maxSize?: number; // in MB
  onChange: (file: File | null) => void;
  value?: File | null;
  required?: boolean;
}

export default function FileUpload({
  label,
  error,
  accept = 'image/*',
  maxSize = 10,
  onChange,
  value,
  required,
}: FileUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleFile = useCallback(
    (file: File | null) => {
      setFileError(null);

      if (!file) {
        setPreview(null);
        onChange(null);
        return;
      }

      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        setFileError(`File size must be less than ${maxSize}MB`);
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        setFileError('Please upload an image file');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      onChange(file);
    },
    [maxSize, onChange]
  );

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    },
    [handleFile]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0]);
      }
    },
    [handleFile]
  );

  const handleRemove = useCallback(() => {
    setPreview(null);
    onChange(null);
  }, [onChange]);

  const displayError = error || fileError;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-white/80">
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      <div
        className={`relative border-2 border-dashed rounded-xl transition-all duration-300 ${
          dragActive
            ? 'border-primary bg-primary/10'
            : displayError
            ? 'border-red-500'
            : 'border-white/20 hover:border-white/40'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="relative p-4">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-dark-100">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            </div>
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 p-2 bg-dark-100 rounded-full hover:bg-red-500/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            {value && (
              <p className="mt-2 text-sm text-white/60 text-center truncate">
                {value.name}
              </p>
            )}
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center p-8 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-dark-100 flex items-center justify-center mb-4">
              {dragActive ? (
                <ImageIcon className="w-8 h-8 text-primary" />
              ) : (
                <Upload className="w-8 h-8 text-white/40" />
              )}
            </div>
            <p className="text-white/80 text-center mb-2">
              {dragActive ? 'Drop your image here' : 'Drag & drop your image here'}
            </p>
            <p className="text-white/40 text-sm mb-4">or</p>
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors">
              Browse Files
            </span>
            <p className="text-white/40 text-xs mt-4">
              Supports: JPG, PNG, WEBP (Max {maxSize}MB)
            </p>
            <input
              type="file"
              accept={accept}
              onChange={handleChange}
              className="hidden"
            />
          </label>
        )}
      </div>

      {displayError && <p className="text-sm text-red-400">{displayError}</p>}
    </div>
  );
}
