import DownloadButton from "../Buttons/DownloadButton";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1C1E21] text-[#F0F4F9] pt-[100px] pb-[50px]">
      {/* Top Footer */}
      <div className="flex flex-row gap-22">
        <div className="">
          <div className="">Whats app logo </div>
          <DownloadButton />
        </div>

        <div className="flex flex-col">
          {" "}
      
          <p className="text-xs pb-8">What we do</p>
          <ul className="no-underline">
            <li>Features</li>
            <li>Blog</li>
            <li>Security</li>
            <li>For Business</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xs pb-8">Who are we</p>

          <ul className="no-underline">
            <li>About us</li>
            <li>Careers</li>
            <li>Brand Center</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xs pb-8">Use WhatsApp</p>
          <ul className="no-underline">
            <li>Android</li>
            <li>Iphone</li>
            <li>Mac/PC</li>
            <li>WhatsApp Web</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xs pb-8">Need help?</p>

          <ul className="no-underline">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Apps</li>
            <li>Security Advisories</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="top-footer flex flex-row gap-2 mt-[30px]">
        <div className="">2025 © WhatsApp LLC</div>
        <div className="">Terms & Privacy Policy</div>
        <div className="">Sitemap</div>
        <div className="">Socials</div>
        <div className="">Translate</div>
      </div>
    </div>
  );
}

export default Footer;
