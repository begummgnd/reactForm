import React from 'react'
import { Route, BrowserRouter ,Routes} from 'react-router-dom'
import Profile from '../components/Profile'

export default function Dashboard() {
  return (
    <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path='profile/:id' element={<Profile />} />
            </Routes>
          </BrowserRouter>
    </div >
  )
}

const Main = () => {
  return <h1>Anasayfa</h1>
}

