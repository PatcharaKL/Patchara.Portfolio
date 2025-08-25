"use client"

import AnimatedBackground from "@/components/AnimatedBackground";
import React, { useActionState, useState, useRef } from "react";
import { login, type LoginResult } from "./submitTestimonial";
import MyFooter from "@/components/MyFooter";

const feedbackFields = [
    { name: "name", label: "Full Name", placeholder: "John Doe", type: "text", required: true },
    { name: "email", label: "Email", placeholder: "example@mail.com", type: "email", required: false },
    { name: "role", label: "Role / Company", placeholder: "Optional", type: "text", required: false },
];

const TestimonialPage = () => {
    const [state, formAction, pending] = useActionState<LoginResult | null, FormData>(
        login,
        null
    );
    const [submitted, setSubmitted] = useState(false);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === "Enter") e.preventDefault();
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!["image/jpeg", "image/png"].includes(file.type)) {
            alert("Only JPEG or PNG images are allowed.");
            e.target.value = "";
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("File size must be under 2MB.");
            e.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
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
                        {/* Header */}
                        <div className="flex flex-col items-center w-full text-center gap-2">
                            <h1 className="text-2xl sm:text-3xl font-bold">Share Your Testimonial</h1>
                            <p className="text-sm sm:text-base">
                                I'd love to hear your experience working with me. Your testimonial may be displayed on my portfolio with your consent.
                            </p>
                        </div>

                        {/* Inputs with floating labels */}
                        <div className="flex flex-col w-full gap-6">
                            {feedbackFields.map((field) => (
                                <div key={field.name} className="relative w-full">
                                    <input
                                        id={field.name}
                                        name={field.name}
                                        type={field.type}
                                        placeholder=" "
                                        required={field.required}
                                        disabled={pending}
                                        className="peer block w-full h-14 px-4 pt-5 pb-2 text-base text-white bg-black/30 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                    <label
                                        htmlFor={field.name}
                                        className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-400 peer-focus:text-xs"
                                    >
                                        {field.label}{field.required && <span className="text-red-500"> *</span>}
                                    </label>

                                    {/* Optional helper for email */}
                                    {field.name === "email" && (
                                        <p className="mt-1 text-xs text-gray-400">Optional but recommended for verification</p>
                                    )}
                                </div>
                            ))}

                            <div className="relative w-full">
                                <textarea
                                    name="testimonial"
                                    placeholder=" "
                                    required
                                    disabled={pending}
                                    className="peer block w-full px-4 pt-5 pb-2 text-base text-white bg-black/30 border border-slate-800 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                                ></textarea>
                                <label
                                    htmlFor="testimonial"
                                    className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-400 peer-focus:text-xs"
                                >
                                    Describe your experience{<span className="text-red-500"> *</span>}
                                </label>
                            </div>

                            {/* Photo upload */}
                            <div className="flex items-center gap-3 w-full my-4">
                                <div className="w-24 h-24 rounded-full border border-slate-700 overflow-hidden bg-slate-800 flex items-center justify-center">
                                    {photoPreview ? (
                                        <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-slate-500 text-sm">No Photo</span>
                                    )}
                                </div>

                                <div className="flex flex-col h-24 gap-2 justify-center flex-1">
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        onChange={handlePhotoChange}
                                        ref={fileInputRef}
                                        className="hidden"
                                    />
                                    <div className="flex gap-2 w-full">
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            disabled={pending}
                                            className="flex-1 h-10 bg-blue-800/50 text-white border border-white/10 rounded-lg hover:bg-blue-800/70 transition text-sm hover:cursor-pointer"
                                        >
                                            {photoPreview ? "Change Photo" : "Upload Photo"}
                                        </button>

                                        {photoPreview && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setPhotoPreview(null);
                                                    if (fileInputRef.current) fileInputRef.current.value = "";
                                                }}
                                                className="h-10 px-3 bg-slate-700/50 text-slate-300 border border-slate-600 rounded-lg hover:bg-slate-700/60 transition text-sm hover:cursor-pointer"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
                                        Optional: Upload a profile picture (JPEG/PNG, max 2MB)
                                    </p>
                                </div>
                            </div>

                            {/* Show on portfolio checkbox */}
                            <label className="flex items-center gap-4 px-4 text-sm sm:text-base">
                                <input
                                    type="checkbox"
                                    name="allowPublic"
                                    disabled={pending}
                                    className="w-4 h-4 accent-blue-500"
                                />
                                I agree to have this testimonial displayed publicly on the portfolio
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={pending}
                            className="w-full h-12 bg-blue-800/50 text-lg border border-white/10 rounded-lg hover:bg-blue-800/70 active:bg-blue-900/70 transition disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
                        >
                            {pending ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                ) : (
                    <div className="w-full max-w-lg sm:w-[32rem] px-6 py-24 flex flex-col items-center bg-slate-950/80 rounded-3xl border border-slate-800 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Thank You!</h2>
                        <p className="text-base sm:text-lg">
                            Your testimonial has been submitted successfully. I really appreciate your feedback!
                        </p>
                    </div>
                )}
            </main>

            {/* Footer */}
            <MyFooter />
        </div>
    );
};

export default TestimonialPage;
