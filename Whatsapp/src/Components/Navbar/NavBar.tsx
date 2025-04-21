
import DownloadButton from "../Buttons/DownloadButton";
import LoginButton from "../Buttons/LoginButton";

function NavBar() {
    const middleContent = [

    ]
  return (
    <div className="flex flex-row items-center justify-between p-2 w-full">
      <div className="logo">Logo</div>
      <div className="contents">
        <div className="middle-contents">
middle content
        </div>
      </div>
      <div className="links">
        <div className="flex flex-row">
          <DownloadButton />
          <LoginButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
