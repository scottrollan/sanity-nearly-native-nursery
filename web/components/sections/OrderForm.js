import React from 'react'
import PropTypes from 'prop-types'
// import styles from './OrderForm.module.css'

function OrderForm (props) {
  const {heading, label} = props

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.heading}>{heading}</h2>
        {/* <iframe src={}>
            This browser does not support PDFs. Please download the PDF to view it: Download PDF
        </iframe> */}
      </section>
  
      <style jsx>{`
        ifram {
            width: 100%; 
            height: 100%;
        }
      `}
      </style>
    </div>
  )
}

OrderForm.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
}

export default OrderForm
