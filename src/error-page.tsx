import { useRouteError, Link } from 'react-router-dom'
import Button from './components/ui/Button'

const ErrorPage = () => {
  // TODO: set the error type
  const error: unknown = useRouteError()
  console.error(error)

  return (
    <section className="flex justify-center items-center  h-screen  ">
      <div className="text-rose-500 text-center grid gap-10">
        <h1 className="text-8xl font-semibold">4🥶4</h1>
        <p className="text-5xl text-neutral-900">{`Sorry, movie not found.`}</p>
        <Link to="/">
          <Button>Go to Home</Button>
        </Link>
      </div>
    </section>
  )
}

export default ErrorPage
