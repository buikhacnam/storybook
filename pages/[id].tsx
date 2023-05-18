/* eslint-disable @next/next/no-img-element */
import { GET_ARTICLE } from '../graphQL/queries'
import graphQLClient from '../graphQL/graphQLClient'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IArticle } from '../types/Article'
import { beautifyDate } from '@/utils/beautifyDate'
import Head from 'next/head'

export const getStaticProps: GetStaticProps = async context => {
    const data: { article: IArticle } = await graphQLClient.request(
        GET_ARTICLE,
        { articleId: context.params?.id }
    )

    return {
        props: {
            // I NOTICED THE DATA IS NULL, SO I ADDED A DEFAULT VALUE
            article: data.article || {
                id: '1',
                title: 'Morbi non lectus.',
                author: 'Amii Hammarberg',
                image: 'http://dummyimage.com/1920x1080.png/5fa2dd/ffffff',
                date: '2022-08-03T08:32:53Z',
                content:
                    'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
            }, 
        },
    }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking', //indicates the type of fallback
    }
}

export default function Article({ article }: { article: IArticle }) {
    return (
        <>
            <Head>
                <title>{article.title}</title>
                <meta name="description" content={article.content} />
            </Head>
            <div>
                <h2>{article.title}</h2>
                <span>{article.author}</span>{' '}
                <span>
                    <b>.</b> {beautifyDate(article.date)}
                </span>
                <img
                    src={article.image}
                    alt={article.title}
                    width={'100%'}
                    height={'auto'}
                    loading="lazy"
                    style={{ marginTop: '2rem' }}
                />
                <p>{article.content}</p>
            </div>
        </>
    )
}
