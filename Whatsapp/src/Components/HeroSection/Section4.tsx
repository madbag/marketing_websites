import Image from "../../assets/section-4.png";
import LearnMore from "../Buttons/LearnMore";

function Section4() {
  return (
    <div className="bg-[#111b21] w-full flex items-center justify-center py-20  ">
      <div className="flex flex-row gap-[100px]">
        <div>
          <img src={Image} alt="encrypted message" />
        </div>

        <div className="flex flex-col w-[400px] items-left justify-center">
          <h2 className="text-[#fefefe] text-6xl tracking-tighter mb-[20px] w-[200px]">
            Speak 
            <span className="text-green-500"> freely</span>
          </h2>

          <p className="text-[#fefefe]">
            With end-to-end encryption, your personal messages and calls are
            secured. Only you and the person you're talking to can read or
            listen to them, and nobody in between, not even WhatsApp.
          </p>

          <button>
            <LearnMore className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section4;
