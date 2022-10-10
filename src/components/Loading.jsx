import React from "react"

const Loading = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className=" flex animate-bounce items-center justify-center space-x-4">
        <div className="h-10 w-10  rounded-full bg-[#845EC2]"></div>
        <div className="h-10 w-10  rounded-full bg-[#C493FF]"></div>
        <div className="h-10 w-10  rounded-full bg-[#FEFEDF]"></div>
      </div>
    </section>
  )
}

export default Loading
