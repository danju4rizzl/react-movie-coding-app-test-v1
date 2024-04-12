import { ReactNode, FC } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
}

const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`bg-rose-500 text-white px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
