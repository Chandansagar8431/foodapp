import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass,faXmark,faUser,faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import {Link} from "react-router-dom"
// import headimg from '../../public/bg-images'

const Navbar = () => {
  const [bartoggle,setbartoggle]=useState(false)
  return (
    <div className='max-w-[1520] p-2 flex flex-row justify-between items-center mx-auto bg-slate-300'>
      <div className=' flex flex-row items-center gap-x-3'>
        <div onClick={()=>setbartoggle(!bartoggle)} className="cursor-pointer" style={{fontSize:'20px'}} >
          <FontAwesomeIcon  icon={faBars} size="lg" /></div>
        
          
        
        <h1 className='md:text-3xl sm:text-2xl lg:text-3xl font-bold text-blue-400'>Fresh<span>Eats</span></h1>
        <div className="flex items-center bg-gray-200 rounded-full bg-vibrant-background" >
          
          <span className="px-2 text-gray-100  text-lg bg-slate-500 rounded-full">Fulfill</span>
        <span className="px-2 text-lg font-bold">ursCrave</span></div>
      </div>
      
        
      
      <div className=" hidden md:flex lg:flex items-center border rounded-full px-2 bg-slate-200 w-90 h-10 ">
        <input className='focus:outline-none w-full bg-slate-200 ' 
        style={{paddingBottom:'3px',fontSize:'20px',width:'380px'}} type="text" placeholder="search..."/>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>

        </div>
        <button className= "hidden lg:flex items-center gap-1 border-2 bg-blue-300 border-black rounded-full px-3 py-1 text-lg font-bold" 
        style={{paddingBottom:'7px'}}><FontAwesomeIcon icon={faCartShopping}/>cart</button>
        
        

        {
            bartoggle?<div className="bg-black/60 fixed top-0 left-0 w-full h-screen z-10"></div>:null
          }
          {bartoggle&&<div onClick={()=>setbartoggle(!bartoggle)} className="z-20 w-[300px] h-screen fixed top-0 left-0 bg-white cursor-pointer flex justify-between ">
           
            <nav className="flex flex-col justify-start">
            <Link to="/" className="font-bold p-2 text-2xl text-blue-400">FreshEats</Link>
            <Link to="/profile" className="p-2 font-bold text-xl text-gray-500">
              <FontAwesomeIcon style={{marginRight:'5px'}}icon={faUser}/>My profile</Link>
            <Link className="p-2 font-bold text-xl text-gray-500" to='/order'>orders</Link>
             <Link  className="p-2 font-bold text-xl text-gray-500" to='/about'>About</Link>
            </nav>


            <div className="absolute right-0 p-1"><FontAwesomeIcon icon={faXmark} size="xl"/></div>
            </div>}

    </div>
  )
}

export default Navbar