import React,{useEffect, useState} from 'react'
import "./Nav.css"
export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",() =>{
      if(window.scrollY >50){
        setShow(true);
      }else{
        setShow(false);
      }
    });
    return() =>{
      window.removeEventListener("scroll",() => {});
    };
  },[]);





  return(
  <nav className={`nav ${show && "nav__black"}`}>
    <img
    alt='Netflix logo'
    src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" className='nav__logo'
    onClick={() => window.location.reload()}
    />
    <img 
    alt="User logged"
    src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdzFYgOGZMXGJmvcNvlVm7PXX9JfiS8Hbssnb0cVEpfs2bP__tJsihUnUZkIxir1KTMQTPWYC5eGvF4rFnVoA1KHOqU0_cg.png?r=156"
    className='nav__avatar'/>

  </nav>
  )
}
