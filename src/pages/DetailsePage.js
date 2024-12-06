import React from "react"
import { useParams } from "react-router-dom"
import useFetchDetails from "../hooks/useFetchDetails"
import { useSelector } from "react-redux"
import Divider from "../components/Divider"

function DetailsePage() {
  const imageURL = useSelector((state) => state.movieData.imageURL)

  const params = useParams()

  console.log("params", params)
  const { data } = useFetchDetails(`${params?.explore}/${params?.id}`)
  const { data: castData } = useFetchDetails(`${params?.explore}/${params?.id}/credits`)
  console.log("data", data)
  console.log("case data", castData)

  // const duration=(Number(data.runtime)/60).toFixed(1).split(".")

  return (
    <div>
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img 
          src={imageURL + data?.backdrop_path } alt="" 
          className="h-full w-full object-cover"
           />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img src={imageURL + data?.poster_path} alt="" className="h-80 w-60 object-cover rounded" />
        </div>

        <div className=" ">

          <h2 className="text-2xl font-bold text-white">{data?.title || data?.name}</h2>
          <p className="text-neutral-400">{data?.tagline}</p>
        <Divider/>

          <div className="flex items-center my-3 gap-3">

            <p>Rating : {Number(data?.vote_average).toFixed(1)}</p>
            <span>|</span>
            <p className="">View : {data?.vote_count}</p>
            <span>|</span>

            <p className="">{/* Duration : {duration[0] }h {duration[1]}m */}</p>
            <p className="">Popularity : {Number(data?.popularity).toFixed(0)}</p>
          </div>
        <Divider/>

          <div className="">
            <h3 className="text-xl font-bold text-white mb-1">Over Veiw</h3>
            <p>{data?.overview}</p>
            <Divider/>

            <div className="flex items-center my-3 text-center gap-4">
              <p className="">Status : {data?.status}</p>
              <span>|</span>
              <p className="">
                Release Date : {data?.first_air_date || data?.release_date}
              </p>
              <span>|</span>
              Production Countries : {data?.production_countries[0].name}
        

            </div>
        <Divider/>

          </div>
          <div className="">
            <p className="">

              <span className="text-white">
              Director : {castData?.cast[0].name}
              </span>
            </p>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default DetailsePage
