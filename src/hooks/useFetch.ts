import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AxiosResponse } from "axios";

export type CallBackType<T> = Promise<AxiosResponse<T, any>> | Promise<T>

export const useFetch = <T>(callApi: () => CallBackType<T>, dependency?: React.DependencyList) => {
    const [data, setData] = useState<T>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                let resData = await callApi()
                setData(resData)
            } catch (error: any) {
                setError(error.response?.data?.message ?? error.message)
            } finally {
                setIsLoading(false)
            }

        }
        fetchData()
    }, dependency)
    return { data, isLoading, error }
}