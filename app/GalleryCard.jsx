import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard = (props) => {
  return (
    <>
      <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="gallery-card3-image"
        />
      </div>
      <style jsx>
        {`
          .gallery-card3-gallery-card {
            width: 100%;
            height: 300px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card3-image {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 300px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
        `}
      </style>
    </>
  )
}

GalleryCard.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&w=1500',
}

GalleryCard.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard
