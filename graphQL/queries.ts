import { gql } from 'graphql-request'

// GET LIST OF ARTICLES
export const GET_ARTICLES = gql`
    query Article {
        articles {
            author
            date
            id
            image
            title
        }
    }
`

// GET SINGLE ARTICLE BY ID
export const GET_ARTICLE = gql`
    query Article($articleId: ID!) {
        article(id: $articleId) {
            id
            author
            date
            image
            title
            content
        }
    }
`
