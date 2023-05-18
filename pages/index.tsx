import { GET_ARTICLES } from '../graphQL/queries'
import graphQLClient from '../graphQL/graphQLClient'
import { GetStaticProps } from 'next'
import { IArticle } from '../types/Article'
import { Card } from '@/stories/Card'
import Input from '@/stories/Input'
import { beautifyDate } from '@/utils/beautifyDate'
import { Button } from '@/stories/Button'
import Head from 'next/head'
import { useFakeLoadmore } from '@/hooks/useFakeLoadMore'

export const getStaticProps: GetStaticProps = async context => {
    const data: { articles: IArticle[] } = await graphQLClient.request(
        GET_ARTICLES
    )
    return {
        props: {
            articles: data.articles,
        },
    }
}

export default function Home({ articles }: { articles: IArticle[] }) {
    const {
        loadedArticles,
        loadMoreArticles,
        isLoading,
        searchQuery,
        setSearchQuery,
    } = useFakeLoadmore(articles)

    if (loadedArticles?.length === 0) return <div>No articles found</div>

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content={'next.js articles'} />
            </Head>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '2rem',
                }}
            >
                <Input
                    placeholder="Search..."
                    type="text"
                    onChange={event => setSearchQuery(event.target.value)}
                    width={500}
                    height={30}
                />
            </div>

            <div className="article-container">
                {loadedArticles
                    .filter(a =>
                        a.title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    )
                    .map(article => (
                        <Card
                            id={article.id}
                            title={article.title}
                            subTitle={article.content || ''}
                            imageSrc={article.image}
                            key={article.id}
                            author={article.author}
                            date={beautifyDate(article.date)}
                        />
                    ))}
            </div>
            {isLoading && <div className="container-center">Loading...</div>}
            {loadedArticles?.length > 0 && (
                <div
                    className="container-center"
                    style={{ marginBottom: '2rem' }}
                >
                    <Button
                        onClick={() => {
                            loadMoreArticles()
                        }}
                        label="Load more"
                    />
                </div>
            )}
        </>
    )
}
