import NavBar from "../components/NavBar";
import Sllp from "../components/Sllp";
import Footer from "../components/Footer";
import gear from "../assets/images/gear.svg";
import "../index.css";

const Liquidity = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Sllp />
      </div>
      <div className="flex items-center justify-center font-kanit">
        <div className="w-[490px] h-auto rounded-lg flex flex-col items-center bg-[#FFEBD4] p-8 mb-20">
          <div className="flex">
            <h1 className="text-[#47C6CC] pl-20  text-[32px] font-bold">
              YOUR LIQUIDITY <span></span>
            </h1>
            <img className="pl-20" src={gear} alt="" />
          </div>

          <div>
            <p className="text-[17px] text-[#3C3C3C]">
              REMOVE LIQUIDITY TO RECIEVE TOKENS BACK
            </p>
          </div>
          <div>
           <p className="text-[17px] my-12 text-[#3C3C3C]"> Connect to a wallet to view your liquidity</p>
          </div>

          <button className="text-sm w-[152px] h-[53px] text-[#814A0A] bg-[#F9AA4B] rounded-full px-3 py-1 font-semibold">Add Liquidity</button>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Liquidity;
