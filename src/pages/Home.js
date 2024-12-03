import BannerHome from "../components/BannerHome"
import { useSelector } from "react-redux"

import HorizontalScrollCard from "../components/HorizontalScrollCard"

import useFetch from "../hooks/useFetch"

function Home() {
  const trandingData = useSelector((state) => state.movieData.bannerData)

  const { data: nowPlayingData } = useFetch("/movie/now_playing")
  const { data: topRatingData } = useFetch("/movie/top_rated")
  const { data: pupolarTvShowData } = useFetch("/tv/popular")
  const { data: onAirShowData } = useFetch("/tv/on_the_air")

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trandingData} heading="Trending " trending={true} />
      <HorizontalScrollCard data={nowPlayingData} heading="Now Playing " />
      <HorizontalScrollCard data={topRatingData} heading="Top Rated Movies " />
      <HorizontalScrollCard data={pupolarTvShowData} heading="Popular TV Show " />
      <HorizontalScrollCard data={onAirShowData} heading="On The Air " />
    </div>
  )
}

export default Home
