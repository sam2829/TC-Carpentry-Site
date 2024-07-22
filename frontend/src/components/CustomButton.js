import React from 'react'
import Button from 'react-bootstrap/Button';
import styles from '../styles/CustomButtons.module.css'

const CustomButton = ({title, formButton}) => {
  return (
    <>
      <Button className={`${styles.Button} ${formButton ? styles.FormButton : ''}`}>{title}</Button>
    </>
  )
}

export default CustomButton
