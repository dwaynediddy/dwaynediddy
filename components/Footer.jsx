import styles from '../styles/footer.module.css'
import {  AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'
const Footer = () => {
  return (
      <div className={styles.footerContainer}>
        <div className="test">testing css</div>
        <div className="socials">
            <a target='_blank' href='https://www.linkedin.com/in/dwaynediddy/'  rel="noopener noreferrer">
                <AiFillLinkedin />
            </a>
            <a href='https://twitter.com/dwaynecantcode' target='_blank'  rel="noopener noreferrer">
                <AiFillTwitterSquare />
            </a>
            <a href='/https://github.com/dwaynediddy' target='_blank' rel="noopener noreferrer">
                <AiFillGithub />
            </a>
        </div>
      </div>
  )
}

export default Footer