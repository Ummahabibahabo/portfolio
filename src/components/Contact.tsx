"use client";

import React, { useState } from "react";

interface SocialChannel {
  name: string;
  handle: string;
  href: string;
  actionText: string;
  badge: string;
  badgeColor: string;
  icon: React.JSX.Element;
  bgGlow: string;
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "habiba.enh@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate send
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  const channels: SocialChannel[] = [
    {
      name: "Email",
      handle: emailAddress,
      href: `mailto:${emailAddress}?subject=Portfolio%20Inquiry%20-%20Umma%20Habiba`,
      actionText: "Send an Email",
      badge: "Direct Mail",
      badgeColor: "bg-rose-950/60 text-rose-400 border-rose-800/60",
      bgGlow: "rgba(244, 63, 94, 0.15)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      handle: "+880 1846-861434",
      href: "https://wa.me/8801846861434?text=Hello%20Umma%20Habiba,%20I%20saw%20your%20portfolio!",
      actionText: "Chat on WhatsApp",
      badge: "Fastest Response",
      badgeColor: "bg-emerald-950/60 text-emerald-400 border-emerald-800/60",
      bgGlow: "rgba(37, 211, 102, 0.15)",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="#25D366">
          <path d="M16 2.5C8.5 2.5 2.5 8.5 2.5 16c0 2.6.7 5.1 2.1 7.2L2.5 30l7-2c2 1.2 4.3 1.9 6.5 1.9 7.5 0 13.5-6 13.5-13.5S23.5 2.5 16 2.5zm0 24.7c-2 0-3.9-.6-5.6-1.7l-.4-.3-4.2 1.2 1.2-4.1-.3-.4c-1.2-1.8-1.8-3.9-1.8-6 0-6.1 4.9-11 11-11s11 4.9 11 11-4.9 11.3-10.9 11.3zm6-8.3c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.2-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.5z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      handle: "linkedin.com/in/ummahabibahabo",
      href: "https://www.linkedin.com/in/ummahabibahabo/",
      actionText: "Connect on LinkedIn",
      badge: "Professional Network",
      badgeColor: "bg-blue-950/60 text-blue-400 border-blue-800/60",
      bgGlow: "rgba(10, 102, 194, 0.15)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0A66C2">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53 1.53 1.53 0 0 0-1.53-1.53 1.53 1.53 0 0 0-1.53 1.53 1.53 1.53 0 0 0 1.53 1.53m1.4 9.74v-8.37H5.06v8.37h2.8z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      handle: "facebook.com/umma.habiba.615977",
      href: "https://www.facebook.com/umma.habiba.615977",
      actionText: "Visit Facebook Profile",
      badge: "Social Media",
      badgeColor: "bg-sky-950/60 text-sky-400 border-sky-800/60",
      bgGlow: "rgba(24, 119, 242, 0.15)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60 bg-[#09090b] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-2.5">
          <p className="text-sky-400 font-mono text-xs uppercase tracking-widest font-medium">
            Let&apos;s Connect
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-100 tracking-tight">
            Contact Me
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full" />
          <p className="max-w-xl mx-auto text-zinc-400 text-sm leading-relaxed pt-1">
            Have a project in mind, a hiring opportunity, or just want to say hi?
            Feel free to reach out directly via Email, WhatsApp, LinkedIn, or Facebook.
          </p>
        </div>

        {/* 4 Communication Channels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {channels.map((chan, idx) => (
            <div
              key={idx}
              className="group relative bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700/80 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {chan.icon}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${chan.badgeColor}`}>
                    {chan.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-100 mb-1">{chan.name}</h3>
                <p className="text-xs text-zinc-400 font-mono mb-5 truncate" title={chan.handle}>
                  {chan.handle}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                <a
                  href={chan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-zinc-800/60 hover:bg-zinc-700/60 border border-zinc-700/50 text-xs font-medium text-zinc-200 hover:text-white transition-all"
                >
                  <span>{chan.actionText}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                {chan.name === "Email" && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full text-center text-[11px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {copiedEmail ? "✓ Copied to Clipboard!" : "Click to Copy Email"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Direct Message Form */}
        <div className="max-w-2xl mx-auto bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-6 space-y-1.5">
            <h3 className="text-xl font-bold text-zinc-100">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Fill out the form below and I will get back to you as soon as possible.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl">
                ✓
              </div>
              <h4 className="text-xl font-bold text-white">Message Received!</h4>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">
                Thank you for reaching out, Umma Habiba has received your message and will respond shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full bg-zinc-800 text-sm text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Job Opportunity / MERN Stack Project"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Umma Habiba, I would like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-zinc-500">
                  Protected with spam prevention. Your details remain confidential.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
