import React from 'react'
import Articles from "../components/articles"
import ActualitesPage from "../components/actualites"
import LivresRecommandes from "../components/recommendations"


function page() {
  return (
    <div>
      <Articles/>
      <ActualitesPage/>
      <LivresRecommandes/>
    </div>
  )
}

export default page