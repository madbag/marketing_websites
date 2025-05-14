import DownloadButton from "../Buttons/DownloadButton";
import WhatsAppWhite from "../../assets/whatsapp-white.svg";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1C1E21] text-[#F0F4F9]">
      {/* Top Footer */}
      <div className="flex flex-row gap-22 py-[90px]">
        <div className="flex flex-col">
          <div className="">
            <img
              src={WhatsAppWhite}
              alt="whatsapp log in white"
              className="w-[160px]"
            />{" "}
          </div>
          <div className="mt-auto">
            <DownloadButton />
          </div>
        </div>

        <div className="flex flex-col">
          {" "}
          <p className="text-xs pb-8">What we do</p>
          <ul className="no-underline space-y-3 text-lg">
            <li>Features</li>
            <li>Blog</li>
            <li>Security</li>
            <li>For Business</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xs pb-8">Who are we</p>

          <ul className="no-underline space-y-3 text-lg">
            <li>About us</li>
            <li>Careers</li>
            <li>Brand Center</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xs pb-8">Use WhatsApp</p>
          <ul className="no-underline space-y-3 text-lg">
            <li>Android</li>
            <li>Iphone</li>
            <li>Mac/PC</li>
            <li>WhatsApp Web</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xs pb-8">Need help?</p>

          <ul className="no-underline space-y-3 text-lg">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Apps</li>
            <li>Security Advisories</li>
          </ul>
        </div>
      </div>
      <div className="h-px bg-gray-800 w-[1000px]"></div>
      {/* Bottom Footer */}
      <div className="top-footer flex flex-row gap-2 my-[32px]">
        <div className="w-[150px]">2025 © WhatsApp LLC</div>
        <div className="">Terms & Privacy Policy</div>
        <div className="">Sitemap</div>
        <div className="">Socials</div>
      </div>
    </div>
  );
}

export default Footer;
