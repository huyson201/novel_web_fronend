import React from "react";
import errorImgIcon from '@src/assets/images/loading-image-fail.png'

export function handleErrorImage(event: React.SyntheticEvent<HTMLImageElement, Event>) {
    event.currentTarget.src = errorImgIcon
}

export const handleImgLoaded = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.nextElementSibling?.classList.add('hide')
}