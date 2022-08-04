import NavBar from "../components/NavBar";
import Fp from "../components/Fp";
import Footer from "../components/Footer";
import grid1 from "../assets/images/grid1.svg";
import grid2 from "../assets/images/grid2.svg";
import { FaCaretDown } from "react-icons/fa";
import Frame from "../assets/images/Frame.svg";
import ovenswap from "../assets/images/ovenswap.svg";
import { useState } from 'react'
import { Switch } from '@headlessui/react'

const Farms = () => {
    const [enabled, setEnabled] = useState(false)

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Fp />
      </div>

      <div className="pl-20 p-7 font-kanit ">
        <h1 className="text-[#47C6CC]  text-[48px] font-semibold">FARM</h1>
        <p className="text-[17px]  text-[#3C3C3C]">Stake LP tokens to earn</p>
        <p className="text-[#47C6CC] text-[16px]">Community Auction -</p>
        <div className="flex justify-between ">
          <div className="flex gap-2 items-center justify-center">
            <img src={grid1} alt="" />
            <img src={grid2} alt="" />
            
            <div className="py-2">
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-gray-900' : 'bg-gray-500'}
        relative inline-flex h-[23px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
          pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  </div>

            <p className="text-[14px]  text-[#3C3C3C]">Staked only</p>
          </div>

          <div className="flex items-center justify-center  gap-1">
            <div>
              <div className="flex gap-1  ">
                <h1>SORT BY</h1>
              </div>
              <div>
                <input
                  placeholder="0.0"
                  className="w-[170px] bg-gray-200 h-8 rounded-lg  border-white focus:border-transparent focus:ring-tranparent ring-transparent "
                  type="text"
                />
              </div>
            </div>
            <div>
              <div>
                <h1>SEARCH</h1>
                <input
                  placeholder="0.0"
                  className="w-[170px] bg-gray-200 h-8 rounded-lg  border-white focus:border-transparent focus:ring-tranparent ring-transparent "
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="font-kanit grid grid-cols-3  place-items-center">
        <div className="p-8 rounded-lg w-[380px] mb-20  bg-[#FFEBD4] ml-4">
          <div className=" flex items-center justify-between">
            <div>
            <div className="flex gap-2">
              <img className="" src={Frame} alt="" />
              <h1 className="font-medium text-[20px]">BNB</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[20px] " src={ovenswap} alt="" />
              <h1 className="font-medium text-[20px]">OVENSWAP</h1>
            </div>
            </div>
            <div className="flex gap-2">
              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px]">
                Core
              </button>

              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                40X
              </button>
            </div>
          </div>

          <div className="pt-7 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">APR</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Earn</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">OVENSWAP EARN</p> 
          </div>
        
          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#f9aa4b]">24.59%</p>
            <p className="text-[#47c6cc]">Harvest</p>
          </div>

          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#47c6cc] text-[12px]">OVENSWAP - BNB<span className="text-[#3c3c3c]"> LP STAKE</span></p> 
          </div>



         <div className="r
         h-[1px] w-full my-6 bg-[#f9aa4b]"></div>


<div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Total Liquidity:</p>
            <p>$12,76,46,959</p>
          </div>

          <div className="text-[#47c6cc] font-semibold text-[14px]">
            <ul>
                <li><a href=""><u>Get CAKE-BNB LP</u></a></li>
                <li><a href=""><u>View Contract</u></a></li>
                <li><a href=""><u>See Pair info</u></a></li>
            </ul>
    
    </div>

    <button className="text-sm  text-[#47c6cc] border-2   font-medium border-[#47c6cc] rounded-full w-full h-[43px] mt-10">
                Connect Wallet
              </button>
      
        </div>



         <div className="p-8 rounded-lg w-[380px] mb-20  bg-[#FFEBD4] ml-4">
          <div className=" flex items-center justify-between">
            <div>
            <div className="flex gap-2">
              <img className="" src={Frame} alt="" />
              <h1 className="font-medium text-[20px]">BNB</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[20px] " src={ovenswap} alt="" />
              <h1 className="font-medium text-[20px]">OVENSWAP</h1>
            </div>
            </div>
            <div className="flex gap-2">
              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px]">
                Core
              </button>

              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                40X
              </button>
            </div>
          </div>

          <div className="pt-7 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">APR</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Earn</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">OVENSWAP EARN</p> 
          </div>
        
          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#f9aa4b]">24.59%</p>
            <p className="text-[#47c6cc]">Harvest</p>
          </div>

          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#47c6cc] text-[12px]">OVENSWAP - BNB<span className="text-[#3c3c3c]"> LP STAKE</span></p> 
          </div>



         <div className="r
         h-[1px] w-full my-6 bg-[#f9aa4b]"></div>


<div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Total Liquidity:</p>
            <p>$12,76,46,959</p>
          </div>

          <div className="text-[#47c6cc] font-semibold text-[14px]">
            <ul>
                <li><a href=""><u>Get CAKE-BNB LP</u></a></li>
                <li><a href=""><u>View Contract</u></a></li>
                <li><a href=""><u>See Pair info</u></a></li>
            </ul>
    
    </div>

    <button className="text-sm  text-[#47c6cc] border-2   font-medium border-[#47c6cc] rounded-full w-full h-[43px] mt-10">
                Connect Wallet
              </button>
      
        </div>

        <div className="p-8 rounded-lg w-[380px] mb-20  bg-[#FFEBD4] ml-4">
          <div className=" flex items-center justify-between">
            <div>
            <div className="flex gap-2">
              <img className="" src={Frame} alt="" />
              <h1 className="font-medium text-[20px]">BNB</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[20px] " src={ovenswap} alt="" />
              <h1 className="font-medium text-[20px]">OVENSWAP</h1>
            </div>
            </div>
            <div className="flex gap-2">
              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px]">
                Core
              </button>

              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                40X
              </button>
            </div>
          </div>

          <div className="pt-7 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">APR</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Earn</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">OVENSWAP EARN</p> 
          </div>
        
          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#f9aa4b]">24.59%</p>
            <p className="text-[#47c6cc]">Harvest</p>
          </div>

          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#47c6cc] text-[12px]">OVENSWAP - BNB<span className="text-[#3c3c3c]"> LP STAKE</span></p> 
          </div>



         <div className="r
         h-[1px] w-full my-6 bg-[#f9aa4b]"></div>


<div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Total Liquidity:</p>
            <p>$12,76,46,959</p>
          </div>

          <div className="text-[#47c6cc] font-semibold text-[14px]">
            <ul>
                <li><a href=""><u>Get CAKE-BNB LP</u></a></li>
                <li><a href=""><u>View Contract</u></a></li>
                <li><a href=""><u>See Pair info</u></a></li>
            </ul>
    
    </div>

    <button className="text-sm  text-[#47c6cc] border-2   font-medium border-[#47c6cc] rounded-full w-full h-[43px] mt-10">
                Connect Wallet
              </button>
      
        </div>
        <div className="p-8 rounded-lg w-[380px] mb-20  bg-[#FFEBD4] ml-4">
          <div className=" flex items-center justify-between">
            <div>
            <div className="flex gap-2">
              <img className="" src={Frame} alt="" />
              <h1 className="font-medium text-[20px]">BNB</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[20px] " src={ovenswap} alt="" />
              <h1 className="font-medium text-[20px]">OVENSWAP</h1>
            </div>
            </div>
            <div className="flex gap-2">
              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px]">
                Core
              </button>

              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                40X
              </button>
            </div>
          </div>

          <div className="pt-7 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">APR</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Earn</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">OVENSWAP EARN</p> 
          </div>
        
          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#f9aa4b]">24.59%</p>
            <p className="text-[#47c6cc]">Harvest</p>
          </div>

          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#47c6cc] text-[12px]">OVENSWAP - BNB<span className="text-[#3c3c3c]"> LP STAKE</span></p> 
          </div>



         <div className="r
         h-[1px] w-full my-6 bg-[#f9aa4b]"></div>


<div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Total Liquidity:</p>
            <p>$12,76,46,959</p>
          </div>

          <div className="text-[#47c6cc] font-semibold text-[14px]">
            <ul>
                <li><a href=""><u>Get CAKE-BNB LP</u></a></li>
                <li><a href=""><u>View Contract</u></a></li>
                <li><a href=""><u>See Pair info</u></a></li>
            </ul>
    
    </div>

    <button className="text-sm  text-[#47c6cc] border-2   font-medium border-[#47c6cc] rounded-full w-full h-[43px] mt-10">
                Connect Wallet
              </button>
      
        </div>

        <div className="p-8 rounded-lg w-[380px] mb-20  bg-[#FFEBD4] ml-4">
          <div className=" flex items-center justify-between">
            <div>
            <div className="flex gap-2">
              <img className="" src={Frame} alt="" />
              <h1 className="font-medium text-[20px]">BNB</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[20px] " src={ovenswap} alt="" />
              <h1 className="font-medium text-[20px]">OVENSWAP</h1>
            </div>
            </div>
            <div className="flex gap-2">
              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px]">
                Core
              </button>

              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                40X
              </button>
            </div>
          </div>

          <div className="pt-7 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">APR</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Earn</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">OVENSWAP EARN</p> 
          </div>
        
          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#f9aa4b]">24.59%</p>
            <p className="text-[#47c6cc]">Harvest</p>
          </div>

          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#47c6cc] text-[12px]">OVENSWAP - BNB<span className="text-[#3c3c3c]"> LP STAKE</span></p> 
          </div>



         <div className="r
         h-[1px] w-full my-6 bg-[#f9aa4b]"></div>


<div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Total Liquidity:</p>
            <p>$12,76,46,959</p>
          </div>

          <div className="text-[#47c6cc] font-semibold text-[14px]">
            <ul>
                <li><a href=""><u>Get CAKE-BNB LP</u></a></li>
                <li><a href=""><u>View Contract</u></a></li>
                <li><a href=""><u>See Pair info</u></a></li>
            </ul>
    
    </div>

    <button className="text-sm  text-[#47c6cc] border-2   font-medium border-[#47c6cc] rounded-full w-full h-[43px] mt-10">
                Connect Wallet
              </button>
      
        </div>


        <div className="p-8 rounded-lg w-[380px] mb-20  bg-[#FFEBD4] ml-4">
          <div className=" flex items-center justify-between">
            <div>
            <div className="flex gap-2">
              <img className="" src={Frame} alt="" />
              <h1 className="font-medium text-[20px]">BNB</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[20px] " src={ovenswap} alt="" />
              <h1 className="font-medium text-[20px]">OVENSWAP</h1>
            </div>
            </div>
            <div className="flex gap-2">
              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px]">
                Core
              </button>

              <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                40X
              </button>
            </div>
          </div>

          <div className="pt-7 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">APR</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Earn</p>
            <p>24.59%</p>
          </div>

          <div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">OVENSWAP EARN</p> 
          </div>
        
          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#f9aa4b]">24.59%</p>
            <p className="text-[#47c6cc]">Harvest</p>
          </div>

          <div className="pt-5 = flex items-center justify-between">
          <p className="text-[#47c6cc] text-[12px]">OVENSWAP - BNB<span className="text-[#3c3c3c]"> LP STAKE</span></p> 
          </div>



         <div className="r
         h-[1px] w-full my-6 bg-[#f9aa4b]"></div>


<div className="pt-5 text-sm flex items-center justify-between">
          <p className="text-[#3c3c3c]">Total Liquidity:</p>
            <p>$12,76,46,959</p>
          </div>

          <div className="text-[#47c6cc] font-semibold text-[14px]">
            <ul>
                <li><a href=""><u>Get CAKE-BNB LP</u></a></li>
                <li><a href=""><u>View Contract</u></a></li>
                <li><a href=""><u>See Pair info</u></a></li>
            </ul>
    
    </div>

    <button className="text-sm  text-[#47c6cc] border-2   font-medium border-[#47c6cc] rounded-full w-full h-[43px] mt-10">
                Connect Wallet
              </button>
      
        </div>
        
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Farms;
