import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){return(<div className="demoMenusContent">
      <h1>Demos Menu</h1>
      <ul>
        <li>
          <Link to="/objectManip">3D Object Manipulation</Link>
        </li>
        <li>
          <Link to="/navigation">Hand-based Navigation</Link>
        </li>
        <li>
          <Link to="/vto">Wrist and Ring VTO</Link>
        </li>
        <li>
          <Link to="/barefoot-vto">Barefoot VTO</Link>
        </li>
      </ul>
    </div>
  )
}