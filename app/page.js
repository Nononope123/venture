import React from 'react'
import {Clients} from "./components/clients"
import {ResumeServices} from "./components/resumeservices"
import {Hero} from "./components/hero"
import Valeurs from "./components/valeurs"
import Map from "./components/carte"
import ContactForm from "./components/formulaire"
import Commentaires from "./components/contact"





function page() {
  return (
    <div>
      <Clients/>
      <ResumeServices/>
      <Hero/>
      <Valeurs/>
      <Map/>
      <ContactForm/>
      <Commentaires/>
    </div>
  )
}

export default page