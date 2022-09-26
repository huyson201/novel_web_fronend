import { useState, useEffect } from 'react';


const initialStatValue = <T>(key: string, stateValue?: T | (() => T | undefined)) => {
    let data = localStorage.getItem(key)
    if (data) {
        return (JSON.parse(data) as T) ?? stateValue
    }

    if (stateValue) return stateValue
    if (typeof stateValue == 'function') return stateValue()

}
type setValue<T> = React.Dispatch<T>

export const useLocalStorage = <P>(key: string, initValue?: P | (() => P | undefined)): [P | undefined, setValue<P>] => {
    const [value, setValue] = useState<P | undefined>(initialStatValue<P>(key, initValue))
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

