import { formatDate } from '@/utils/formatDate'
import { Review } from '@/utils/types'
import Avatar from '@/components/ui/Avatar'
import { BiHeart } from 'react-icons/bi'

const ReviewCard = ({ author_details, content, updated_at }: Review) => {
  return (
    <div className="grid sm:flex items-start gap-8 p-5 md:pl-5 md:pr-10 md:py-10 backdrop-blur-xl backdrop-saturate-50 bg-opacity-40 bg-neutral-600 shadow shadow-neutral-800 rounded-lg">
      <Avatar placeholder={author_details.username[0]} />
      <div className="flex-1">
        <div className="flex justify-between items-center text-neutral-100">
          <div>
            <p className="font-semibold text-2xl drop-shadow-2xl shadow-neutral-200 ">
              @{author_details.username}
            </p>
            <p className="text-sm text-neutral-300">{formatDate(updated_at)}</p>
          </div>
          {author_details.rating && (
            <div className="flex items-center space-x-2 text-rose-300">
              <BiHeart className="size-5" />
              <span className="font-semibold">{author_details.rating}</span>
            </div>
          )}
        </div>
        <p className="mt-2">{content}</p>
      </div>
    </div>
  )
}

export default ReviewCard
