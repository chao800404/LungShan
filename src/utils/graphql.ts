import { gql } from '@apollo/client'

export const caseQuery = gql`
  query NewQuery {
    menu(id: "相關案例", idType: NAME) {
      menuItems {
        nodes {
          label
          connectedNode {
            node {
              ... on LoancaseCategories {
                allLoancase {
                  nodes {
                    title
                    content
                    case_image {
                      caseimage {
                        altText
                        sourceUrl
                      }
                    }
                    author {
                      node {
                        name
                      }
                    }
                    date
                  }
                }
                slug
              }
            }
          }
        }
      }
    }
  }
`
