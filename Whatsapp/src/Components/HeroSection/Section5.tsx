import SectionImage1 from "../../assets/Frame 19 (1).png";
import SectionImage2 from "../../assets/Frame 20 (1).png";
import SectionImage3 from "../../assets/section-7.png";
import LearnMore from "../Buttons/LearnMore";

function Section5() {
  return (
    <div className="flex flex-col justify-center items-center my-20 gap-40">
      <div className="flex flex-row items-center justify-center gap-[150px]">
        {" "}
        <div className="w-[450px]">
          <h2 className="text-6xl tracking-tight ">
            Keep in touch with your groups
          </h2>
          <p className="my-[18px] text-[18px]">
            Whether it's planning an outing with friends or simply staying on
            top of your family chats, group conversations should feel
            effortless.
          </p>{" "}
          <button>
            <LearnMore className="text-black" />
          </button>
        </div>
        <img
          src={SectionImage1}
          alt="best friend chat group with stickers and photo"
        />
      </div>

      <div className="flex flex-row items-center justify-center gap-[150px]">
        <img
          src={SectionImage2}
          alt="status with a smiling person and sticker on top"
        />{" "}
        <div className="w-[450px]">
          <h2 className="text-6xl tracking-tight w-[300px]">
            Say what you feel
          </h2>
          <p className="my-[18px] text-[18px]">
            Express yourself without words. Use stickers and GIFs or share
            everyday moments on Status. Record a voice message for a quick hello
            or a longer story.
          </p>{" "}
          <button>
            <LearnMore className="text-black" />
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-[200px]">
        {" "}
        <div className="w-[450px]">
          <h2 className="text-6xl tracking-tight">Transform your business</h2>
          <p className="my-[18px] text-[18px]">
            WhatsApp Business helps you reach your customers globally to deliver
            compelling experiences at scale. Showcase your products and
            services, increase sales, and build relationships all with WhatsApp.
          </p>{" "}
          <button>
            <LearnMore
              className="text-black"
              customIcon={
                <svg width="25px" height="20px" viewBox="0 0 100 100"  className="fill-current hover:text-green-500 mt-[4px]">
                  <g>
                    <path d="M30.5,71.5c0.5,0,1-0.2,1.4-0.6l35.6-35.6l0,28.3c0,1.1,0.9,2,2,2c0,0,0,0,0,0c1.1,0,2-0.9,2-2l0-33.2c0,0,0,0,0,0   c0-0.1,0-0.3,0-0.4c0,0,0-0.1,0-0.1c0-0.1,0-0.2-0.1-0.3c0,0,0-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.1-0.2-0.2-0.3-0.3   c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.2-0.1-0.3-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.4,0   c0,0,0,0,0,0l-33.2,0c0,0,0,0,0,0c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2l28.4,0L29.1,68.1c-0.8,0.8-0.8,2,0,2.8   C29.5,71.3,30,71.5,30.5,71.5z" />
                  </g>
                </svg>
              }
            />
          </button>
        </div>{" "}
        <img src={SectionImage3} alt="business catalog on business channel" />
      </div>
    </div>
  );
}

export default Section5;
