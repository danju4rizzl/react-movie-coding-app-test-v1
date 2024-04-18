import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Movie } from '@/utils/types'
import { searchMovies } from '@/utils/searchMovies'
import MovieImage from '@/components/MovieImage'

interface SearchInput {
  search: string
}

const SearchBox = () => {
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>()

  const { register, handleSubmit, watch, reset } = useForm<SearchInput>({
    defaultValues: { search: '' }
  })

  const navigate = useNavigate()

  const searchInput = watch('search')
  const canSearch = searchInput.length >= 2

  const handleSearch = async () => {
    // This function handles and gets the search results here
    if (!canSearch) return
    const searchResults = await searchMovies(searchInput)
    setSearchedMovies(searchResults)
  }

  const onSubmit: SubmitHandler<SearchInput> = (data: SearchInput) => {
    // Todo: handle submit events here
    console.log(data)
    handleSearch()
  }

  useEffect(() => {
    // Handles and gets the search here
    handleSearch()
  }, [canSearch, searchInput])

  return (
    <div className="relative bg-neutral-200 rounded-md mx-auto w-full max-w-lg">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex justify-between">
        <input
          type="search"
          placeholder="Search"
          className="p-3 bg-transparent border-0 outline-0 flex-1"
          {...register('search')}
        />
      </form>
      {canSearch && (
        <ul className="absolute grid gap-5  bg-neutral-100 w-full z-10 p-3 my-3 rounded-md">
          {searchedMovies?.slice(0, 3).map(({ id, poster_path, title }) => (
            <li
              key={id}
              onClick={() => {
                navigate(`/movie/${id}`)
                reset()
              }}
            >
              <Link
                to={`/movie/${id}`}
                className="flex gap-5 hover:bg-neutral-200 rounded-lg p-3 "
              >
                <MovieImage imgPath={poster_path} imgTitle={title} />
                <h5 className="text-xl font-bold">{title}</h5>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBox
