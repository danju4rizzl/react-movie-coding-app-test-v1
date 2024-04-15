import { CiImageOff } from 'react-icons/ci'

import { TMDB_IMAGE_BASE, TMDB_IMAGE_SIZE } from '@/utils/constants'

type MovieImageProps = {
  imgPath: string
  imgTitle: string
  imgSize?: string
}

const MovieImage = ({
  imgTitle,
  imgPath,
  imgSize = TMDB_IMAGE_SIZE.sm //setting a default value for images
}: MovieImageProps) => {
  return (
    <>
      {!imgPath ? (
        <CiImageOff className="text-8xl" />
      ) : (
        <img
          src={`${TMDB_IMAGE_BASE}/${imgSize}/${imgPath}`}
          alt={`Image of ${imgTitle}`}
          className="rounded-lg"
        />
      )}
    </>
  )
}

export default MovieImage
