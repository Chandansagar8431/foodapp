import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <div className='max-w-[1520] p-2 flex flex-row justify-between items-center mx-auto'>
      <div className=' flex flex-row items-center gap-x-3'>
        <div className="cursor-pointer" style={{fontSize:'20px'}} ><FontAwesomeIcon  icon={faBars} size="lg" /></div>
        
        <h1 className='md:text-3xl sm:text-2xl lg:text-3xl font-bold text-blue-300'>Fresh<span>Eats</span></h1>
        <h1 className="flex items-center bg-gray-200 rounded-full">
          <span className="px-2 text-lg bg-red-500 text-bold rounded-full">Free</span>
        <span className="px-2 text-lg">delivary</span></h1>
      </div>
      
        
      
      <div className=" hidden md:flex items-center border rounded-full px-2 bg-slate-200  h-10 ">
        <input className='focus:outline-none bg-slate-200 ' 
        style={{paddingBottom:'3px',fontSize:'20px',width:'380px'}} type="text" placeholder="search..."/>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>

        </div>
        <button className= "border-2 bg-blue-300 border-black rounded-full px-3 py-1 text-lg font-bold" style={{paddingBottom:'7px'}}>cart</button>
        
        


    </div>
  )
}

export default Navbar