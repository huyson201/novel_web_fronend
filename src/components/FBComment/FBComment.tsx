import React, { useEffect } from 'react'
import { initFacebookSdk } from '@src/facebook'
export interface Props {
    dataHref?: string,
    numPosts?: number,
    orderBy?: 'reverse_time' | 'time',
    lazy?: boolean,
    mobile?: boolean
}
const FBComment = ({ dataHref, numPosts, orderBy, lazy, mobile }: Props) => {
    useEffect(() => {
        initFacebookSdk()
    }, [])
    return (
        <>
            <div className="fb-comments fb-comment-embed"
                data-href={dataHref ? dataHref : 'https://developers.facebook.com/docs/plugins/comments#configurator'}
                data-width="100%"
                data-numposts={numPosts ? numPosts : 5}
                data-lazy={lazy}
                data-mobile={mobile}
                data-order-by={orderBy || 'reverse_time'}
                ng-attr-data-href={dataHref || ''}
            >

            </div>

        </>
    )
}

export default FBComment