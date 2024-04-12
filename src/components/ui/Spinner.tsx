import { ImSpinner11 } from 'react-icons/im'

interface SpinnerProps {
  className?: string
}

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <ImSpinner11
      className={`animate-spin text-neutral-600 text-5xl ${className}`}
    />
  )
}

export default Spinner
