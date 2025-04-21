import DownloadButton from "../Buttons/DownloadButton";
import LoginButton from "../Buttons/LoginButton";

function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="logo">Logo</div>

      <div className="contents">
        <div className="middle-contents">middle content</div>
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
