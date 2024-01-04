import { useEffect, useState } from 'react'

const useGetWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize, false)
  }, [])

  return width
}

export default useGetWidth
