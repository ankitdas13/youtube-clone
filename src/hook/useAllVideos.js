import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constant"
import { useSelector } from "react-redux"


function useAllVideos(pageNum) {

  const maxResult = "12"
  const categoryId = useSelector(store => store.sidebarCategory.category)
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState({})
  const [hasNextPage, setHasNextPage] = useState(false)
  const [hasNextPageToken, setHasNextPageToken] = useState(null)
  const [category, setCategory] = useState("17")

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    setError({})

    const controller = new AbortController()
    const { signal } = controller
    console.log(pageNum)
    let url = YOUTUBE_API + maxResult + "&videoCategoryId=" + categoryId
    url = (pageNum && pageNum.length > 3) ? url + "&pageToken=" + pageNum : url

    fetch(url, { signal })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)

        if (data.hasOwnProperty("items")) {
          const { items } = data
          if (category === categoryId) {
            setResult(prev => [...prev, ...items])
          } else {
            setCategory(categoryId)
            setResult(items)
          }
          
          setHasNextPageToken(data?.nextPageToken ?? null)
          setHasNextPage(Boolean(data?.nextPageToken ?? false))

        } else {
          setIsLoading(true)
        }
      })
      .catch(err => {
        setIsLoading(false)
        if (signal.aborted) return
        setIsError(true)
        setError({ message: err.message })
      })

    return () => controller.abort()

  }, [pageNum, categoryId])

  return { result, isLoading, isError, error, hasNextPageToken, hasNextPage }
}

export default useAllVideos