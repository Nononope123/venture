// components/carte.js
"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Corriger les icônes Leaflet par défaut
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
})

export default function Carte() { // Nom du composant conservé
  const coords = [0.4187369349760838, 9.450429174985079] // Libreville, Gabon

  return (
    <MapContainer center={coords} zoom={17} style={{ height: '500px', width: '100%' }} className="w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={coords}>
        <Popup>Ogooué Labs<br />Libreville, Gabon</Popup>
      </Marker>
    </MapContainer>
  )
}