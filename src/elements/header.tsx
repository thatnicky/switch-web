import { useRouter } from "next/router";
import { DiscordUser } from "../utils/types";
import { FC, useEffect, useState } from 'react';
import { getAvatar, getBanner } from "../utils/helpers";
import { faCrown, faSignOut, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
  user: DiscordUser;
}

export const Header: FC<Props> = ({user})  => {
  const [test, setTest] = useState(false); // Defaults to `false`
  const router = useRouter();

  if(!user.discordId) {
    user = null as any
  }

  const avatar = getAvatar(user)
  console.log("avatar " + avatar)

  const banner = getBanner(user)

  const dropdownOpen = () => {
    document.getElementById("dropdownMenu")?.classList.toggle("active")
  }

  useEffect(() => {
    const header = document.getElementById('nav');
    function checkScroll() {
      if (window.scrollY > 50) {
        header?.classList.add("SWITCH__nav-bg");
      }
      if (window.scrollY === 0) {
        header?.classList.remove("SWITCH__nav-bg");
      }
    }

    window.addEventListener("scroll", checkScroll);
    if (test) {
      window.addEventListener("scroll", checkScroll);
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", checkScroll);
    }
  }, [test]);
  return (
        <>
        <div className="popover-menu">
            <div className="topbar-popover">
              <button className="closeBtn"> X </button>

              <nav className="md:flex space-x-10 popover-links">
          <a href="/commands" className="text-base font-medium text-gray-400 hover:text-gray-200">Commands</a>
          <a href="/support" className="text-base font-medium text-gray-400 hover:text-gray-200">Support</a>
        <a href="/" className="text-base font-medium text-gray-400 hover:text-gray-200">Status</a>

        { 
        user ?
        <>
        <a className="btn login-btn" href="/account">Dashboard</a>
        <a className="btn logout-btn" href="/logout"> <i className= "fas fa-sign-out-alt"></i> Logout </a>
        </> 
        :
        <a className="btn login-btn" href="/login">Login</a>
        }
        </nav>
            </div>
        </div>


        <div className="sticky top-5 z-50 animate-fadeIn">
            <div className="relative ml-2 mr-2">
            <div className="max-w-4xl mx-auto px-2 sm:px-6 rounded-lg" style={{["transition" as any]: "background-color .2s ease"}} id="nav">
            <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
              <div className="cursor-pointer">
            <Link href="/">
          <img className="h-12 w-12 shadow-lg p-1 rounded-full ring-2 ring-gray-500" src="/switch.png" alt="icon" draggable="false"></img>
        </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-slate-800 focus:outine-none focus:ring-0" type="button">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-10">
          <div className="capatalize text-base font-medium text-gray-400 hover:text-gray-200 cursor-pointer">
          <Link href="/commands">Commands</Link>
          </div>
          <a href="/support" className="text-base font-medium text-gray-400 hover:text-gray-200">Support</a>
          <a href="/" className="text-base font-medium text-gray-400 hover:text-gray-200">Status</a>
        </nav>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            { user ?
            <div className="dropdown" data-dropdown>
            <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent shadow-sm text-base font-medium text-gray-400 hover:text-gray-200 rounded-full dropBtn" style={{["background-color" as any]: "hsla(0,0%,100%,0.05)"}} onClick={dropdownOpen}><img className="h-10 w-10 shadow-lg p-1 rounded-full ring-2 ring-blue-500" src={avatar}/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-200"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
          
          <div className="dropdown-menu" id="dropdownMenu">
            <div className="user-banner-avatar">
              <img className ="user-banner" style={{["margin" as any]:0, ["border-top-left-radius" as any]: "5px", ["border-top-right-radius" as any]: "5px"}} src={banner}/>
              <img className="h-30 w-30 rounded-full onBanner" src={avatar} />
            </div>
            <div className="user-info">
              <h1 className="user-name-drop">{user.username}</h1>
            </div>
            <div className="separator"></div>
            <div className="links">
              <p style={{["font-weight" as any]: "700", ["font-size" as any]: ".92rem"}}>SWITCH</p>
              <a className="dropdown-link premium" href="#"><FontAwesomeIcon icon={faCrown}  style={{["color" as any] :"#f0bc1f;"}} className="fas fa-crown"></FontAwesomeIcon> Premium</a>
              <p style={{["font-weight" as any]: "700", ["font-size" as any]: ".92rem"}}>MANAGEMENT</p>
              <a className="dropdown-link" href="/account"><i className="fas fa-users"></i> My Servers</a>
              
              <p style={{["font-weight" as any]: "700", ["font-size" as any]: ".92rem"}}>OTHERS</p>
              <a className="dropdown-link logout" href="http://localhost:3001/api/auth/logout"><i style={{["color" as any]: "#eb3434"}} className="fas fa-sign-out-alt 2x"></i><FontAwesomeIcon icon={faSignOutAlt}  style={{["color" as any] :"#eb3434;"}} className="fas fa-sign-out-alt 2x"></FontAwesomeIcon> Logout</a>
            </div>
            </div>
          </div>
           :
          <a href="http://localhost:3001/api/auth/discord" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent shadow-sm text-base font-medium text-gray-400 hover:text-gray-200 rounded-full" style={{["background-color" as any]: "hsla(0,0%,100%,0.05)"}}>Login</a>
          }
        </div>
            </div>
            </div>
            </div>
        </div>
        </>
  );
        };

