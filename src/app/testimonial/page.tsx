"use client"

import AnimatedBackground from "@/components/AnimatedBackground";
import MyFooter from "@/components/MyFooter";
import React, { useActionState, useState, useRef } from "react";
import { login, type LoginResult } from "./submitTestimonial";

// Types
interface FormField {
    name: string;
    label: string;
    placeholder: string;
    type: string;
    required: boolean;
    helperText?: string;
}

interface PhotoUploadProps {
    photoPreview: string | null;
    onPhotoChange: (file: File | null) => void;
    disabled: boolean;
}

interface FormInputProps {
    field: FormField;
    disabled: boolean;
}

// Constants
const FORM_FIELDS: FormField[] = [
    {
        name: "name",
        label: "Full Name",
        placeholder: "John Doe",
        type: "text",
        required: true
    },
    {
        name: "email",
        label: "Email",
        placeholder: "example@mail.com",
        type: "email",
        required: false,
        helperText: "Optional but recommended for verification"
    },
    {
        name: "role",
        label: "Role / Company",
        placeholder: "Optional",
        type: "text",
        required: false
    },
];

const FILE_VALIDATION = {
    ALLOWED_TYPES: ["image/jpeg", "image/png"],
    MAX_SIZE: 2 * 1024 * 1024, // 2MB
    MAX_SIZE_TEXT: "2MB"
};

// Utility functions
const validateFile = (file: File): string | null => {
    if (!FILE_VALIDATION.ALLOWED_TYPES.includes(file.type)) {
        return "Only JPEG or PNG images are allowed.";
    }
    if (file.size > FILE_VALIDATION.MAX_SIZE) {
        return `File size must be under ${FILE_VALIDATION.MAX_SIZE_TEXT}.`;
    }
    return null;
};

const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

// Components
const FormInput: React.FC<FormInputProps> = ({ field, disabled }) => (
    <div className="relative w-full">
        <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder=" "
            required={field.required}
            disabled={disabled}
            className="peer block w-full h-14 px-4 pt-5 pb-2 text-base text-white bg-black/30 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <label
            htmlFor={field.name}
            className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-400 peer-focus:text-xs"
        >
            {field.label}
            {field.required && <span className="text-red-500"> *</span>}
        </label>
        {field.helperText && (
            <p className="mt-1 text-xs text-gray-400">{field.helperText}</p>
        )}
    </div>
);

const TextArea: React.FC<{ disabled: boolean }> = ({ disabled }) => (
    <div className="relative w-full">
        <textarea
            name="testimonial"
            placeholder=" "
            required
            disabled={disabled}
            className="peer block w-full px-4 pt-5 pb-2 text-base text-white bg-black/30 border border-slate-800 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
        />
        <label
            htmlFor="testimonial"
            className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-400 peer-focus:text-xs"
        >
            Describe your experience<span className="text-red-500"> *</span>
        </label>
    </div>
);

