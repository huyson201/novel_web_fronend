import React, { useEffect } from 'react'
import { initFacebookSdk } from '@src/facebook'
export interface Props {
    dataHref?: string
}
const FBLikeShareButton = ({ dataHref }: Props) => {
    useEffect(() => {
        initFacebookSdk()
    }, [])
    return (

        <div className="fb-like"
            data-width={''}
            data-href={dataHref ? dataHref : 'https://developers.facebook.com/docs/plugins/'}
            data-layout="button_count"
            data-action="like"
            data-size="small"
            data-share="true"></div>

    )
}

export default FBLikeShareButton