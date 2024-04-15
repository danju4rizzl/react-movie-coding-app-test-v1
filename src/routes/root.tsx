import Header from '@/components/ui/Header'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <main className="relative">
      <Header />
      <Outlet />
    </main>
  )
}

export default Root
