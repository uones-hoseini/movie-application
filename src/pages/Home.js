import React from "react"
import BannerHome from "../components/BannerHome"
import { useSelector } from "react-redux"
import Card from "../components/Card"

function Home() {
  const trandingData = useSelector((state) => state.movieData.bannerData)
  return (
    <div>
      <BannerHome />
      <div className="container mx-auto px-3 my-10">
        <h2 className="text-xl lg:text-2xl font-bold mb-2">Trending Show</h2>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6">
          {trandingData.map((data,index) => {
            return <Card key={data.id} data={data} index={index+1} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
