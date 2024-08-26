import React, { useState } from "react";
import Services from "./Services";

function Home() {
const [opacity, setOpacity]= useState("0")
  window.addEventListener("load", ()=>{
    setOpacity("1")
  })
  return (
    <>
      <div
        id="hero"
        className="w-screen flex justify-center items-center bg-gray-200"
        style={{
          backgroundImage: `linear-gradient(transparent,rgba(0,0,0,0.8)),url('./electric-bg.avif')`,
          backdropFilter: "blur(2px)",
        }}
      >
        <div className="text-white font-bold max-w-[700px] text-center" style={{
          opacity:{opacity}
        }}>
          <h2 className="p-3 text-4xl min-w-[200px] ">
            Your trusted source for all your{" "}
            <span className="underline">electrical needs.</span>
          </h2>
          <h5 className="p-3 text-xl bg-gray-100/10 rounded-xl">
            We offer a wide range of services for residential and commercial
            clients
          </h5>
        </div>
      </div>
      <Services />
    </>
  );
}

export default Home;
