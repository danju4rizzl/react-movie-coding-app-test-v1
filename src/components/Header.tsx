import SearchBox from '@/components/SearchBox'
import { Link } from 'react-router-dom'

import brandLogo from '@/assets/brand-logo.svg'
import { MdMenu, MdMenuOpen } from 'react-icons/md'
import { useState } from 'react'
import useIsMobile from '@/hooks/useIsMobile'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const isMobile = useIsMobile()

  const handleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <header className="flex justify-between items-center gap-10 fixed z-10 w-full py-5 px-10 md:py-5 md:px-32 bg-opacity-40 backdrop-blur-xl backdrop-saturate-50">
      {/* Switch between logo and searchbox */}
      {isMobile && toggleMenu ? (
        <div className="flex-1">
          <SearchBox />
        </div>
      ) : (
        <Link to={'/'}>
          <img src={brandLogo} alt="Logo of IMDB" width={200} height={40} />
        </Link>
      )}

      {/* Switch between toggler and searchbox */}
      {isMobile ? (
        <div className=" bg-rose-500 p-1.5 rounded-full">
          {!toggleMenu ? (
            <MdMenu className="text-white text-2xl" onClick={handleMenu} />
          ) : (
            <MdMenuOpen className="text-white text-2xl" onClick={handleMenu} />
          )}
        </div>
      ) : (
        <div className=" flex-1">
          <SearchBox />
        </div>
      )}
    </header>
  )
}

export default Header
