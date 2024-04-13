import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from './ui/Button'
import useSearchMovie from '../hooks/useSearchMovie'
import MovieImage from './MovieImage'
import { BiSearch } from 'react-icons/bi'

interface SearchInput {
  search: string
}

const SearchBox = () => {
  const { register, handleSubmit, watch, reset } = useForm<SearchInput>({
    defaultValues: { search: '' }
  })

  const searchInput = watch('search')
  const canSearch = searchInput.length >= 2

  const { data: searchedMovies } = useSearchMovie(canSearch ? searchInput : '')

  const onSubmit: SubmitHandler<SearchInput> = (data: SearchInput) => {
    // Todo: handle submit events here
    console.log(data)
  }

  return (
    <div className="relative bg-neutral-100 rounded-md w-1/3">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex justify-between">
        <input
          type="search"
          placeholder="Search"
          className="p-3 bg-transparent border-0 outline-0 flex-1"
          {...register('search')}
        />

        <Button isSubmit>
          <BiSearch />
        </Button>
      </form>
      {canSearch && (
        <ul className="absolute grid gap-5  bg-neutral-100 w-full z-10 p-5 my-3 rounded-md">
          {/* // TODO 🔴 fix the hook to return type issues instead of using any */}
          {searchedMovies?.slice(0, 5).map((movie: any) => (
            <li
              key={movie.id}
              onClick={() => {
                // ! priority Fix- a temporary fix for redirecting to movie page from the movie page
                window.location.replace(
                  window.location.origin + `/movie/${movie.id}`
                )
                reset()
              }}
            >
              <Link
                to={`/movie/${movie.id}`}
                className="flex gap-5 hover:bg-neutral-200 rounded-lg p-3 "
              >
                <MovieImage
                  imgPath={movie.poster_path}
                  imgTitle={movie.title}
                />
                <h5 className="text-xl font-bold">{movie.title}</h5>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBox
