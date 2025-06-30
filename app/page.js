import React from 'react'
import {Clients} from "./components/clients"
import Hero from "./components/hero"
import {Biographie} from "./components/biographie"
import Avis from "./components/avis"
import Message from "./components/message"
import Services1 from "./components/services1"
import Parcours from "./components/parcours"
import Coaching from "./components/coaching"
import Formation from "./components/formation"
import Newsletter from "./components/newsletter"



function page() {
  return (
    <div>
      <Hero/>
      <Services1/>
      <Clients/>
      <Avis/>
      <Message/>
      <Parcours/>
      <Coaching/>
      <Formation/>
      <Newsletter/>
      <Biographie/>
    </div>
  )
}

export default page