import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <>
      <div className="flex-col max-w-xl md:max-w-2xl  ">
        <div>
          <h1 className="pt-4 text-5xl md:text-7xl font-epilogue font-blod">
            The RouterOS Cloud controller.
          </h1>
          <p className="font-normal font-inter ">
            Cloutik is a cloud controller for RouterOS device. Real time
            visibility, remote Webfig and Winbox access. From everywhere. Try it
            now on our instances covering four areas EMEA / America / Asia /
            Africa.
          </p>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Hero
