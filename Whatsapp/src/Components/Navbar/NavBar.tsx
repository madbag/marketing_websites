import DownloadButton from "../Buttons/DownloadButton";
import LoginButton from "../Buttons/LoginButton";
import WhatsApp from "../../assets/whatsapp-green.svg"

function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="logo"><img src={WhatsApp} alt="Whatsapp Logo" /></div>

      <div className="contents">
        <div className="middle-contents flex flex-row gap-3">
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
          <DownloadButton />
          <LoginButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
