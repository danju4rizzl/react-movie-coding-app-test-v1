const randomColorPicker = (): string => {
  const colors = [
    'bg-blue-300',
    'bg-green-300',
    'bg-yellow-300',
    'bg-red-300',
    'bg-purple-300',
    'bg-pink-300',
    'bg-indigo-300',
    'bg-teal-300',
    'bg-orange-300',
    'bg-gray-300'
  ]

  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

type AvatarProps = {
  placeholder: string
}

const Avatar = ({ placeholder }: AvatarProps) => {
  return (
    <span
      className={`relative flex items-center justify-center h-12 w-12 shrink-0 overflow-hidden rounded-full  uppercase font-semibold text-xl pl-1 pb-1.5 
      ${randomColorPicker()}
      `}
    >
      {placeholder}
    </span>
  )
}

export default Avatar
