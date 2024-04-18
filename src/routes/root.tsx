import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'

function Root() {
  return (
    <main className="relative">
      <Header />
      <Outlet />
    </main>
  )
}

export default Root
