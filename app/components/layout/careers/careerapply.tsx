"use client";
import { site, SectionProps, SiteData } from "@/app/data";

import React, { useState, useRef } from "react";
import {
  UploadCloud,
  Send,
  Lock,
  CheckCircle2,
  ChevronDown,
  FileText,
  X,
} from "lucide-react";
import type {
  NgoData,
  NgoCareersSection,
  NgoCareerApplyForm,
  NgoCareerFormField,
} from "@/app/data";



export default function CareerApply({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const careersData = data.careersSection as NgoCareersSection | undefined;
  const applyForm = careersData?.applyForm as NgoCareerApplyForm | undefined;

  const [formValues, setFormValues] = useState<
    Record<string, string | boolean>
  >({});
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!applyForm) return null;

  const {
    applicantInfo,
    resumeSection,
    coverLetterSection,
    additionalInfoSection,
    confirmation,
    submitButton,
    securityFooter,
    successState,
  } = applyForm;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormValues((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#e8eee7] bg-white p-6 shadow-xs sm:p-10 lg:p-12">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f6ef] text-[#1d5e2d]">
                <CheckCircle2 className="h-10 w-10 stroke-[2]" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#16351d] sm:text-3xl">
                {successState.title}
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-[#59665b]">
                {successState.message}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFile(null);
                  setFormValues({});
                }}
                className="mt-6 inline-flex rounded-xl bg-[#0d4019] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#16351d] sm:text-sm"
              >
                {successState.buttonLabel}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
              <div>
                <h2 className="font-serif text-xl font-bold tracking-tight text-[#16351d] sm:text-2xl">
                  {applicantInfo.title}
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {applicantInfo.fields.map((field: NgoCareerFormField) => {
                    const isFullWidth = field.colSpan === "full";
                    const currentValue =
                      (formValues[field.name] as string) || "";

                    return (
                      <div
                        key={field.id}
                        className={
                          isFullWidth ? "sm:col-span-2" : "sm:col-span-1"
                        }
                      >
                        <label className="block text-xs font-bold text-[#16351d] sm:text-sm">
                          {field.label}{" "}
                          {field.required && (
                            <span className="text-red-500">*</span>
                          )}
                        </label>

                        {field.type === "select" ? (
                          <div className="relative mt-2">
                            <select
                              name={field.name}
                              required={field.required}
                              value={currentValue}
                              onChange={handleInputChange}
                              className="w-full appearance-none rounded-xl border border-[#dce4db] bg-white px-4 py-3 text-xs text-[#16351d] outline-none transition-colors focus:border-[#1d5e2d] focus:ring-1 focus:ring-[#1d5e2d] sm:text-sm"
                            >
                              <option
                                value=""
                                disabled
                                className="text-[#8a998c]"
                              >
                                {field.placeholder}
                              </option>
                              {field.options?.map((opt: string) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#59665b]" />
                          </div>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                            value={currentValue}
                            onChange={handleInputChange}
                            className="mt-2 w-full rounded-xl border border-[#dce4db] bg-white px-4 py-3 text-xs text-[#16351d] placeholder-[#8a998c] outline-none transition-colors focus:border-[#1d5e2d] focus:ring-1 focus:ring-[#1d5e2d] sm:text-sm"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold tracking-tight text-[#16351d] sm:text-2xl">
                  {resumeSection.title}
                </h2>
                <p className="mt-1 text-xs text-[#59665b] sm:text-sm">
                  {resumeSection.subtitle}
                </p>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />

                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`mt-3 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition-all ${
                    isDragging
                      ? "border-[#1d5e2d] bg-[#f0f6ef]"
                      : "border-[#d5e0d3] bg-[#fcfdfc] hover:bg-[#f6f9f5]"
                  }`}
                >
                  {file ? (
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-[#1d5e2d]" />
                      <div className="text-left">
                        <p className="text-sm font-bold text-[#16351d]">
                          {file.name}
                        </p>
                        <p className="text-xs text-[#59665b]">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                        className="rounded-full bg-red-100 p-1 text-red-600 hover:bg-red-200"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f6ef] text-[#1d5e2d]">
                        <UploadCloud className="h-6 w-6 stroke-[1.8]" />
                      </div>
                      <p className="text-xs font-semibold text-[#16351d] sm:text-sm">
                        {resumeSection.dragDropText}
                      </p>
                      <p className="my-1 text-xs text-[#8a998c]">
                        {resumeSection.orText}
                      </p>
                      <span className="text-xs font-bold text-[#1d5e2d] underline sm:text-sm">
                        {resumeSection.browseFileText}
                      </span>
                    </>
                  )}
                </div>
                <p className="mt-2 text-right text-[11px] text-[#8a998c]">
                  {resumeSection.maxSizeNote}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold tracking-tight text-[#16351d] sm:text-2xl">
                  {coverLetterSection.title}
                </h2>
                <p className="mt-1 text-xs text-[#59665b] sm:text-sm">
                  {coverLetterSection.label}
                </p>
                <textarea
                  name="coverLetter"
                  rows={4}
                  placeholder={coverLetterSection.placeholder}
                  value={(formValues.coverLetter as string) || ""}
                  onChange={handleInputChange}
                  className="mt-3 w-full rounded-xl border border-[#dce4db] bg-white p-4 text-xs text-[#16351d] placeholder-[#8a998c] outline-none transition-colors focus:border-[#1d5e2d] focus:ring-1 focus:ring-[#1d5e2d] sm:text-sm"
                />
                <p className="mt-1 text-right text-[11px] text-[#8a998c]">
                  {coverLetterSection.minCharNote}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold tracking-tight text-[#16351d] sm:text-2xl">
                  {additionalInfoSection.title}
                </h2>
                <p className="mt-1 text-xs text-[#59665b] sm:text-sm">
                  {additionalInfoSection.label}
                </p>
                <div className="relative mt-3">
                  <select
                    name="heardAbout"
                    value={(formValues.heardAbout as string) || ""}
                    onChange={handleInputChange}
                    className="w-full appearance-none rounded-xl border border-[#dce4db] bg-white px-4 py-3 text-xs text-[#16351d] outline-none transition-colors focus:border-[#1d5e2d] focus:ring-1 focus:ring-[#1d5e2d] sm:text-sm"
                  >
                    <option value="" disabled className="text-[#8a998c]">
                      {additionalInfoSection.placeholder}
                    </option>
                    {additionalInfoSection.options?.map((opt: string) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#59665b]" />
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="confirmed"
                  name="confirmed"
                  required
                  checked={Boolean(formValues.confirmed)}
                  onChange={handleInputChange}
                  className="mt-0.5 h-4 w-4 rounded-sm border-[#dce4db] text-[#0d4019] accent-[#0d4019] focus:ring-[#1d5e2d]"
                />
                <label
                  htmlFor="confirmed"
                  className="text-xs text-[#59665b] sm:text-sm cursor-pointer select-none leading-relaxed"
                >
                  {confirmation.text}
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0d4019] py-4 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#16351d] sm:text-sm cursor-pointer"
                >
                  <span>{submitButton.label}</span>
                  <Send className="h-4 w-4 stroke-[2]" />
                </button>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#59665b]">
                  <Lock className="h-3.5 w-3.5 stroke-[2] text-[#1d5e2d]" />
                  <span>{securityFooter.text}</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
