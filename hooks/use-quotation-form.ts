"use client";

import { useCallback, useState } from "react";

export type QuotationFormData = {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  productType: string;
  estimatedQuantity: string;
  customPrinting: "yes" | "no" | "";
  additionalNotes: string;
};

export type QuotationFormField = keyof QuotationFormData;

export type QuotationFormErrors = Partial<Record<QuotationFormField, string>>;

export const INITIAL_QUOTATION_FORM: QuotationFormData = {
  fullName: "",
  companyName: "",
  phoneNumber: "",
  email: "",
  productType: "",
  estimatedQuantity: "",
  customPrinting: "",
  additionalNotes: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(data: QuotationFormData): QuotationFormErrors {
  const errors: QuotationFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required.";
  }

  if (data.email.trim() && !EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.productType) {
    errors.productType = "Please select a product type.";
  }

  if (!data.estimatedQuantity.trim()) {
    errors.estimatedQuantity = "Estimated quantity is required.";
  }

  return errors;
}

export function useQuotationForm() {
  const [formData, setFormData] =
    useState<QuotationFormData>(INITIAL_QUOTATION_FORM);
  const [errors, setErrors] = useState<QuotationFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<
    Partial<Record<QuotationFormField, boolean>>
  >({});

  const setField = useCallback(
    <K extends QuotationFormField>(field: K, value: QuotationFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    },
    [],
  );

  const setFieldTouched = useCallback((field: QuotationFormField) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_QUOTATION_FORM);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, []);

  const validate = useCallback(() => {
    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [formData]);

  const submit = useCallback(
    async (onSuccess: (data: QuotationFormData) => void | Promise<void>) => {
      setTouched({
        fullName: true,
        phoneNumber: true,
        email: true,
        productType: true,
        estimatedQuantity: true,
      });

      if (!validate()) {
        return false;
      }

      setIsSubmitting(true);

      try {
        await onSuccess(formData);
        return true;
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validate],
  );

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    setField,
    setFieldTouched,
    resetForm,
    validate,
    submit,
  };
}
