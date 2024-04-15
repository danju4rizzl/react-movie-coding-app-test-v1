import SearchBox from '@/components/SearchBox'
import { Link } from 'react-router-dom'

import brandLogo from '@/assets/brand-logo.svg'

const Header = () => {
  return (
    <header className="fixed z-10 w-full py-5 px-10   md:py-5 md:px-10 bg-neutral-100 bg-opacity-40 backdrop-blur-lg backdrop-saturate-50 flex justify-center  gap-10 items-center">
      <Link to={'/'}>
        <img src={brandLogo} alt="Logo of IMDB" width={200} height={40} />
      </Link>
      <div className="flex flex-1">
        <SearchBox />
      </div>
    </header>
  )
}

export default Header
