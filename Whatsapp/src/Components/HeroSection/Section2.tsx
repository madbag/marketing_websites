import Section2A from "../../assets/section-2.png";
import Section2B from "../../assets/section-2.b.png";

function Section2() {
  return (
    <div className="section-2 mt-15 flex flex-col items-center justify-center">
      <img src={Section2A} alt="small profile photos" />
      <h3 className="text-5xl tracking-tight w-[900px] text-center my-20">
        With private messaging and calling, you can be yourself, speak freely
        and feel close to the most important people in your life no matter where
        they are.
      </h3>
      <img src={Section2B} alt="small profile photos" />
    </div>
  );
}

export default Section2;
