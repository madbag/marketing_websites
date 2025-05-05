import DownloadButton from "../Buttons/DownloadButton";
import LoginButton from "../Buttons/LoginButton";
import WhatsApp from "../../assets/whatsapp-green.svg";
import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row items-center justify-between my-4 px-10 pt-2 pb-5 bg-[rgba(252,245,235,.8)] ">
      <div className="logo w-[130px] h-[30px] ">
        <img src={WhatsApp} alt="Whatsapp Logo" />
      </div>

      <div className="contents">
        <div className="middle-contents flex flex-row gap-9">
          <div
            className="relative"
            onClick={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <p className="cursor-pointer">Features</p>

            {isOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white rounded">
                <ul className="flex flex-col">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Feature 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Feature 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Feature 3
                  </li>
                </ul>
              </div>
            )}
          </div>
          <p className="cursor-pointer">Privacy</p>
          <p className="cursor-pointer">Help Center</p>
          <p className="cursor-pointer">Blog</p>
          <p className="cursor-pointer">For Business</p>
          <p className="cursor-pointer">Apps</p>
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
