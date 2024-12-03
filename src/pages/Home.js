import React, { useEffect, useState } from "react"
import BannerHome from "../components/BannerHome"
import { useSelector } from "react-redux"

import HorizontalScrollCard from "../components/HorizontalScrollCard"
import axios from "axios"
import useFetch from "../hooks/useFetch"

function Home() {
  const trandingData = useSelector((state) => state.movieData.bannerData)

  const { data: nowPlayingData } = useFetch("/movie/now_playing")
  const { data: topRatingData } = useFetch("/movie/top_rated")

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trandingData} heading="Trending " trending={true} />
      <HorizontalScrollCard data={nowPlayingData} heading="Now Playing " />
      <HorizontalScrollCard data={topRatingData} heading="Top Rating Movies " />
    </div>
  )
}

export default Home
