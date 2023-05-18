import { IArticle } from '@/types/Article'
import { useEffect, useState } from 'react'

const PAGE_SIZE = 8
const DELAY_MS = 0 // fake loading
export function useFakeLoadmore(articles: IArticle[]) {
    const [loadedArticles, setLoadedArticles] = useState<IArticle[]>([])
    const [isLoading, setIsLoading] = useState(false)
    // Only search in the loaded articles (not all articles) because there is no API for that
    const [searchQuery, setSearchQuery] = useState('') 

    useEffect(() => {
        loadMoreArticles()
    }, [])

    const loadMoreArticles = async () => {
        setIsLoading(true)

        // Simulate a delay to simulate a server response
        await new Promise(resolve => setTimeout(resolve, DELAY_MS))

        const startIndex = loadedArticles.length
        const endIndex = Math.min(startIndex + PAGE_SIZE, articles.length)
        const nextArticles = articles.slice(startIndex, endIndex)
        setLoadedArticles([...loadedArticles, ...nextArticles])
        setIsLoading(false)
    }

    return {
        loadedArticles,
        loadMoreArticles,
        isLoading,
        searchQuery,
        setSearchQuery,
    }

}