import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  isSubmit?: boolean
}

const Button = ({ children, className, isSubmit }: ButtonProps) => {
  return (
    <button
      className={`bg-rose-500 text-white px-4 py-2 rounded-md ${className}`}
      type={isSubmit ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}

export default Button
