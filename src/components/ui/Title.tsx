type TitleProps = {
  children: React.ReactNode | string
  className?: string
}

const Title = ({ children, className }: TitleProps) => {
  return (
    <h2
      className={`text-gray-900 text-xl sm:text-3xl md:text-4xl font-semibold capitalize ${className}`}
    >
      <span className="border-l-8 border-rose-700 mr-2 "></span>
      {children}
    </h2>
  )
}

export default Title
