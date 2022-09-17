import moment from 'moment'

export * from './constants'
export * from './cookie'
export const getTimeToNow = (time: string) => {
    let startTime = moment(time)
    let duration = moment.duration(moment().diff(startTime))
    if (Math.round(duration.asHours()) > 0 && Math.round(duration.asHours()) < 24) return Math.round(duration.asWeeks()) + ' giờ trước.'
    return Math.round(duration.days()) + ' ngày trước.'

}