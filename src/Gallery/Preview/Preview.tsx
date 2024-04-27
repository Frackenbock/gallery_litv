import React from "react"
import { CommonClassProps, Photo } from "../types"
import styles from '../Preview/Preview.module.scss'

interface PreviewProps extends CommonClassProps{
    photos:Photo[];
    activeIndexPhoto:number;
}

export const Preview:React.FC<PreviewProps>=({photos,activeIndexPhoto,className})=>{
    return(
        <div  className={[className,styles.previewGallery].join(' ')}>
            <ul className={styles.previewGalleryTrack}>
                {
                    photos.map((photo)=>{
                        return(
                            <li key={photo.id} className={styles.previewGalleryPreview}>
                                <img 
                                    src={photo.src} 
                                    alt={photo.description}
                                    className={styles.previewGalleryImage}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            <div className={styles.previewGalleryCover}>
                {activeIndexPhoto+1}/{photos.length}
            </div>
        </div>
    )
}   