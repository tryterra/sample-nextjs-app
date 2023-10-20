'use client'
import { ConnectToTerraButton } from '@tryterra/terra-ui'
import axios from 'axios'

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-white">
      <ConnectToTerraButton onClick={async () => {
        const url = (await axios.get("http://localhost:3000/api/generateWidgetSession")).data.url 
        window.location = url
      }} />
    </div>
  )
}
