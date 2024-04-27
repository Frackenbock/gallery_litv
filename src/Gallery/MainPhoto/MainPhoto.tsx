import React from "react"
import { CommonClassProps, Photo } from "../types"
import styles from '../MainPhoto/MainPhoto.module.scss'

interface MainPhotoProps extends CommonClassProps{
    prevPhoto?:Photo;
    currentPhoto:Photo;
    nextPhoto?:Photo;

}
export const MainPhoto:React.FC<MainPhotoProps>=({prevPhoto,currentPhoto,nextPhoto,className})=>{
    return(
        <div className={[styles.mainPhoto,className].join(' ')}>
            {prevPhoto && (
                 <img 
                 src={prevPhoto.src} 
                 alt={prevPhoto.description} 
                 className={styles.mainPhotoImagePrev}
             />
            )}
            <img 
                src={currentPhoto.src} 
                alt={currentPhoto.description} 
                className={styles.mainPhotoImageMain}
            />
            {nextPhoto && (
                 <img 
                 src={nextPhoto.src} 
                 alt={nextPhoto.description} 
                 className={styles.mainPhotoImageNext}
             />
            )}
        </div>
    )
}