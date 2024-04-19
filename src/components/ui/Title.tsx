type TitleProps = {
  children: React.ReactNode | string
  className?: string
  subtitle?: string
}

const Title = ({ children, className, subtitle }: TitleProps) => {
  return (
    <h2
      className={` text-gray-900 text-xl sm:text-3xl md:text-4xl font-semibold capitalize before:w-2 before:h-full before:bg-rose-700 before:block before:absolute relative  ${className}`}
    >
      {/* <span className="border-l-8 border-rose-700 mr-2"></span> */}
      <div className="pl-5">{children}</div>
      {subtitle && <span className="text-sm block ml-5 mt-2">{subtitle}</span>}
    </h2>
  )
}

export default Title
