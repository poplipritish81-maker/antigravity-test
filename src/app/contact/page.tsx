"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Calendar as CalendarIcon, Clock, Mail, MapPin, Phone } from "lucide-react";

interface TimeSlot {
  time: string;
  available: boolean;
}

const DATES = [
  { name: "Mon, Jun 8", value: "2026-06-08" },
  { name: "Tue, Jun 9", value: "2026-06-09" },
  { name: "Wed, Jun 10", value: "2026-06-10" }
];

const SLOTS: TimeSlot[] = [
  { time: "10:00 AM EST", available: true },
  { time: "11:30 AM EST", available: true },
  { time: "2:00 PM EST", available: false },
  { time: "3:30 PM EST", available: true }
];

export default function ContactPage() {
  // Contact Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    size: "1-10",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

  // Booking State
  const [selectedDate, setSelectedDate] = useState(DATES[0].value);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        size: "1-10",
        message: ""
      });
    }, 1500);
  };

  const handleBookDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) return;
    setBookingStatus("loading");
    setTimeout(() => {
      setBookingStatus("success");
    }, 1500);
  };

  return (
    <div className="relative overflow-hidden w-full py-16">
      
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Contact Us</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Connect With Our Systems Architects
          </h1>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            Schedule a customized architecture advisory call or query our support desks. Let&apos;s design a high-throughput, fail-safe automation environment.
          </p>
        </div>

        {/* Dual Layout: Form & Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Left Column: Contact Form */}
          <div className="bg-zinc-900/30 border border-zinc-850 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300">
            <div>
              <h2 className="text-base font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                Have standard questions or integration queries? Fill out our form and our team will get back to you within 2 business hours.
              </p>

              {formStatus === "success" ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mb-4 animate-bounce" />
                  <h3 className="text-sm font-bold text-white">Message Received Successfully!</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Thank you for reaching out. One of our solutions architects will contact you shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 text-xs text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="first-name" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">First Name</label>
                      <input
                        type="text"
                        id="first-name"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-zinc-950 border border-zinc-850 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-600"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="last-name" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Last Name</label>
                      <input
                        type="text"
                        id="last-name"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-zinc-950 border border-zinc-850 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-zinc-950 border border-zinc-850 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-zinc-950 border border-zinc-850 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-600"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company-size" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Company Size</label>
                      <select
                        id="company-size"
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="bg-zinc-950 border border-zinc-850 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-600 cursor-pointer"
                      >
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="200+">200+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Message / Requirements</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your pipeline integration goals..."
                      className="bg-zinc-950 border border-zinc-850 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg py-2.5 text-xs font-semibold shadow-md active:translate-y-px transition-all disabled:opacity-50 flex items-center justify-center"
                  >
                    {formStatus === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Corporate Location Details */}
            <div className="border-t border-zinc-850/60 mt-8 pt-6 flex flex-wrap gap-4 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-indigo-500" /> Woodbridge, ON</span>
              <span className="flex items-center gap-1.5"><Mail className="h-4 w-4 text-indigo-500" /> support@omega.com</span>
              <span className="flex items-center gap-1.5"><Phone className="h-4 w-4 text-indigo-500" /> +1 (800) 555-OMEG</span>
            </div>
          </div>

          {/* Right Column: Demo Scheduler */}
          <div
            id="book-demo"
            className="bg-gradient-to-br from-zinc-900/60 to-zinc-950 border border-indigo-500/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <h2 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-indigo-400" />
                Book an Advisory Session
              </h2>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                Choose a suitable date and time to map automation flows and review sentiment tools live with a senior solutions engineer.
              </p>

              {bookingStatus === "success" ? (
                <div className="bg-indigo-500/15 border border-indigo-500/20 rounded-2xl p-6 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <CheckCircle2 className="h-10 w-10 text-indigo-400 mb-4 animate-bounce" />
                  <h3 className="text-sm font-bold text-white">Advisory Session Booked!</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-sm mx-auto">
                    A confirmation calendar invite containing call link credentials has been dispatched to your email.
                  </p>
                  <button
                    onClick={() => {
                      setBookingStatus("idle");
                      setSelectedTime(null);
                    }}
                    className="mt-6 text-xs text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                  >
                    Reschedule or Book Another Session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookDemo} className="space-y-6">
                  {/* Select Date */}
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-450 block mb-2.5">
                      Select date (June 2026)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {DATES.map((date) => (
                        <button
                          key={date.value}
                          type="button"
                          onClick={() => setSelectedDate(date.value)}
                          className={`px-3 py-2 rounded-lg text-xs font-semibold border text-center cursor-pointer transition-all ${
                            selectedDate === date.value
                              ? "bg-indigo-600 border-indigo-500 text-white"
                              : "bg-zinc-950 border-zinc-850 text-zinc-450 hover:text-white"
                          }`}
                        >
                          {date.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Timeslot */}
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-450 block mb-2.5">
                      Available timeslots
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {SLOTS.map((slot) => (
                        <button
                          key={slot.time}
                          type="button"
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-semibold border text-center transition-all ${
                            !slot.available
                              ? "bg-zinc-950 border-zinc-900/60 text-zinc-700 pointer-events-none"
                              : selectedTime === slot.time
                              ? "bg-indigo-600 border-indigo-500 text-white"
                              : "bg-zinc-950 border-zinc-850 text-zinc-450 hover:text-white cursor-pointer"
                          }`}
                        >
                          <span className="flex items-center justify-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            {slot.time}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!selectedTime || bookingStatus === "loading"}
                    className="w-full bg-white text-zinc-950 hover:bg-zinc-200 disabled:opacity-40 rounded-lg py-2.5 text-xs font-bold shadow-md active:translate-y-px transition-all flex items-center justify-center"
                  >
                    {bookingStatus === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin text-zinc-950" />
                    ) : (
                      "Confirm Advisory Session"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Guarantee badge */}
            <div className="border-t border-zinc-900 mt-8 pt-6 text-[10px] text-zinc-500 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              1-on-1 Session with a Senior Solutions Engineer
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
