import React, { useEffect, useState } from "react"
import BannerHome from "../components/BannerHome"
import { useSelector } from "react-redux"

import HorizontalScrollCard from "../components/HorizontalScrollCard"
import axios from "axios"

function Home() {
  const trandingData = useSelector((state) => state.movieData.bannerData)
  const [nowPlayingData, setNowPlayingData] = useState([])


  const fetchNowPlayingData=async()=>{
    const response=await axios.get("/movie/now_playing")
    setNowPlayingData(response.data.results)

  }
  useEffect(()=>{
fetchNowPlayingData()
  },[])
  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trandingData} heading="Trending " trending={true} />
      <HorizontalScrollCard data={nowPlayingData} heading="Now Playing " />
    </div>
  )
}

export default Home
