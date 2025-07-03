import React from 'react'
import {Clients} from "./components/clients"
import Hero from "./components/hero"
import {Biographie} from "./components/biographie"
import Services1 from "./components/services1"
import Missions from "./components/missions"
import ActualitesPage from "./components/actualites"
import Stats from "./components/stats"




function page() {
  return (
    <div>
      <Hero/>
      <Services1/>
      <Missions/>
      <ActualitesPage/>
      <Stats/>
      <Clients/>
    </div>
  )
}

export default page