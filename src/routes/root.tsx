import SearchBox from '../components/SearchBox'
import { Link, Outlet } from 'react-router-dom'

import brandLogo from '@/assets/brand-logo.svg'

function Root() {
  return (
    <main>
      <header className="flex items-center md:py-5 md:px-10">
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
