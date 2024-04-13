import { ImSpinner11 } from 'react-icons/im'

type FeedbackProps = {
  className?: string
  showError?: boolean
  errorTitle?: string
}

const Feedback = ({ className, showError, errorTitle }: FeedbackProps) => {
  return (
    <div className="grid justify-center py-52">
      {showError ? (
        <p className="text-center text-red-700 text-3xl">
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
