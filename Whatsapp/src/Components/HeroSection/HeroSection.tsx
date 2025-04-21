import BannerImage from "../../assets/banner-image-1.png";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="section-1"> <img src={BannerImage} alt="Banner" className="rounded-4xl"/></div>
      <div className="section-2">Message</div>
      <div className="section-3">Voice/Video Calls</div>
      <div className="section-4">Speak Freely</div>
      <div className="section-5">Features</div>
      <div className="section-6 w-full bg-[#e6ffda] flex flex-row items-center justify-center">
        Cards
      </div>
    </div>
  );
}

export default HeroSection;
