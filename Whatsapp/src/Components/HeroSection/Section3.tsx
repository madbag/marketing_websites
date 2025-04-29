import Section3A from "../../assets/section-3.png";
import LearnMore from "../Buttons/LearnMore";

function Section3() {
  return (
    <div className="section-3 flex flex-row my-20 gap-[250px] ">
      <div className="w-[400px] mt-[160px]">
        <h2 className="text-6xl tracking-tighter mb-[20px]">Never miss a moment with voice and video calls</h2>
        <p className="tracking-tighter text-xl mb-[30px]">
          From a group call to classmates to a quick call with mom, feel like
          you’re in the same room with voice and video calls.
        </p>

        <button><LearnMore/></button>
      </div>

      <img src={Section3A} alt="screenshot of end to end encrypted video call of person connecting with their family through video" className="mr-[40px]" />
    </div>
  );
}

export default Section3;
