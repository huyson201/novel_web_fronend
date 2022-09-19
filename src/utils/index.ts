import moment from 'moment'

export * from './constants'
export * from './cookie'
export const getTimeToNow = (time: string) => {
    let startTime = moment(time)
    let duration = moment.duration(moment().diff(startTime))
    if (Math.round(duration.asHours()) > 0 && Math.round(duration.asHours()) < 24) return Math.round(duration.asWeeks()) + ' giờ trước.'
    return Math.round(duration.days()) + ' ngày trước.'

}

export const removeHTML = (data: any) => {
    let divTag = document.createElement('div')
    divTag.innerHTML = data
    return divTag.textContent
}

export const getEllipsisText = (text: string | null, numberEnd = 80) => {
    if (text === null) return
    if (text.length === numberEnd) return text

    if (text.length < numberEnd) {
        return `${text}${' '.repeat(numberEnd - text.length)}`
    }

    return `${text.slice(0, numberEnd)}...`
}
