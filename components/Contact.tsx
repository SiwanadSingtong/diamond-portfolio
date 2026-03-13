"use client";

import { Mail, Copy, Check } from "lucide-react";
import React, { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "siwanad.diamond@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-accent rounded-lg py-24 px-6 flex flex-col gap-8 items-center justify-center">
      <h3 className="text-4xl lg:text-6xl text-white font-extrabold tracking-tight">
        Ready to build something amazing?
      </h3>
      <p className="text-lg text-white/90 tracking-wide font-semibold">
        Get in touch with me for collaborations or inquiries
      </p>

      <div className="flex flex-col gap-4 items-center">
        <a
          href={`mailto:${email}`}
          className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 flex gap-3 items-center transition-all duration-300 hover:scale-105"
        >
          <Mail
            strokeWidth={2}
            className="text-blue-900 group-hover:text-blue-950"
            size={24}
          />
          <span className="text-blue-900 font-semibold text-sm sm:text-md md:text-lg">{email}</span>
        </a>

        <button
          onClick={handleCopyEmail}
          className="flex gap-2 items-center px-4 py-2 cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white/80 hover:text-white transition-all duration-300 text-sm font-medium"
        >
          {copied ? (
            <>
              <Check size={16} className="text-green-400" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Contact;
