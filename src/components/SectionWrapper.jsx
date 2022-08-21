import styles from "../styles/Global"
import { expo } from '../assets'
import Button from './Button'

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div
      className={`
      min-h-screen 
      ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner} 
      `}
    >
      <div className={`
      flex items-center 
      ${reverse ? styles.boxReverseClass : styles.boxClass} 
      w-11/12 sm:w-full minmd:w-3/4
      `}>
        <div className={`${styles.descDiv} fadeLeft`}>
          <h1 className={`
          ${styles.h1Text} 
          ${reverse ? styles.blackText : styles.whiteText} 
          `}>
            {title}
          </h1>
          <p
            className={`
          ${styles.descriptionText} 
          ${reverse ? 'fadeRightMini' : 'fadeLeftMini'} 
          ${reverse ? styles.textRight : styles.textLeft} 
          ${reverse ? styles.blackText : styles.whiteText}
          `}
          >{description}</p>
          {showBtn && (
            <Button
              assetUrl={expo}
              link="https://expo.dev/@ahmedwagdy/nft-marketplace?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>
        <div
          className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}
        >
          <img
            src={mockupImg}
            alt={title}
            className={`
            ${styles.sectionImg} 
            ${reverse ? 'fadeLeftMini' : 'fadeRightMini'}
            `}
          />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper