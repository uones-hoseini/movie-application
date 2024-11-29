import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";


export const navigation = [
  {
    lable: "TV Shows",
    href: "tv",
    icon:<PiTelevisionFill />
  },
  {
    lable: "Movies",
    href: "movie",
    icon:<BiSolidMoviePlay />
  },
]
export const mobileNavigation=[

{
lable:"Home",
href:"/",
icon:<MdHomeFilled />
},
  ...navigation
]
