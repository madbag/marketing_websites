import BannerImage from "../../assets/banner-image-1.png";
import BannerImageInside from "../../assets/iPhone 13 & 14 - 1.png";
import DownloadButton from "../Buttons/DownloadButton";
import LoginButton from "../Buttons/LoginButton";

function Section1() {
  return (
    <div className="w-full">
      <div
        className="bg-cover bg-top flex flex-row items-center justify-center rounded-4xl ml-[40px] mr-[40px] gap-[380px]"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="flex flex-col">
          <h1 className="text-white text-[80px] tracking-tight leading-none w-5 mb-5">
            Message privately
          </h1>
          <p className="text-white w-[330px] tracking-tight text-xl mb-[66px]">
            Simple, reliable, private messaging and calling for free*, available
            all over the world.
          </p>

          <div className="flex flex-row gap-5">
            <DownloadButton />
            <LoginButton />
          </div>
        </div>

        <div>
          <img src={BannerImageInside} alt="Banner" className="w-[370px]" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
