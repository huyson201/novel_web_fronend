
import { BooksProps } from '@src/pages/Books/Books';
import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CallBackType, useFetch } from './useFetch';

interface SelectType<T> {
  fetchData: (page: number) => CallBackType<T>,
  title: string
}


/**
 * HOC that adds an `isVisible` prop that stops a component from rendering if 
 * `isVisible===false`
 * @param WrappedComponent component to be selectively hidden
 * @returns null if `isVisible` is false
 */
export function withBooks<P extends BooksProps, T>(WrappedComponent: React.ComponentType<P>, select: SelectType<T>) {
  const withData = (props: P) => {
    const [searchParams, setSearchPrams] = useSearchParams()
    const currentPage = useMemo(() => {
      return +(searchParams.get('page') ?? 1)
    }, [searchParams])
    const { data, isLoading, error } = useFetch<T>(async () => select.fetchData(currentPage), [currentPage])
    return (<WrappedComponent data={data} title={select.title}  {...(props as P)} />)
  }

  return withData;
}

