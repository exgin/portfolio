import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES, COURSE_WORK } from '../constants/defaultImages'

const Gallery = ({ images = DEFAULT_IMAGES, courseWork = COURSE_WORK }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(
    (selectedIndex) => {
      setLightboxIsOpen(!lightboxIsOpen)
      setSelectedIndex(selectedIndex)
    },
    [lightboxIsOpen]
  )

  return (
    <div>
      {images && (
        <div className="row">
          {images.map((obj, i) => {
            return (
              <GalleryItem
                id={obj.id}
                source={obj.source}
                thumbnail={obj.thumbnail}
                caption={obj.caption}
                description={obj.description}
                position={obj.position}
                toggleLightbox={obj.toggleLightbox}
                position={i}
                toggleLightbox={toggleLightbox}
              />
            )
          })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={images} />
          </Modal>
        )}
      </ModalGateway>

      <h3>Course Work</h3>

      {courseWork && (
        <div className="row">
          {courseWork.map((obj, i) => {
            return (
              <GalleryItem
                id={obj.id}
                source={obj.source}
                thumbnail={obj.thumbnail}
                caption={obj.caption}
                description={obj.description}
                position={obj.position}
                toggleLightbox={obj.toggleLightbox}
                position={i}
                toggleLightbox={toggleLightbox}
              />
            )
          })}
        </div>
      )}

      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={courseWork} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
  courseWork: PropTypes.array,
}

export default Gallery
