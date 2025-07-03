"use client"

import React from 'react'
import Biographie from "../components/biographie"
import Parcours from "../components/parcours"
import Missions from "../components/missions"
import Stats from "../components/stats"
import PhotoGallery from "../components/galerie"



function page() {
  return (
    <div>
    <Biographie/>
    <Parcours/>
    <Missions/>
    <Stats/>
    <PhotoGallery/>

    </div>
  )
}

export default page