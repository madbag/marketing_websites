import BannerImage from "../../assets/banner-image-1.png";
import BannerImageInside from "../../assets/iPhone 13 & 14 - 1.png";
import DownloadButton from "../Buttons/DownloadButton";
import LoginButton from "../Buttons/LoginButton";

function Section1() {
  return (
    <div
      className="section-1 w-full bg-cover bg-center flex flex-row items-center justify-center my-6 "
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="flex flex-col">
        <h1>Message privately</h1>
        <p>
          Simple, reliable, private messaging and calling for free*, available
          all over the world.
        </p>

        <div className="flex flex-row gap-5">
          <DownloadButton />
          <LoginButton />
        </div>
      </div>

      <div>
        <img src={BannerImageInside} alt="Banner" className="" />
      </div>
    </div>
  );
}

export default Section1;
