import { ImSpinner11 } from 'react-icons/im'

type FeedbackProps = {
  className?: string
  showError?: boolean
  errorTitle?: string
  errorClassName?: string
}

const Feedback = ({
  className,
  showError,
  errorTitle,
  errorClassName
}: FeedbackProps) => {
  return (
    <div className="py-5">
      {showError ? (
        <p
          className={`text-center text-neutral-400 text-3xl ${errorClassName}`}
        >
          {errorTitle
            ? errorTitle
            : 'Something went wrong, please try again later.'}
        </p>
      ) : (
        <ImSpinner11
          className={`animate-spin text-neutral-600 text-5xl ${className}`}
        />
      )}
    </div>
  )
}

export default Feedback
