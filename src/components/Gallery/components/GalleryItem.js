import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({
  id,
  source,
  thumbnail,
  caption,
  description,
  position,
  toggleLightbox,
  link,
}) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      toggleLightbox(position)
    },
    [position, toggleLightbox]
  )

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a className="image fit thumb" href={source} onClick={onClick}>
        <img src={thumbnail} alt="thumbnail" />
      </a>
      <h3>{caption}</h3>
      <p>{description}</p>
      <a href={link} style={{ color: 'black', fontSize: 13 }}>
        Link To Demo!
      </a>
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
}

export default GalleryItem
