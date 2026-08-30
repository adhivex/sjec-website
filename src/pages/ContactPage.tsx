import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';
import type { EnquiryFormData } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Building2,
  FileCheck,
  ArrowRight
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid contact number';
    }
    if (!formData.service) newErrors.service = 'Please select a primary discipline';
    if (!formData.message.trim()) newErrors.message = 'Please provide brief project parameters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        badge="Enquiry &amp; RFQ"
        title="Let's Discuss Your Project"
        description="Connect with Sai Jagannath Engineering &amp; Construction for industrial electrical, instrumentation and project execution requirements."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Main Form & Contact Information Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Interactive RFQ Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border-2 border-border p-8 sm:p-12 rounded-sm shadow-card">
                
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-sm bg-navy/10 text-navy">
                    <FileCheck className="w-4 h-4 text-gold" />
                    <span>PROJECT ENQUIRY // RFQ</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-navy font-heading">
                    Request a Technical Proposal
                  </h2>
                  <p className="text-slate text-sm sm:text-base mt-2 font-sans">
                    Submit your project parameters and technical specifications below. Our engineering managers will review and respond promptly.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="p-10 rounded-sm bg-navy-deep text-white border-2 border-gold/40 text-center animate-in fade-in zoom-in duration-300 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gold text-navy-dark flex items-center justify-center mx-auto shadow-gold-glow">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold uppercase text-white font-heading">
                      Enquiry Received
                    </h3>
                    <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed font-sans">
                      Thank you for contacting Sai Jagannath Engineering &amp; Construction. Your project parameters have been recorded and assigned for technical review.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="btn-gold text-xs px-7 py-3 uppercase font-bold tracking-wider mt-4"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Mohanty"
                          className={`w-full px-4 py-3.5 text-sm rounded-sm border font-sans ${
                            errors.name ? 'border-red-500 bg-red-50/20' : 'border-border bg-offwhite'
                          } focus:border-gold focus:bg-white focus:outline-none transition-colors`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500 font-sans">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-1.5">
                          Company / Client Name <span className="text-slate/60 text-[10px] lowercase font-sans">(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Industrial Plant Corp"
                          className="w-full px-4 py-3.5 text-sm rounded-sm border border-border bg-offwhite focus:border-gold focus:bg-white focus:outline-none transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-1.5">
                          Corporate Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3.5 text-sm rounded-sm border font-sans ${
                            errors.email ? 'border-red-500 bg-red-50/20' : 'border-border bg-offwhite'
                          } focus:border-gold focus:bg-white focus:outline-none transition-colors`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500 font-sans">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-1.5">
                          Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 94370 00000"
                          className={`w-full px-4 py-3.5 text-sm rounded-sm border font-sans ${
                            errors.phone ? 'border-red-500 bg-red-50/20' : 'border-border bg-offwhite'
                          } focus:border-gold focus:bg-white focus:outline-none transition-colors`}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500 font-sans">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-1.5">
                        Primary Discipline Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 text-sm rounded-sm border font-sans ${
                          errors.service ? 'border-red-500 bg-red-50/20' : 'border-border bg-offwhite'
                        } focus:border-gold focus:bg-white focus:outline-none transition-colors`}
                      >
                        <option value="">-- Select Required Discipline --</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Complete Turnkey Electrical & Instrumentation Scope">
                          Complete Turnkey Electrical &amp; Instrumentation Scope
                        </option>
                      </select>
                      {errors.service && <p className="mt-1 text-xs text-red-500 font-sans">{errors.service}</p>}
                    </div>

                    {/* Message / Scope */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-1.5">
                        Project Details &amp; Scope Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please include plant sector, capacity, location, estimated schedule, or specific equipment parameters (e.g. HT/LT panels, transformer erection, cable laying, Robo Lab)."
                        className={`w-full px-4 py-3.5 text-sm rounded-sm border font-sans ${
                          errors.message ? 'border-red-500 bg-red-50/20' : 'border-border bg-offwhite'
                        } focus:border-gold focus:bg-white focus:outline-none transition-colors`}
                      ></textarea>
                      {errors.message && <p className="mt-1 text-xs text-red-500 font-sans">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-gold py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group disabled:opacity-70 shadow-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-navy-dark border-t-transparent rounded-full animate-spin"></span>
                            <span>Processing Technical Request...</span>
                          </>
                        ) : (
                          <>
                            <span>SEND ENQUIRY</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-[11px] font-mono text-slate text-center pt-2">
                      <ShieldCheck className="w-3.5 h-3.5 inline text-gold mr-1" />
                      COMMERCIAL IN CONFIDENCE // FACTUAL RECORD ONLY
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* Right Column: Verified Public Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Corporate Contact Card */}
              <div className="bg-navy-deep text-white p-8 sm:p-10 rounded-sm border border-border-navy shadow-xl space-y-6">
                <div className="border-b border-navy-light/30 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-gold">PUBLIC VERIFIED OFFICE</span>
                  <h3 className="text-2xl font-extrabold uppercase text-white font-heading mt-1">
                    Corporate Contact
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-gray-200 font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-mono font-bold text-gold uppercase">Registered Office</div>
                      <p className="mt-0.5 leading-snug">{COMPANY_INFO.contact.address.displayFull}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-mono font-bold text-gold uppercase">Official Email</div>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-gold transition-colors block mt-0.5">
                        {COMPANY_INFO.contact.email}
                      </a>
                      <a href={`mailto:${COMPANY_INFO.contact.enquiryEmail}`} className="text-xs text-gray-400 hover:text-gold transition-colors block">
                        {COMPANY_INFO.contact.enquiryEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-mono font-bold text-gold uppercase">Telephone (Office)</div>
                      <p className="mt-0.5">{COMPANY_INFO.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-mono font-bold text-gold uppercase">Business Hours</div>
                      <p className="mt-0.5 text-xs text-gray-300">{COMPANY_INFO.contact.workingHours}</p>
                      <p className="text-[11px] text-gold mt-1 font-mono">{COMPANY_INFO.contact.emergencySupport}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-navy-surface/60 rounded-sm border border-navy-light/30 text-xs text-gray-300 font-sans">
                  <div className="font-bold text-white uppercase mb-1 font-heading">Execution Footprint</div>
                  Active site deployment capabilities across Odisha, Jharkhand, West Bengal, and industrial corridors across India.
                </div>
              </div>

              {/* Verified Public Corporate Card */}
              <div className="bg-offwhite p-7 rounded-sm border-2 border-border space-y-3 font-sans">
                <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-navy flex items-center gap-2 font-heading">
                  <Building2 className="w-4 h-4 text-gold" />
                  Corporate Structure
                </h4>
                <div className="text-xs text-slate space-y-2">
                  <div className="flex justify-between border-b border-border-light pb-1">
                    <span className="font-semibold text-charcoal">Legal Entity:</span>
                    <span className="text-right font-medium">Sai Jagannath Engineering &amp; Construction</span>
                  </div>
                  <div className="flex justify-between border-b border-border-light pb-1">
                    <span className="font-semibold text-charcoal">Foundational Inception:</span>
                    <span className="font-mono">2005 (M/S Sri Jagannath)</span>
                  </div>
                  <div className="flex justify-between border-b border-border-light pb-1">
                    <span className="font-semibold text-charcoal">Domain:</span>
                    <span className="font-mono text-navy font-bold">sjec.in</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-charcoal">Core Positioning:</span>
                    <span className="text-right max-w-[200px] font-medium">Industrial Electrical &amp; Instrumentation</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
