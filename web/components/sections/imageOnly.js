import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageOnly.module.css'
import client from '../../client'

const builder = imageUrlBuilder(client)

function ImageOnly (props) {
  const {image} = props

  // if (!image) {
  //   return null
  // }

  return (
    <div className={styles.root}>
        <img
          src={builder
            .image(image)
            .auto('format')
            .width(2000)
            .url()}
          className={styles.image}
          alt='missing image'
        />
    </div>
  )
}

ImageOnly.propTypes = {
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string
    })
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
}

export default ImageOnly
