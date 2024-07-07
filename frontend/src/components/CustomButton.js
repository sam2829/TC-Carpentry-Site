import React from 'react'
import Button from 'react-bootstrap/Button';
import styles from '../styles/CustomButtons.module.css'

const CustomButton = ({title}) => {
  return (
    <>
      <Button className={styles.Button}>{title}</Button>
    </>
  )
}

export default CustomButton
