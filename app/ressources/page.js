import React from 'react'
import Articles from "../components/articles"
import ActualitesPage from "../components/actualites"
import LivresRecommandes from "../components/recommendations"
import Heroressources from "../components/hero-ressource"

function page() {
  return (
    <div>
      <Heroressources/>
      <Articles/>
      <ActualitesPage/>
      <LivresRecommandes/>
    </div>
  )
}

export default page