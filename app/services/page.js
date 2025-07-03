import React from 'react'
import Avis from "../components/avis"
import Coaching from "../components/coaching"
import Formation from "../components/formation"



function page() {
  return (
    <div>
      <div className="">
        <Coaching/>
        <Formation/>
      </div>
    <Avis/>
    </div>
  )
}

export default page