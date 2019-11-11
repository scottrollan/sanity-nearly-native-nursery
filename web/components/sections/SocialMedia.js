import React from 'react'
import PropTypes from 'prop-types'
import styles from './SocialMedia.module.css'
// import Twitter from 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062012/twitter-bird-white-on-blue.png?itok=XLNMKkJn'
// import Instagram from 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052016/untitled-1_201.png?itok=xztgzGA4'
// import Facebook from 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042017/untitled-1_145.png?itok=UOdjYB6-'

function SocialMedia (props) {
  const {heading, label, text} = props

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.heading}>{heading}</h2>
        <a href="https://www.facebook.com/NearlyNativeNursery/" target="blank">
            <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042017/untitled-1_145.png?itok=UOdjYB6-" 
            alt="facebook" 
            style={{ float: 'left' }}>
            </img>
        </a>
        <a href="https://www.instagram.com/nearlynativenursery/" target="blank">
            <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052016/untitled-1_201.png?itok=xztgzGA4" 
            alt="instagram" 
            style={{ float: 'left' }}>
            </img>
        </a>
        <a href="https://twitter.com/NNativeNursery" target="blank">
            <img 
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062012/twitter-bird-white-on-blue.png?itok=XLNMKkJn" 
            alt="twitter">
            </img>
        </a>
      </section>
  
      <style jsx>{`
        img {
            width: 23.33%; 
            margin: 0 5%;
        }
      `}
      </style>
    </div>
  )
}

SocialMedia.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
}

export default SocialMedia
