import { Route, Routes } from 'react-router-dom'
import { HomeFeature } from './home-feature'

export default function HomeRoutes() {
  return (
    <Routes>
      <Route index element={<HomeFeature />} />
    </Routes>
  )
}

