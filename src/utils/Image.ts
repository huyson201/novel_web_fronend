import React from "react";

export function handleErrorImage(image: string) {
    return (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = image

    }
}

export const handleImgLoaded = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.nextElementSibling?.classList.add('hide')
}