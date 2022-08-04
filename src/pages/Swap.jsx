
import NavBar from "../components/NavBar"
import Sllp from "../components/Sllp"
import Footer from "../components/Footer"
import { FaCaretDown, FaExchangeAlt } from 'react-icons/fa';
import Frame from "../assets/images/Frame.svg";

import Frame2 from "../assets/images/Frame2.svg";
import vector from "../assets/images/vector.svg";


const Swap = () => {
  return (
    <>
    <div><NavBar/></div>
    <div><Sllp/></div>



    <section className="mx-20 mb-10 bg-[#FFEBD4] rounded-xl font-kanit p-8 flex justify-evenly">
    <div className="">
      <div><h1 className="text-[#47C6CC] text-[32px] font-bold">SWAP</h1></div>
      <div><p className="text-[17px] text-[#3C3C3C]">TRADE TOKENS IN AN INSTANT</p></div>
    </div>

    <div className="">
      <div className="inline-flex gap-1 align-center justify-center">
        <h1>BNB</h1>
        <div><FaCaretDown/></div>
      </div>
      <div>
        <input placeholder="0.0" className="w-[170px] focus:ring-gray-100 h-8 rounded-lg  border-white" type="text" />
      </div>

      
    </div>
    <div className="">
      <div className="inline-flex gap-1 align-center justify-center">
        <h1 className="font-medium">OVENSWAP</h1>
        <div><FaCaretDown/></div>
      </div>
      <div>
        <input placeholder="0.0" className="w-[170px] h-8 rounded-lg  border-white" type="text" />
      </div>

      
      
    </div>


    <div className="">
      <div><p className="text-[14px] text-[#47C6CC]">0.5%</p></div>
      <div><p>SLIPPAGE TOLERANCE</p></div>
    </div>

    <button className="text-sm w-[152px] h-[35px] text-[#814A0A] bg-[#F9AA4B] rounded-full px-3 py-1 font-semibold">Connect Wallet</button>
    </section>


    <section className="mx-20 h-auto mb-10  bg-[#FFEBD4] rounded-xl font-kanit pt-8  ">
      
      <div className="flex items-center gap-4 pl-9 pb-5" >
        <img className="" src={Frame} alt="" />
        <img src={Frame2} alt="" />
        <h1 className="font-medium">BNB/CAKE</h1>
        <div className="text-[#814A0A] text-1xl"> <FaExchangeAlt /></div>
        
        <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-bold border-amber-300 rounded-full w-[100px] p-2 ">Basic</button>
      </div>

      <div>
        <div className="inline-flex items-center gap-3 pl-8">
          <h1 className="text-[32px] text-[#47C6CC] font-bold">71.20</h1>
          <h1 className="font-medium text-[22px]"><span className="text-[#F9AA4B]">BNB/CAKE</span> <span className="text-[#47C6CC] " >-0.133(-0.19%)</span></h1>
        </div>

        <p className="text-[#F9AA4B] pl-8">JUN 25 2022, 08:45PM</p>

<img className="w-full" src={vector} alt="" />
<ul className="flex items-center justify-between text-[16px] text-[#3C3C3C] font-medium p-8">
  <li>5:30AM</li>
  <li>8:30AM</li>
  <li>11:30AM</li>
  <li>2:30AM</li>
  <li>5:30AM</li>
  <li>8:30AM</li>
  <li>12:30AM</li>
</ul>


      </div>
     
      
    </section>

    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Swap