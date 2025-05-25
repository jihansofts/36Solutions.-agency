import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

interface FormData {
  firstName: string;
  phone: string;
  email: string;
  message: string;
}
interface Props {
  onClose: () => void;
}
export default function FormPop({ onClose }: Props) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus({
        success: true,
        message: result.message,
      });

      // Reset form
      setFormData({
        firstName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="fixed inset-0 bg-[#17102FBA] bg-opacity-30 zIndex flex items-start justify-center  lg:p-2 md:p-4 sm:p-6 p-6   overflow-y-auto md:overflow-y-auto  ">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1 z-100 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-[600px] mx-auto my-0">
        <div className="relative w-full bg-[url('/images/bginputbox.png')] bg-no-repeat bg-cover bg-center rounded-4xl p-6 sm:p-10">
          {/* Heading */}
          <h5 className="text-white text-center text-lg sm:text-2xl md:text-[32px] font-mono font-bold mb-6">
            Ready to increase your business with our website?
          </h5>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white rounded-3xl p-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="text-[#262626] font-mono text-[16px]">
                Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John*"
                required
                className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-[#262626] font-mono text-[16px]">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                required
                className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
              />
            </div>
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="text-[#262626] font-mono text-[16px]">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 212 555 4567"
                required
                className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-[#262626] font-mono text-[16px]">
                Tell us about your business
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello 36web solutions, I need your help with..."
                required
                className="w-full border-b text-black border-[#E9E9E9] px-4 py-3 placeholder-[#B7B8BE]"
                rows={5}
              />
            </div>

            {/* Checklist Info */}
            <div className="space-y-2 pt-2">
              <p className="text-[#262626] font-mono text-[16px] font-semibold">
                Your website will include these sections
              </p>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {[
                    "Hero section with banner",
                    "About us section",
                    "Services section",
                    "Testimonial section",
                    "FAQ section",
                    "Footer section",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-[#262626] font-mono text-[12px]">
                      <FaCheckCircle className="text-green-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[#262626] font-mono text-[16px]">
                You can add more new and custom sections, but that will cost you
                extra
              </p>
            </div>

            {/* Footer & Button */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div className="sm:w-[260px]">
                <p className="text-[14px] text-[#B7B8BE] font-mono">
                  After you fill out the form and send message we will reach out
                  to you
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-[14px] cursor-pointer bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white py-3 px-4 rounded-lg font-bold disabled:opacity-50 w-full sm:w-auto">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Submission Status */}
            {submitStatus && (
              <div
                className={`mt-4 p-3 rounded-md ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
