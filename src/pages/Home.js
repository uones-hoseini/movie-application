import React from "react"
import BannerHome from "../components/BannerHome"
import { useSelector } from "react-redux"

import HorizontalScrollCard from "../components/HorizontalScrollCard"

function Home() {
  const trandingData = useSelector((state) => state.movieData.bannerData)
  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trandingData} heading="Trending " />
    </div>
  )
}

export default Home
