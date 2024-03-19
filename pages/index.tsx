import type { GetServerSidePropsContext, NextPage } from "next";
import { Footer } from "../elements/footer";
import { Header } from "../elements/header";
import { fetchUser } from "../utils/api";
import { DiscordUser } from '../utils/types';
import { useRouter } from "next/router";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faTools, faUsers } from '@fortawesome/free-solid-svg-icons'

type Props = {
  discordUser: DiscordUser[];
}

export const metadata: Metadata = {
  title: 'Home',
  description: '...',
}

const Main: NextPage<Props> = (props) => {
  const router = useRouter();
  console.log(props)
    return <>
    <Head>
      <title>Switch - The Only Discord Bot You Need</title>
    </Head>
    <div className="min-h-screen">
      { props.discordUser == null ?
      <Header user={{
            discordId: "",
            username: "",
            avatar: "",
            banner: ""
          }} ></Header>
       :
       props.discordUser.map((user) => (
        <Header user={user}/>
   ))}
        <main className="flex flex-col gap-2">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden mb-20 lg:mb-0">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-12">
                        <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block"><span className="text-red-400"> Switch</span> <span>The Only</span></span>
                <span className="block"> <span className="text-indigo-400"> Discord </span><span>Bot You Need</span></span>
                        </h1>
                        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Remove all those useless bots, and use Switch. No more thousands of bots, only one trusted bot in your server.</p>
                        <div className="mt-10 sm:mt-12">
                <div className="sm:max-w-xl sm:mx-auto lg:mx-0 buttons-landing">
                  <a href ="https://discord.com/oauth2/authorize?client_id=697406385889214485&permissions=2134207679&scope=bot" style={{marginRight: .5 + 'rem'}} className="items-center relative lg:px-5 md:px-5 sm:px-5 px-1 py-2.5 bg-gray-900 btn-5 border-red rounded-md h-[44px] sm:w-[250px] w-[250px] uppercase duration-[700ms] transition-all ease-in-out"><i className="fab fa-discord"></i> Add Bot To Server
                  
                  </a>
  <a href ="/changelog" className="items-center relative lg:px-5 md:px-5 sm:px-5 px-1 py-2.5 bg-gray-900 border-red rounded-md group-hover:sm:bg-opacity-50 h-[44px] sm:w-[250px] w-[250px] uppercase duration-[700ms] transition-all ease-in-out">View Changelog</a>
                </div>
              </div>
                    </div>
                </div>
                <picture>
                <img src="../switchWebBrand.png" className="w-1/2 h-[960px] xl:block hidden"></img>
                </picture>
                </div>
            </div>
            </div>
            <div className="stars"></div>
            <div className="back-Cloud" style={{["position" as any]: "absolute", ["inset" as any]: 0 + 'px', ["background-size" as any]: "auto", ["background-repeat" as any]: "no-repeat", ["will-change" as any]: "transform", width: 100 + '%', height: 962 + 'px', ["transform" as any]: "translate3d(0 + 'px', 962 + 'px', 0 + 'px')", ["opacity" as any]: 0.1}}>
      <div style={{["display" as any]: "block", ["width" as any]: "20%", ["margin-left" as any]: 55 + '%'}}>
        <picture>
        <img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
        </picture>
      </div>
      <div style={{["display" as any]: "block", ["width" as any]: "10%", ["margin-left" as any]: 15 + '%'}}><img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
      </div>
    </div>
    <div className="back-Cloud2"   style={{["position" as any]: "absolute", ["inset" as any]: 0 + 'px', ["background-size" as any]: "auto", ["background-repeat" as any]: "no-repeat", ["will-change" as any]: "transform", width: 100 + '%', height: 962 + 'px', ["transform" as any]: "translate3d(0 + 'px', 1307.5 + 'px', 0 + 'px')", ["opacity" as any]: 0.1}}>
      <div  style={{["display" as any]: "block", ["width" as any]: "20%", ["margin-left" as any]: 70 + '%'}}><img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
      </div><div style={{["display" as any]: "block", ["width" as any]: "40%", ["margin-left" as any]: 70 + '%'}}><img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
      </div>
    </div>
    <div className="back-Cloud3"   style={{["position" as any]: "absolute", ["inset" as any]: 0 + 'px', ["background-size" as any]: "auto", ["background-repeat" as any]: "no-repeat", ["will-change" as any]: "transform", width: 100 + '%', height: 962 + 'px', ["transform" as any]: "translate3d(0 + 'px', 1338.8 + 'px', 0 + 'px')", ["opacity" as any]: 0.2}}>
      <div  style={{["display" as any]: "block", ["width" as any]: "10%", ["margin-left" as any]: 10 + '%'}}><img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
      </div><div style={{["display" as any]: "block", ["width" as any]: "20%", ["margin-left" as any]: 75 + '%'}}><img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
      </div>
    </div>
    <div className="back-Cloud4"   style={{["position" as any]: "absolute", ["inset" as any]: 0 + 'px', ["background-size" as any]: "auto", ["background-repeat" as any]: "no-repeat", ["will-change" as any]: "transform", width: 100 + '%', height: 962 + 'px', ["transform" as any]: "translate3d(0 + 'px', 1608.8 + 'px', 0 + 'px')", ["opacity" as any]: 0.4}}>
      <div  style={{["display" as any]: "block", ["width" as any]: "20%", ["margin-left" as any]: 60 + '%'}}><img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
      </div>
      <div style={{["display" as any]: "block", ["width" as any]: "25%", ["margin-left" as any]: 30 + '%'}}><img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
      </div>
      <div style={{["display" as any]: "block", ["width" as any]: "10%", ["margin-left" as any]: 80 + '%'}}><img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
      </div>
    </div>
    <div className="back-Cloud5"   style={{["position" as any]: "absolute", ["inset" as any]: 0 + 'px', ["background-size" as any]: "auto", ["background-repeat" as any]: "no-repeat", ["will-change" as any]: "transform", width: 100 + '%', height: 962 + 'px', ["transform" as any]: "translate3d(0 + 'px', 1940.4 + 'px', 0 + 'px')", ["opacity" as any]: 0.6}}>
      <div  style={{["display" as any]: "block", ["width" as any]: "20%", ["margin-left" as any]: 5 + '%'}}><img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
      </div><div style={{["display" as any]: "block", ["width" as any]: "15%", ["margin-left" as any]: 75 + '%'}}><img alt="" draggable="false" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" src="/cloud.svg" style={{color: "transparent" }}></img>
      </div>
    </div>
    <div style={{["inset" as any]: "0px", ["background-size" as any]: "auto", ["background-repeat" as any]: "no-repeat", ["will-change" as any]: "transform", ["width" as any]: "100%", ["height" as any]: "962px", ["display" as any]: "flex", ["align-items" as any]: "center", ["justify-content" as any]: "center"}}>
        <div className="max-w-3/4 flex items-center justify-center text-center flex-col gap-3">
            <div className="flex items-center justify-center text-center gap-3">
                <h1 className="animate-fadeIn pointer-events-none md:text-[100px] text-[50px] lg:max-w-xl font-bold leading-none text-white" style={{["letter-spacing" as any]: "2px", ["text-shadow" as any]: "rgba(235,235,235,0.34) 1px 1px 20px"}}>Switch</h1>
            </div>
            <div className="mt-[20%] text-3xl text-white text-center max-w-[500px]">
          It all started about <b className="font-bold text-red-400">four years ago</b> when servers had too many Discord bots all with the same features
        </div>
        </div>
    </div>
    <div style={{["inset" as any]: "0px", ["background-size" as any]: "auto", ["background-repeat" as any]: "no-repeat", ["will-change" as any]: "transform", ["width" as any]: "100%", ["height" as any]: "962px"}}>
    <div className="flex items-center justify-center flex-col gap-2 mb-[10%]">
    <div className="w-3/4 lg:w-1/2">
          <h1 className="animate-fadeIn pointer-events-none text-2xl md:text-3xl font-bold text-white uppercase text-center mb-2" style={{["font-family" as any]: '"Futura xblk bt", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif"', ["line-height" as any]: "1.5"}}>With Switch, you can <u className="font-bold">have one</u> discord bot for your server</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          <div className="px-4 py-2 bg-color-accent rounded-lg flex items-center justify-center flex-col floatBox">
            <FontAwesomeIcon icon={faDollarSign} className="fas fa-dollar-sign fa-2x"></FontAwesomeIcon>
            <div className="font-bold text-white text-xl">FREE</div><div className="text-gray-300 text-lg">No premium commands all free!</div>
          </div>
          <div className="px-4 py-2 bg-color-accent rounded-lg flex items-center justify-center flex-col floatBox">
           <FontAwesomeIcon icon={faTools} className="fas fa-tools fa-2x"></FontAwesomeIcon>
            <div className="font-bold text-white text-xl">Easy Configuration</div><div className="text-gray-300 text-lg">Bot or Website YOU have the power!</div>
          </div>
          <div className="px-4 py-2 bg-color-accent rounded-lg flex items-center justify-center flex-col floatBox">
          <FontAwesomeIcon icon={faUsers} className="fas fa-users fa-2x"></FontAwesomeIcon>
            <div className="font-bold text-white text-xl">Community</div><div className="text-gray-300 text-lg">You matter, you come first!</div>
          </div>
        </div>
    </div>
    </div>
        </main>
        <div className = "absolute w-full">
          <Footer />
        </div>
    </div>
    </>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchUser(context);
}

export default Main;
