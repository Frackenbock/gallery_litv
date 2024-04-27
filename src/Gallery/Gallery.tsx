import React,{useState} from "react";
import { Photo } from "./types";
import styles from './Gallery.module.scss';
import { MainPhoto } from "./MainPhoto/MainPhoto";
import { Navigation } from "./Navigation/Navigation";
import { Preview } from "./Preview/Preview";

interface GalleryProps{
    photos:Photo[],
} ;


export const Gallery: React.FC<GalleryProps> = ({photos,})=>{

    const [indexActivePhoto,setIndexActivePhoto]=useState(0);
    const currentPhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto-1];
    const nextPhoto = photos[indexActivePhoto+1];


    if(!photos){
        return null;
    }
    return(
        <div className={styles.divGallery}>
            <div className={styles.divGalleryContainer}>
                <MainPhoto
                    prevPhoto={prevPhoto} 
                    currentPhoto={currentPhoto} 
                    nextPhoto={nextPhoto} 
                    className={styles.divGalleryMainPhoto}
                />
                <Navigation
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    className={styles.divGalleryNavigation}
                    onPrevClick={()=>{
                        setIndexActivePhoto(indexActivePhoto - 1)
                    }}
                    onNextClick={()=>{
                        setIndexActivePhoto(indexActivePhoto + 1)
                    }}
                />
            </div>
            <Preview
                photos = {photos}
                className={styles.divGalleryPreview}
                activeIndexPhoto={indexActivePhoto}
            />
        </div>
    )
}