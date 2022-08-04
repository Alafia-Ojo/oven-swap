import NavBar from "../components/NavBar";
import Fp from "../components/Fp";
import Footer from "../components/Footer";
import grid1 from "../assets/images/grid1.svg";
import grid2 from "../assets/images/grid2.svg";
import ovenswap from "../assets/images/ovenswap.svg";
import { useState } from 'react'
import { Switch } from '@headlessui/react'



const Pools = () => {
  
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
          <h1 className="text-[#47C6CC]  text-[48px] font-semibold">Syrup Pools</h1>
          <p className="text-[17px]  text-[#3C3C3C]">take some tokens to earn. High Flexible APY, low risk</p>
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
                <img className="w-[20px] " src={ovenswap} alt="" />
                <h1 className="font-medium text-[20px]">OVENSWAP</h1>
              </div>
              </div>
              <div className="flex gap-2">
               
  
                <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                  Auto
                </button>
              </div>
            </div>
  
            <div className="pt-7 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Flexible APY</p>
              <p>4.19%</p>
            </div>
  
            <div className="pt-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Locked APY</p>
              <p>Up to 89.71%</p>
            </div>
  
            
          
           
  
  
  
           <div className="r
           h-[1px] w-full my-6 bg-[#f9aa4b]"></div>
  
  
  <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total staked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">190,058,440 OVEN</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total Blocked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">156,468,835 CAKE</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Average lock duration:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">38 weeks</p>
            </div>
            <div className="pt-3 pb-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Performance Fee:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">0~2%</p>
            </div>
  
            <div className="text-[#47c6cc] font-semibold text-[14px]">
              <ul>
                  <li><a href=""><u>See Token Info</u></a></li>
                  <li><a href=""><u>View Tutorial</u></a></li>
                  <li><a href=""><u>View Contract</u></a></li>
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
                <img className="w-[20px] " src={ovenswap} alt="" />
                <h1 className="font-medium text-[20px]">EARN ANTEX</h1>
              </div>
              </div>
              <div className="flex gap-2">
               
  
                <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                  Auto
                </button>
              </div>
            </div>
  
            <div className="pt-7 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Flexible APY</p>
              <p>4.19%</p>
            </div>
  
            <div className="pt-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Locked APY</p>
              <p>Up to 89.71%</p>
            </div>
  
            
          
           
  
  
  
           <div className="r
           h-[1px] w-full my-6 bg-[#f9aa4b]"></div>
  
  
  <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total staked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">190,058,440 OVEN</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total Blocked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">156,468,835 CAKE</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Average lock duration:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">38 weeks</p>
            </div>
            <div className="pt-3 pb-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Performance Fee:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">0~2%</p>
            </div>
  
            <div className="text-[#47c6cc] font-semibold text-[14px]">
              <ul>
                  <li><a href=""><u>See Token Info</u></a></li>
                  <li><a href=""><u>View Tutorial</u></a></li>
                  <li><a href=""><u>View Contract</u></a></li>
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
                <img className="w-[20px] " src={ovenswap} alt="" />
                <h1 className="font-medium text-[20px]">EARN XCN</h1>
              </div>
              </div>
              <div className="flex gap-2">
               
  
                <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                  Auto
                </button>
              </div>
            </div>
  
            <div className="pt-7 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Flexible APY</p>
              <p>4.19%</p>
            </div>
  
            <div className="pt-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Locked APY</p>
              <p>Up to 89.71%</p>
            </div>
  
            
          
           
  
  
  
           <div className="r
           h-[1px] w-full my-6 bg-[#f9aa4b]"></div>
  
  
  <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total staked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">190,058,440 OVEN</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total Blocked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">156,468,835 CAKE</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Average lock duration:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">38 weeks</p>
            </div>
            <div className="pt-3 pb-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Performance Fee:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">0~2%</p>
            </div>
  
            <div className="text-[#47c6cc] font-semibold text-[14px]">
              <ul>
                  <li><a href=""><u>See Token Info</u></a></li>
                  <li><a href=""><u>View Tutorial</u></a></li>
                  <li><a href=""><u>View Contract</u></a></li>
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
                <img className="w-[20px] " src={ovenswap} alt="" />
                <h1 className="font-medium text-[20px]">OVENSWAP</h1>
              </div>
              </div>
              <div className="flex gap-2">
               
  
                <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                  Auto
                </button>
              </div>
            </div>
  
            <div className="pt-7 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Flexible APY</p>
              <p>4.19%</p>
            </div>
  
            <div className="pt-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Locked APY</p>
              <p>Up to 89.71%</p>
            </div>
  
            
          
           
  
  
  
           <div className="r
           h-[1px] w-full my-6 bg-[#f9aa4b]"></div>
  
  
  <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total staked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">190,058,440 OVEN</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total Blocked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">156,468,835 CAKE</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Average lock duration:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">38 weeks</p>
            </div>
            <div className="pt-3 pb-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Performance Fee:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">0~2%</p>
            </div>
  
            <div className="text-[#47c6cc] font-semibold text-[14px]">
              <ul>
                  <li><a href=""><u>See Token Info</u></a></li>
                  <li><a href=""><u>View Tutorial</u></a></li>
                  <li><a href=""><u>View Contract</u></a></li>
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
                <img className="w-[20px] " src={ovenswap} alt="" />
                <h1 className="font-medium text-[20px]">EARN ANTEX</h1>
              </div>
              </div>
              <div className="flex gap-2">
               
  
                <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                  Auto
                </button>
              </div>
            </div>
  
            <div className="pt-7 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Flexible APY</p>
              <p>4.19%</p>
            </div>
  
            <div className="pt-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Locked APY</p>
              <p>Up to 89.71%</p>
            </div>
  
            
          
           
  
  
  
           <div className="r
           h-[1px] w-full my-6 bg-[#f9aa4b]"></div>
  
  
  <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total staked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">190,058,440 OVEN</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total Blocked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">156,468,835 CAKE</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Average lock duration:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">38 weeks</p>
            </div>
            <div className="pt-3 pb-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Performance Fee:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">0~2%</p>
            </div>
  
            <div className="text-[#47c6cc] font-semibold text-[14px]">
              <ul>
                  <li><a href=""><u>See Token Info</u></a></li>
                  <li><a href=""><u>View Tutorial</u></a></li>
                  <li><a href=""><u>View Contract</u></a></li>
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
                <img className="w-[20px] " src={ovenswap} alt="" />
                <h1 className="font-medium text-[20px]">EARN XCN</h1>
              </div>
              </div>
              <div className="flex gap-2">
               
  
                <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-semibold border-amber-300 rounded-full w-[58px] h-[31px] ">
                  Auto
                </button>
              </div>
            </div>
  
            <div className="pt-7 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Flexible APY</p>
              <p>4.19%</p>
            </div>
  
            <div className="pt-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c]">Locked APY</p>
              <p>Up to 89.71%</p>
            </div>
  
            
          
           
  
  
  
           <div className="r
           h-[1px] w-full my-6 bg-[#f9aa4b]"></div>
  
  
  <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total staked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">190,058,440 OVEN</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Total Blocked:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">156,468,835 CAKE</p>
            </div>
            <div className="pt-3 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Average lock duration:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">38 weeks</p>
            </div>
            <div className="pt-3 pb-5 text-sm flex items-center justify-between">
            <p className="text-[#3c3c3c] text-[16px]">Performance Fee:</p>
              <p className="font-semibold text-[#3c3c3c] text-[16px]">0~2%</p>
            </div>
  
            <div className="text-[#47c6cc] font-semibold text-[14px]">
              <ul>
                  <li><a href=""><u>See Token Info</u></a></li>
                  <li><a href=""><u>View Tutorial</u></a></li>
                  <li><a href=""><u>View Contract</u></a></li>
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
  )
}

export default Pools