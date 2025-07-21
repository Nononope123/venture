import React from 'react'
import Avis from "../components/avis"
import Coaching from "../components/coaching"
import Formation from "../components/formation"
import Heroavis from "../components/hero-avis"



function page() {
  return (
    <div>
      <Heroavis/>
      <div className="">
        <Coaching/>
        <Formation/>
      </div>
    <Avis/>
    </div>
  )
}

export default page