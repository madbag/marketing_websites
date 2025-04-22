import Image from "../../assets/section-4.png";

function Section4() {
  return (
    <div className="bg-[#111b21] w-full flex items-center justify-center">
      <div className="flex flex-row gap-3">
        <img src={Image} alt="" />

        <div className="flex flex-col ">
          <h2 className="text-[#fefefe]">Speak freely</h2>

          <p className="text-[#fefefe]">
            With end-to-end encryption, your personal messages and calls are
            secured. Only you and the person you're talking to can read or
            listen to them, and nobody in between, not even WhatsApp.
          </p>

          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Section4;
