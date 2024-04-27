import React from "react";
import { CommonClassProps } from "../types";
import styles from '../Navigation/Navigation.module.scss'

interface NavigationProps extends CommonClassProps{
    disabledPrev:boolean;
    disabledNext:boolean;
    onPrevClick:() => void;
    onNextClick:() => void;
};
export const Navigation:React.FC<NavigationProps>=({disabledPrev,disabledNext,onPrevClick,onNextClick,className})=>{
    return(
        <div className={[className,styles.navigation].join(' ')}>
            <button
                disabled={disabledPrev}
                onClick={onPrevClick}
                className={[styles.navigationBtn,styles.navigationBtnLeft].join(' ')}
            >

            </button>

            <button
                disabled={disabledNext}
                onClick={onNextClick}
                className={[styles.navigationBtn,styles.navigationBtnRight].join(' ')}
            >

            </button>
        </div>
    )
}