import { FC } from "react";

export const Footer: FC = () => {
return (
<div className="realative mt-16 bg-color-accent">
 <svg className="top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 z-[-1] text-color-accent" preserveAspectRatio="none" viewBox="0 0 1440 54"><path fill="currentColor" d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"></path></svg>
  <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 z-1">
    <div className="grid gap-10 row-gap-10 mb-8 lg:gap-1 lg:flex lg:justify-between">
      <div className="md:max-w-md lg:col-span-5">
        <div className="inline-flex items-center">
        <picture><img alt="" src="/switchFooterImage.png" decoding="async" data-nimg="intrinsic" className="h-8 w-auto sm:h-20" style={{["top" as any]:0, ["left" as any]: 0, ["bottom" as any]:0, ["right" as any]: 0, ["box-sizing" as any]: "border-box", ["padding" as any]:0, ["border" as any]: "none", ["display" as any]: "block", ["min-width" as any]: "50%", ["max-width" as any]: "50%", ["min-height" as any]: "50%", ["max-height" as any]: "50%"}} srcSet="/switchFooterImage.png 1x, /switchFooterImage.png 2x"></img></picture>
        </div>
        <div className="mt-4 lg:max-w-[40rem]  max-w-md">
          <div className="text-lg text-color-text">
            Switch is a new multi-purpose bot that does it all so only one bot is in your Discord Server!
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-lg">
      <div>
        <div className="font-semibold tracking-wide text-gray-200 lg:text-right uppercase">main</div>
        <ul className="mt-2 space-y-4 lg:text-right">
          <li className="text-color-text transition-all duration-200 hover:text-gray-200 capitalize hidden"><a href="/soon">premium</a></li>
          <li className="text-color-text transition-all duration-200 hover:text-gray-200 capitalize"><a href="/discord">support server</a></li>
          <li className="text-color-text transition-all duration-200 hover:text-gray-200 capitalize"><a href="/soonz">status</a></li>
          <li className="text-color-text transition-all duration-200 hover:text-gray-200 capitalize"><a href="/commands">commands</a></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold tracking-wide text-gray-200 lg:text-right uppercase">other</div>
        <ul className="mt-2 space-y-4 lg:text-right">
          <li className="text-color-text transition-all duration-200 hover:text-gray-200 capitalize hidden"><a href="/soon">faq</a></li>
          <li className="text-color-text transition-all duration-200 hover:text-gray-200 capitalize"><a href="/terms">terms</a></li>
          <li className="text-color-text transition-all duration-200 hover:text-gray-200 capitalize"><a href="/privacy   ">privacy</a></li>
          <li className="text-color-text transition-all duration-200 hover:text-gray-200 capitalize"><a href="/development">development</a></li>
        </ul>
      </div>
      </div>
    </div>
    <div className="flex flex-col justify-between pt-5 pb-10 border-t-2 sm:flex-row" style={{["border-color" as any]: "var(--color-secondary)"}}>
      <div className="text-sm text-color-text">© Copyright 2019 - 2023 Switch. all rights reserved<div className="text-sm text-color-text">developed by <a href="https://nicky.thatnickyy.repl.co" target="_blank" rel="noreferrer" className="text-color-primary mr-1 transition-all duration-200 hover:text-gray-200">nicky </a>with <span className="text-red-500">❤</span>
      </div>
      </div>
      <div className="flex items-center mt-4 space-x-4 sm:mt-0">
        <div className="transition-colors duration-300 text-deep-purple-100 cursor-pointer">
          <a href="/discord" target="_blank">
            <svg viewBox="0 0 256 293" version="1.1" preserveAspectRatio="xMidYMid" className="h-5 opacity-80 transition-all duration-200 hover:opacity-100">
              <path d="M226.011429,0 L29.9885714,0 C13.4582857,0 0,13.4582857 0,30.1348571 L0,227.913143 C0,244.589714 13.4582857,258.048 29.9885714,258.048 L195.876571,258.048 L188.123429,230.985143 L206.848,248.393143 L224.548571,264.777143 L256,292.571429 L256,30.1348571 C256,13.4582857 242.541714,0 226.011429,0 Z M169.545143,191.049143 C169.545143,191.049143 164.278857,184.758857 159.890286,179.2 C179.053714,173.787429 186.368,161.792 186.368,161.792 C180.370286,165.741714 174.665143,168.521143 169.545143,170.422857 C162.230857,173.494857 155.209143,175.542857 148.333714,176.713143 C134.290286,179.346286 121.417143,178.614857 110.445714,176.566857 C102.107429,174.957714 94.9394286,172.617143 88.9417143,170.276571 C85.5771429,168.96 81.92,167.350857 78.2628571,165.302857 C77.824,165.010286 77.3851429,164.864 76.9462857,164.571429 C76.6537143,164.425143 76.5074286,164.278857 76.3611429,164.132571 C73.728,162.669714 72.2651429,161.645714 72.2651429,161.645714 C72.2651429,161.645714 79.2868571,173.348571 97.8651429,178.907429 C93.4765714,184.466286 88.064,191.049143 88.064,191.049143 C55.7348571,190.025143 43.4468571,168.813714 43.4468571,168.813714 C43.4468571,121.709714 64.512,83.5291429 64.512,83.5291429 C85.5771429,67.7302857 105.618286,68.1691429 105.618286,68.1691429 L107.081143,69.9245714 C80.7497143,77.5314286 68.608,89.088 68.608,89.088 C68.608,89.088 71.8262857,87.3325714 77.2388571,84.8457143 C92.8914286,77.9702857 105.325714,76.0685714 110.445714,75.6297143 C111.323429,75.4834286 112.054857,75.3371429 112.932571,75.3371429 C121.856,74.1668571 131.949714,73.8742857 142.482286,75.0445714 C156.379429,76.6537143 171.300571,80.7497143 186.514286,89.088 C186.514286,89.088 174.957714,78.1165714 150.089143,70.5097143 L152.137143,68.1691429 C152.137143,68.1691429 172.178286,67.7302857 193.243429,83.5291429 C193.243429,83.5291429 214.308571,121.709714 214.308571,168.813714 C214.308571,168.813714 201.874286,190.025143 169.545143,191.049143 Z M101.522286,122.733714 C93.184,122.733714 86.6011429,130.048 86.6011429,138.971429 C86.6011429,147.894857 93.3302857,155.209143 101.522286,155.209143 C109.860571,155.209143 116.443429,147.894857 116.443429,138.971429 C116.589714,130.048 109.860571,122.733714 101.522286,122.733714 M154.916571,122.733714 C146.578286,122.733714 139.995429,130.048 139.995429,138.971429 C139.995429,147.894857 146.724571,155.209143 154.916571,155.209143 C163.254857,155.209143 169.837714,147.894857 169.837714,138.971429 C169.837714,130.048 163.254857,122.733714 154.916571,122.733714" fill="#7289DA"></path>
            </svg>
          </a>
        </div>
        <div className="transition-colors duration-300 text-deep-purple-100 cursor-pointer">
          <a href="/twitter" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
</svg></a> 
        </div>
      </div>
    </div>
  </div>
</div>
);
};
