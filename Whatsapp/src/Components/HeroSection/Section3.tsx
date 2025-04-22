import Section3A from "../../assets/section-3.png";

function Section3() {
  return (
    <div className="section-3 flex flex-row">
      <div>
        <h2>Never miss a moment with voice and video calls</h2>
        <p>
          From a group call to classmates to a quick call with mom, feel like
          you’re in the same room with voice and video calls.
        </p>

        <button>Learn More</button>
      </div>

      <img src={Section3A} alt="" />
    </div>
  );
}

export default Section3;
