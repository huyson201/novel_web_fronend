import Swiper from "swiper"

export const bulletClass: Array<string> = ['active-prev', 'active-prev-prev', 'active-next', 'active-next-next']
const removeBulletClass = (el: HTMLElement) => {
    bulletClass.forEach(value => {
        if (el.classList.contains(value)) {
            el.classList.remove(value)
        }
    })
}

const swiperOnChangePagination = (swiper: Swiper, pagination: HTMLElement) => {
    const activeEl: HTMLElement | null = pagination.querySelector('.swiper-pagination-bullet-active')
    pagination.childNodes.forEach(el => {
        let htmlEl = (el as HTMLElement)
        removeBulletClass(htmlEl)

    })
    if (activeEl?.previousElementSibling) {
        let el = activeEl.previousElementSibling
        el.classList.add('active-prev')
        if (el.previousElementSibling) {
            el.previousElementSibling.classList.add('active-prev-prev')
        }
    }
    if (activeEl?.nextElementSibling) {
        let el = activeEl.nextElementSibling
        el.classList.add('active-next')
        if (el.nextElementSibling) {
            el.nextElementSibling.classList.add('active-next-next')
        }
    }


    if (activeEl) {
        const leftSpace = 16
        const defaultSpace = 32
        let index = Array.from(pagination.childNodes).indexOf(activeEl)
        let currentSpace = defaultSpace - (index * leftSpace)

        pagination.childNodes.forEach(value => {
            let htmlEl = (value as HTMLElement)
            if (htmlEl) {
                htmlEl.style.left = `${currentSpace}px`
            }
        })
    }

}

export default swiperOnChangePagination