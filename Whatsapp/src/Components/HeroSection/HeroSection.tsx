import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Section1 />
      <p className="text-xs my-2.5 text-right self-end mr-[40px] text-gray-500">* Data charges may apply. Contact your provider for details.</p>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6/>
    </div>
  );
}

export default HeroSection;
