import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-[11vw] px-16">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] bg-red-600 relative -top-[1.2vw]"></div>
                )}
                <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[9vw] font-bold font-["Founders_Grotesk_X-Condensed"] leading-[.75] '>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center justify-center gap-5">
          <div className="uppercase px-4 py-1 rounded-full border-zinc-400 border-[2px] cursor-pointer font-light text-sm">
            Start the Project
          </div>
          <div className="w-8 h-8 rounded-full border-zinc-400 border-[2px] flex items-center justify-center cursor-pointer">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
