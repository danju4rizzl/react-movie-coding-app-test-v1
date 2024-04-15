import { formatDate } from '../utils/formatDate'
import { Review } from '../utils/types'
import Avatar from './ui/Avatar'

const ReviewCard = ({ author_details, content, updated_at }: Review) => {
  return (
    <div className="bg-white  shadow rounded-lg pl-5 md:pr-10  md:py-10 flex items-start space-x-4">
      <Avatar placeholder={author_details.username[0]} />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-neutral-800 text-2xl">
              @{author_details.username}
            </p>
            <p className="text-sm text-neutral-500">{formatDate(updated_at)}</p>
          </div>
          <div className="flex items-center space-x-2 text-rose-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-6 h-6"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span className="font-semibold">{author_details.rating}</span>
          </div>
        </div>
        <p className="mt-2 text-neutral-700">{content}</p>
      </div>
    </div>
  )
}

export default ReviewCard
