import SectionImage1 from "../../assets/Frame 19 (1).png";
import SectionImage2 from "../../assets/Frame 20 (1).png";
import SectionImage3 from "../../assets/section-7.png";
function Section5() {
  return (
    <div>
      <div className="flex flex-row">
        {" "}
        <div>
          <h2>Keep in touch with your groups</h2>
          <p>
            Whether it's planning an outing with friends or simply staying on
            top of your family chats, group conversations should feel
            effortless.
          </p>{" "}
          <button>Learn more</button>
        </div>
        <img src={SectionImage1} alt="" />
      </div>

      <div className="flex flex-row">
        <img src={SectionImage2} alt="" />{" "}
        <div>
          <h2>Say what you feel</h2>
          <p>
            Express yourself without words. Use stickers and GIFs or share
            everyday moments on Status. Record a voice message for a quick hello
            or a longer story.
          </p>{" "}
          <button>Learn more</button>
        </div>
      </div>

      <div className="flex flex-row">
        {" "}
        <div>
          <h2>Transform your business</h2>
          <p>
            WhatsApp Business helps you reach your customers globally to deliver
            compelling experiences at scale. Showcase your products and
            services, increase sales, and build relationships all with WhatsApp.
          </p>{" "}
          <button>Learn more</button>
        </div>{" "}
        <img src={SectionImage3} alt="" />
      </div>
    </div>
  );
}

export default Section5;
