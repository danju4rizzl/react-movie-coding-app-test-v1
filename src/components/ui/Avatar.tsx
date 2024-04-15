import { getRandomColor } from '@/utils/getRandomColor'

type AvatarProps = {
  placeholder: string
}

const Avatar = ({ placeholder }: AvatarProps) => {
  return (
    <span
      className={`relative flex items-center justify-center h-12 w-12 shrink-0 overflow-hidden rounded-full  uppercase font-semibold text-xl pl-1 pb-1.5 
      ${getRandomColor()}
      `}
    >
      {placeholder}
    </span>
  )
}

export default Avatar
