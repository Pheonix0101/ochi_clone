import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-10">
        <h1 className='text-[4rem] font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="relative cardContainer w-1/2 h-[70vh]">
            <h1 className="absolute z-[9] left-full text-[#CDEA68] leading-none tracking-tight top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl ">
            {"FYDE".split('').map((char,index)=> <span key={index}>{char}</span>)}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt="pic"
              />
            </div>
          </div>
          <div className="cardContainer relative w-1/2 h-[70vh] ">

            <div className="card w-full h-full rounded-xl overflow-hidden bg-cover">
          <h1 className="absolute z-[9] right-full text-[#CDEA68] leading-none tracking-tight top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl ">
            {"VISE".split('').map((char,index)=> <span key={index}>{char}</span>)}
          </h1>
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="pic2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
