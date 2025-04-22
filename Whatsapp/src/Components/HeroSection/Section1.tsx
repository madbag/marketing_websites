import BannerImage from "../../assets/banner-image-1.png";
import DownloadButton from "../Buttons/DownloadButton";
import LoginButton from "../Buttons/LoginButton";

function Section1() {
  return (
    <div className="section-1 w-full">
        {" "}
        <div>
          <img src={BannerImage} alt="Banner" className="rounded-4xl w-full" />
        </div>
        <div>
          <h1>Message privately</h1>
          <p>
            Simple, reliable, private messaging and calling for free*, available
            all over the world.
          </p>

          <div className="">
            <DownloadButton />
            <LoginButton />
          </div>
        </div>
      </div>
  )
}

export default Section1