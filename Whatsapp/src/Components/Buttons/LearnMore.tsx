type LearnMoreProps = {
  className?: string;
  customIcon?: React.ReactNode;
};

function LearnMore({ className, customIcon }: LearnMoreProps) {
  return (
    <div
      className={`underline decoration-green-500 decoration-1.5 underline-offset-6 ${className} mt-[40px]`}
    >
      <p className="hover:text-green-500 flex flex-row gap-2 text-[16px] cursor-pointer">
        Learn More
        {customIcon ? (
          customIcon
        ) : (
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[5px] fill-current hover:text-green-500"
          >
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
          </svg>
        )}{" "}
      </p>
    </div>
  );
}

export default LearnMore;
