import React,{useEffect, useRef,useMemo} from "react"
import { CommonClassProps, Photo } from "../types"
import styles from '../Preview/Preview.module.scss'

interface PreviewProps extends CommonClassProps{
    photos:Photo[];
    activeIndexPhoto:number;
}
export const Preview:React.FC<PreviewProps>=({photos,activeIndexPhoto,className})=>{

    if(photos.length===0){
        return null;
    }

    const previewCont = useRef<HTMLUListElement>(null)

    useEffect(()=>{
        if(!previewCont.current){
            return
        }
        previewCont.current.style.transform = `translate3d(-${activeIndexPhoto * 164}px, 0, 0 )`
    },[activeIndexPhoto])

    return(
        <div  className={[className,styles.previewGallery].join(' ')}>
                {useMemo(()=>
                    (
                        <ul ref={previewCont} className={styles.previewGalleryTrack}>
                            {
                                photos.map((photo)=>{
                                    return(
                                        <li key={photo.id} className={styles.previewGalleryPreview} >
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
                     )
                 ,[])}
                <div className={styles.previewGalleryCover}>
                    {activeIndexPhoto+1}/{photos.length}
                </div>
        </div>
    )
}   