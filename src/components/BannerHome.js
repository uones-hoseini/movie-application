import React from "react"
import { useSelector } from "react-redux"

function BannerHome() {
  const bannerData = useSelector((state) => state.movieData.bannerData)
  const imageURL = useSelector((state) => state.movieData.imageURL)
  console.log("banner Data", bannerData)
  return (
    <section className="w-full h-full">
      <div>
        {bannerData.map((data, index) => {
          return (
            <div>
              <div>
                <img src={imageURL + data.backdrop_path} alt="image" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default BannerHome
