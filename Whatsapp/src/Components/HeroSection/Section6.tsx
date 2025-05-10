import Cards from "../Cards/Cards";

function Section6() {
  const cardData = [
    {
      title:
        "Introducing Advanced Chat Privacy: Enhanced Protection for Your Most Sensitive Conversations",
      paragraph:
        "We're introducing our latest layer for privacy called Advanced Chat Privacy. This new setting available in both chats and groups helps prevent others from taking content...",
    },
    {
      title:
        "New Feature Roundup: Updates to group chats, events, calls, channels and more",
      paragraph:
        "With new features and updates being added all the time, it can be easy to miss out on useful and exciting ways you can use WhatsApp. To keep you in the loop, we’ll be sharing...",
    },
    {
      title: "Turn Up the Volume: Add Music to Your WhatsApp Status!",
      paragraph:
        "WhatsApp Status has always been a way to share life’s moments with friends and family—but what’s a moment without the perfect soundtrack? Now, you can do exactly that by...",
    },
    {
      title: "Chat themes to reflect your style",
      paragraph:
        "You asked for it. Here it is! We’re introducing chat themes, so you can make your chats uniquely yours with colorful chat bubbles and new wallpapers.",
    },
    {
      title: "New year, new ways to chat on WhatsApp",
      paragraph:
        "We're always working on making WhatsApp easier to use and more fun, so we’re excited to kick off the new year with a variety of new features and design improvements.",
    },
  ];
  return (
    <div className="w-screen bg-[#e6ffda] flex flex-row py-30 px-10 justify-between gap-[200px] rounded-br-[80px] rounded-bl-[80px]">
      <div className="w-[440px]">
        {" "}
        <h2 className="text-6xl tracking-tight mb-6">Stay up to date</h2>
        <p>
          Get the latest from WhatsApp: news, useful tips, and our newest
          features to help you stay connected.
        </p>
      </div>

      <div className="flex flex-row gap-[24px]">
        {" "}
        {cardData.map((item, index) => (
          <Cards key={index} title={item.title} paragraph={item.paragraph} />
        ))}
      </div>
    </div>
  );
}

export default Section6;
