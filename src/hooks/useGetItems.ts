import { get } from 'lodash'
import { useMemo } from 'react'

/**
 * Get items by key
 * @param data
 * @param key
 * @param defaultValue
 * @returns
 */
const useGetItems = <TOutput>(data: any, key: string, defaultValue = []) => {
  return useMemo(() => {
    return get(data, key, defaultValue ?? []) as TOutput
  }, [data, key, defaultValue])
}

export default useGetItems
