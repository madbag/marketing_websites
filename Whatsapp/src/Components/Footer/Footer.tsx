import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1C1E21] text-[#F0F4F9]">
      <div className="top-footer flex flex-row gap-2">
        <div className="">Whats app logo </div>
        <div className=""> What we do</div>
        <div className="">Who are we</div>
        <div className="">Use WhatsApp</div>
        <div className="">Need help?</div>
      </div>

      <div className="top-footer flex flex-row gap-2">
        <div className="">2025 © WhatsApp LLC</div>
        <div className=""> LLC Terms & Privacy Policy</div>
        <div className="">Sitemap</div>
        <div className="">Socials</div>
        <div className="">Translate</div>
      </div>
    </div>
  );
}

export default Footer;
