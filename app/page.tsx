"use client"

// import { getArt } from "@/API/fetch";
import { ArtsCards } from "@/components/ArtsCards";
import { ArtContext } from "@/context/artContext";
import Image from "next/image";
import { useState } from "react";

export default async function Home() {

  // const data = await getArt('Noche Estrellada')
  // console.log(data)
const [data, setData] = useState([])

  return (
    <div>
      <ArtContext.Provider value={{data, setData}}>

      <ArtsCards/>
      </ArtContext.Provider>
    </div>
  );
}