const PhotoUpload: React.FC<PhotoUploadProps> = ({ photoPreview, onPhotoChange, disabled }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const validationError = validateFile(file);
        if (validationError) {
            alert(validationError);
            e.target.value = "";
            return;
        }

        try {
            onPhotoChange(file);
        } catch (error) {
            console.error("Error processing file:", error);
            e.target.value = "";
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemovePhoto = () => {
        onPhotoChange(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="flex items-center gap-3 w-full my-4">
            <div className="w-24 h-24 rounded-full border border-slate-700 overflow-hidden bg-slate-800 flex items-center justify-center">
                {photoPreview ? (
                    <img
                        src={photoPreview}
                        alt="Profile preview"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-slate-500 text-sm">No Photo</span>
                )}
            </div>

            <div className="flex flex-col h-24 gap-2 justify-center flex-1">
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                />
                <div className="flex gap-2 w-full">
                    <button
                        type="button"
                        onClick={handleUploadClick}
                        disabled={disabled}
                        className="flex-1 h-10 bg-blue-800/50 text-white border border-white/10 rounded-lg hover:bg-blue-800/70 transition text-sm hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {photoPreview ? "Change Photo" : "Upload Photo"}
                    </button>

                    {photoPreview && (
                        <button
                            type="button"
                            onClick={handleRemovePhoto}
                            disabled={disabled}
                            className="h-10 px-3 bg-slate-700/50 text-slate-300 border border-slate-600 rounded-lg hover:bg-slate-700/60 transition text-sm hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Remove
                        </button>
                    )}
                </div>
                <p className="mt-1 text-xs text-gray-500">
                    Optional: Upload a profile picture (JPEG/PNG, max {FILE_VALIDATION.MAX_SIZE_TEXT})
                </p>
            </div>
        </div>
    );
};

const FormHeader: React.FC = () => (
    <div className="flex flex-col items-center w-full text-center gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold">Share Your Testimonial</h1>
        <p className="text-sm sm:text-base">
            I&apos;d love to hear your experience working with me. Your testimonial may be displayed on my portfolio with your consent.
        </p>
    </div>
);

const SuccessMessage: React.FC = () => (
    <div className="w-full max-w-lg sm:w-[32rem] px-6 py-24 flex flex-col items-center bg-slate-950/80 rounded-3xl border border-slate-800 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Thank You!</h2>
        <p className="text-base sm:text-lg">
            Your testimonial has been submitted successfully. I really appreciate your feedback!
        </p>
    </div>
);

const PublicConsentCheckbox: React.FC<{ disabled: boolean }> = ({ disabled }) => (
    <label className="flex items-center gap-4 px-4 text-sm sm:text-base">
        <input
            type="checkbox"
            name="allowPublic"
            disabled={disabled}
            className="w-4 h-4 accent-blue-500 disabled:opacity-50"
        />
        I agree to have this testimonial displayed publicly on the portfolio
    </label>
);

const SubmitButton: React.FC<{ pending: boolean }> = ({ pending }) => (
    <button
        type="submit"
        disabled={pending}
        className="w-full h-12 bg-blue-800/50 text-lg border border-white/10 rounded-lg hover:bg-blue-800/70 active:bg-blue-900/70 transition disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
    >
        {pending ? "Submitting..." : "Submit"}
    </button>
);

// Hooks
const usePhotoUpload = () => {
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);

    const handlePhotoChange = async (file: File | null) => {
        if (!file) {
            setPhotoPreview(null);
            return;
        }

        try {
            const dataURL = await readFileAsDataURL(file);
            setPhotoPreview(dataURL);
        } catch (error) {
            console.error("Error reading file:", error);
            setPhotoPreview(null);
        }
    };

    return { photoPreview, handlePhotoChange };
};

// Main Component
const TestimonialPage: React.FC = () => {
    const [state, formAction, pending] = useActionState<LoginResult | null, FormData>(
        login,
        null
    );
    const [submitted, setSubmitted] = useState(false);
    const { photoPreview, handlePhotoChange } = usePhotoUpload();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await formAction(formData);
        setSubmitted(true);
    };

    return (
        <div className="bg-slate-950 relative flex flex-col min-h-screen">
            <AnimatedBackground />

            <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 text-white text-base sm:text-xl relative">
                {!submitted ? (
                    <form
                        onSubmit={handleSubmit}
                        onKeyDown={handleKeyDown}
                        className="w-full max-w-xl sm:w-[36rem] flex flex-col gap-8 px-4 sm:px-6 py-12 sm:py-16 items-center bg-slate-950/80 rounded-3xl border border-slate-800 backdrop-blur-sm"
                    >
                        <FormHeader />

                        <div className="flex flex-col w-full gap-6">
                            {FORM_FIELDS.map((field) => (
                                <FormInput
                                    key={field.name}
                                    field={field}
                                    disabled={pending}
                                />
                            ))}

                            <TextArea disabled={pending} />

                            <PhotoUpload
                                photoPreview={photoPreview}
                                onPhotoChange={handlePhotoChange}
                                disabled={pending}
                            />

                            <PublicConsentCheckbox disabled={pending} />
                        </div>

                        <SubmitButton pending={pending} />
                    </form>
                ) : (
                    <SuccessMessage />
                )}
            </main>

            <MyFooter />
        </div>
    );
};

export default TestimonialPage;