import ovenswap from '../assets/images/ovenswap.svg';
import world from "../assets/images/world.svg";
import gear from "../assets/images/gear.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto mt-auto p-8 font-kanit font-normal">
      <div>
        <img src={ovenswap} alt="" />
      </div>
      <div className>
        <nav className="flex gap-6 items-center text-base">
          <ul className="flex gap-4">
            <li><span className="text-amber-400">Trade</span></li>
            <li>Earn</li>
            <li>Win</li>
            <li>NFT</li>
            <li>1690.00</li>
            <img src={world} alt="" />
            <img src={gear} alt="" />
            
          </ul>
          <button className="text-sm w-[152px] h-[35px] text-[#814A0A] bg-[#F9AA4B] rounded-full px-3 py-1 font-semibold">Connect Wallet</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
