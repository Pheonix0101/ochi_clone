
function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#0b0b0b]">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] border-[#b2d366] mt-20 pt-10 flex gap-5" >
        <div className="w-1/2 ">
          <h1 className="text-6xl font-light">Our approach:</h1>
          <button className="px-7 py-4 bg-zinc-900 mt-7 text-white rounded-full flex items-center gap-9">Read More
          <div className="w-2 h-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#9dac64] rounded-3xl">

        </div>
      </div>

    </div>
  );
}

export default About;
