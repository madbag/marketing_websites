import React from "react";

function LoginButton() {
  return (
    <div>
      <button className="bg-white text-[#1d3128] flex flex-row items-center justify-center px-8 py-3 rounded-4xl border gap-2">
        Log in{" "}
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
            fill="#000000"
          />
        </svg>{" "}
      </button>
    </div>
  );
}

export default LoginButton;
