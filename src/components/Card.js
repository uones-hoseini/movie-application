import React from "react"
import { useSelector } from "react-redux"

function Card({ data, trending, index }) {
  const imageURL = useSelector((state) => state.movieData.imageURL)

  return (
    <div className="w-full max-w-[250px] h-80 overflow-hidden rounded">
      <img src={imageURL + data?.poster_path} alt="" />
      <div>{trending && <div>#{index} Trending</div>}</div>
    </div>
  )
}

export default Card
