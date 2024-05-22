import { motion } from "framer-motion"

function Marquee() {
  return (
    <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-5 whitespace-nowrap overflow-hidden ">
        <h1 className='text-[23vw] font-semibold leading-none font-["Founders_Grotesk_X-condensed"] -mb-[7vw] pt-4 uppercase'>
          We are ochi
        </h1>
        <h1 className='text-[23vw] font-semibold leading-none font-["Founders_Grotesk_X-condensed"] -mb-[7vw] pt-4 uppercase'>
          We are ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
