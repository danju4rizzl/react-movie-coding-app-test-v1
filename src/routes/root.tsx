import SearchBox from '../components/SearchBox'
import { Link, Outlet } from 'react-router-dom'

import brandLogo from '@/assets/brand-logo.svg'

function Root() {
  return (
    <main className="relative">
      <header className="fixed z-10  w-full  md:py-5 md:px-10 bg-neutral-100 bg-opacity-40 backdrop-blur-lg backdrop-saturate-150 flex items-center">
        <Link to={'/'}>
          <img src={brandLogo} alt="Logo of IMDB" width={200} height={40} />
        </Link>
        <div className="flex flex-1 justify-center">
          <SearchBox />
        </div>
      </header>
      <Outlet />
    </main>
  )
}

export default Root
