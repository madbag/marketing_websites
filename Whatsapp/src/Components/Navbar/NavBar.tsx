import DownloadButton from "../Buttons/DownloadButton";
import LoginButton from "../Buttons/LoginButton";
import WhatsApp from "../../assets/whatsapp-green.svg";

function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between my-4 px-10 pt-2 pb-5 bg-[rgba(252,245,235,.8)] ">
      <div className="logo w-[130px] h-[30px] ">
        <img src={WhatsApp} alt="Whatsapp Logo" />
      </div>

      <div className="contents">
        <div className="middle-contents flex flex-row gap-9">
          <p>Features</p>
          <p>Privacy</p>
          <p>Help Center</p>
          <p>Blog</p>
          <p>For Business</p>
          <p>Apps</p>
        </div>
      </div>

      <div className="links">
        <div className="flex flex-row gap-2">
          <LoginButton />
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
