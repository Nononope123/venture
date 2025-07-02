import React from 'react'
import {Clients} from "./components/clients"
import Hero from "./components/hero"
import {Biographie} from "./components/biographie"
import {ResumeServices} from "./components/resumeservices"




function page() {
  return (
    <div>
      <Hero/>
      <ResumeServices/>
      <Clients/>
    </div>
  )
}

export default page