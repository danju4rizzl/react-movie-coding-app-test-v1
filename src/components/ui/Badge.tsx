type BadgeProps = {
  title: string
  className?: string
}

const Badge = ({ title, className }: BadgeProps) => {
  return (
    <small
      className={`py-1.5 px-2 rounded-md border border-current text-neutral-100 font-bold ${className} `}
    >
      {title}
    </small>
  )
}

export default Badge
