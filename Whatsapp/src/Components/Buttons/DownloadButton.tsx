function DownloadButton() {
  return (
    <div>
      <button className="bg-[#25d366] text-[#1d3128] flex flex-row items-center justify-center px-8 py-3 rounded-4xl gap-2 border">
        Download{" "}
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M550.4 682.816L778.688 448l53.312 54.848L512 832 192 502.848 245.312 448 473.6 682.816V64h76.8v618.816zM192 883.2h640V960H192v-76.8z"
            fill="#000000"
          />
        </svg>
      </button>
    </div>
  );
}

export default DownloadButton;
