import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import {
  Row,
  StyledDate,
  StyledHeading,
  StyledIntro,
  StyledLink,
  StyledTags,
} from "../components/styles"

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <Layout>
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>
          <b>Joy World</b>
        </h1>
        <div>
          {edges.map(({ node }) => (
            <div key={node.id}>
              <StyledLink to={node.fields.slug}>
                <StyledHeading>{node.frontmatter.title}</StyledHeading>
                <StyledDate>Published on: {node.frontmatter.date}</StyledDate>
                <Row>
                  {node.frontmatter.tags.split(",").map(tag => (
                    <StyledTags key={tag}>{tag}</StyledTags>
                  ))}
                </Row>
                <StyledIntro>{node.frontmatter.intro}</StyledIntro>
              </StyledLink>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            tags
            intro
          }
          html
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`
