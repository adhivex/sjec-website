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
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Page Hero */}
      <PageHero
        badge="Enquiry &amp; RFQ"
        title="Let's Discuss Your Project"
        description="Connect with Sai Jagannath Engineering &amp; Construction for industrial electrical, instrumentation and project execution requirements."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Main Form & Contact Information Grid */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Interactive RFQ Form */}
            <div className="lg:col-span-7 min-w-0">
              <div className="bg-navy-dark border border-border-navy p-6 sm:p-10 rounded-sm shadow-2xl">
                
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-3 text-xs font-mono font-bold uppercase tracking-[0.18em] rounded-sm bg-navy-surface text-gold border border-gold/30">
                    <FileCheck className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>PROJECT ENQUIRY // RFQ</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold uppercase text-white font-heading">
                    Request a Technical Proposal
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base mt-2 font-sans font-normal leading-relaxed">
                    Submit your project parameters and technical specifications below. Our engineering managers will review and respond promptly.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="p-8 sm:p-10 rounded-sm bg-navy-surface border-2 border-gold/60 text-center animate-in fade-in zoom-in duration-300 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-gold text-navy-dark flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-heading">
                      Enquiry Received
                    </h3>
                    <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed font-sans font-normal">
                      Thank you for contacting Sai Jagannath Engineering &amp; Construction. Your project parameters have been recorded and assigned for technical review.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="btn-gold text-xs px-6 py-2.5 uppercase font-bold tracking-wider mt-4"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-gold mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Mohanty"
                          className={`w-full px-4 py-3 text-sm rounded-sm border font-sans text-white ${
                            errors.name ? 'border-red-500 bg-red-950/30' : 'border-navy-light/40 bg-navy-surface/80'
                          } focus:border-gold focus:outline-none transition-colors placeholder-gray-400`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-400 font-sans">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-xs font-mono font-bold uppercase tracking-wider text-gold mb-1.5">
                          Company / Client <span className="text-gray-400 text-[10px] lowercase font-sans">(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Industrial Plant Corp"
                          className="w-full px-4 py-3 text-sm rounded-sm border border-navy-light/40 bg-navy-surface/80 text-white focus:border-gold focus:outline-none transition-colors font-sans placeholder-gray-400"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-gold mb-1.5">
                          Corporate Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3 text-sm rounded-sm border font-sans text-white ${
                            errors.email ? 'border-red-500 bg-red-950/30' : 'border-navy-light/40 bg-navy-surface/80'
                          } focus:border-gold focus:outline-none transition-colors placeholder-gray-400`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-400 font-sans">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-mono font-bold uppercase tracking-wider text-gold mb-1.5">
                          Contact Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 94370 00000"
                          className={`w-full px-4 py-3 text-sm rounded-sm border font-sans text-white ${
                            errors.phone ? 'border-red-500 bg-red-950/30' : 'border-navy-light/40 bg-navy-surface/80'
                          } focus:border-gold focus:outline-none transition-colors placeholder-gray-400`}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-400 font-sans">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-mono font-bold uppercase tracking-wider text-gold mb-1.5">
                        Primary Discipline Required <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-sm rounded-sm border font-sans text-white ${
                          errors.service ? 'border-red-500 bg-red-950/30' : 'border-navy-light/40 bg-navy-surface/80'
                        } focus:border-gold focus:outline-none transition-colors`}
                      >
                        <option value="" className="bg-navy-dark text-gray-300">-- Select Required Discipline --</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-navy-dark text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Complete Turnkey Electrical & Instrumentation Scope" className="bg-navy-dark text-white">
                          Complete Turnkey Electrical &amp; Instrumentation Scope
                        </option>
                      </select>
                      {errors.service && <p className="mt-1 text-xs text-red-400 font-sans">{errors.service}</p>}
                    </div>

                    {/* Message / Scope */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-gold mb-1.5">
                        Project Details &amp; Scope Parameters <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please include plant sector, capacity, location, schedule, or equipment parameters (e.g. HT/LT panels, transformer erection, cable laying, Robo Lab)."
                        className={`w-full px-4 py-3 text-sm rounded-sm border font-sans text-white ${
                          errors.message ? 'border-red-500 bg-red-950/30' : 'border-navy-light/40 bg-navy-surface/80'
                        } focus:border-gold focus:outline-none transition-colors placeholder-gray-400`}
                      ></textarea>
                      {errors.message && <p className="mt-1 text-xs text-red-400 font-sans">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-gold py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group disabled:opacity-70 shadow-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-navy-dark border-t-transparent rounded-full animate-spin"></span>
                            <span>Processing Technical Request...</span>
                          </>
                        ) : (
                          <>
                            <span>SEND TECHNICAL ENQUIRY</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-[10px] font-mono text-gray-400 text-center pt-2">
                      <ShieldCheck className="w-3.5 h-3.5 inline text-gold mr-1" />
                      COMMERCIAL IN CONFIDENCE // FACTUAL RECORD ONLY
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* Right Column: Verified Public Contact Details */}
            <div className="lg:col-span-5 space-y-6 min-w-0">
              
              {/* Corporate Contact Card */}
              <div className="bg-navy-dark text-white p-6 sm:p-8 rounded-sm border border-border-navy shadow-2xl space-y-6">
                <div className="border-b border-navy-light/30 pb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold">PUBLIC VERIFIED OFFICE</span>
                  <h3 className="text-xl sm:text-2xl font-semibold uppercase text-white font-heading mt-1">
                    Corporate Contact
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-gray-200 font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-mono font-bold text-gold uppercase">Registered Office</div>
                      <p className="mt-0.5 leading-relaxed text-gray-300">{COMPANY_INFO.contact.address.displayFull}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-mono font-bold text-gold uppercase">Official Email</div>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-gold transition-colors block mt-0.5">
                        {COMPANY_INFO.contact.email}
                      </a>
                      <a href={`mailto:${COMPANY_INFO.contact.enquiryEmail}`} className="text-xs text-gray-400 hover:text-gold transition-colors block">
                        {COMPANY_INFO.contact.enquiryEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-mono font-bold text-gold uppercase">Telephone (Office)</div>
                      <p className="mt-0.5 font-mono">{COMPANY_INFO.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-mono font-bold text-gold uppercase">Business Hours</div>
                      <p className="mt-0.5 text-xs text-gray-300">{COMPANY_INFO.contact.workingHours}</p>
                      <p className="text-[10px] text-gold mt-1 font-mono">{COMPANY_INFO.contact.emergencySupport}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-navy-surface/80 rounded-sm border border-navy-light/30 text-xs text-gray-300 font-sans">
                  <div className="font-bold text-gold uppercase mb-1 font-mono text-[10px]">Execution Footprint</div>
                  Active site deployment capabilities across Odisha, Jharkhand, West Bengal, and industrial corridors across India.
                </div>
              </div>

              {/* Verified Public Corporate Card */}
              <div className="bg-navy-surface/50 p-6 rounded-sm border border-border-navy space-y-3 font-sans">
                <h4 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold flex items-center gap-2 font-heading">
                  <Building2 className="w-4 h-4 text-gold" />
                  Corporate Structure
                </h4>
                <div className="text-xs text-gray-300 space-y-2">
                  <div className="flex justify-between border-b border-navy-light/20 pb-1.5">
                    <span className="font-semibold text-gray-200">Legal Entity:</span>
                    <span className="text-right font-medium text-white">Sai Jagannath Engineering &amp; Construction</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-light/20 pb-1.5">
                    <span className="font-semibold text-gray-200">Foundational Inception:</span>
                    <span className="font-mono text-gold font-bold">2005 (M/S Sri Jagannath)</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-light/20 pb-1.5">
                    <span className="font-semibold text-gray-200">Domain:</span>
                    <span className="font-mono text-gold font-bold">sjec.in</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-200">Core Positioning:</span>
                    <span className="text-right max-w-[200px] font-medium text-white">Industrial Electrical &amp; Instrumentation</span>
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
