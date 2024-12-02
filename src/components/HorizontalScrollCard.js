import React, { useRef } from "react"
import Card from "./Card"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

function HorizontalScrollCard({ data = [], heading }) {
  const containerRef = useRef()
  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white ">{heading}</h2>
      <div className="relative">
        <div ref={containerRef} className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10">
          {data.map((data, index) => {
            return <Card key={data.id + "heading" + index} data={data} index={index + 1} trending={true} />
          })}
        </div>
        <div className=" absolute top-0 flex justify-between w-full h-full items-center">
          <button className="bg-white p-1 text-black rounded-full -ml-2 z-10"><FaAngleLeft/></button>
          <button className="bg-white p-1 text-black rounded-full -ml-2 z-10"><FaAngleRight/></button>
        </div>
      </div>
    </div>
  )
}

export default HorizontalScrollCard
