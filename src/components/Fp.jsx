import { Link } from "react-router-dom";

const Fp = () => {
  return (
    <div>
    
    <div className='flex gap-3 pl-20 p-7'>
        <Link to="/farms" className='cursor-pointer'>
        <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-bold  border-amber-300 rounded-full w-[120px] p-3 "> FARMS</button>
                </Link>
        <Link to="/pools" className='cursor-pointer'>
        <button className="text-sm focus:text-amber-800 text-amber-400 border-2 focus:border-none focus:bg-amber-400 font-bold act border-amber-300 rounded-full w-[120px] p-3 ">    POOLS</button>
                </Link>
       
        
    </div>

    
    </div>
  )
}

export default Fp