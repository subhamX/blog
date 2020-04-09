import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import SEO from '../components/seo';

export default ({ data }) => {
  let post = data.markdownRemark;
  let thumb = post.frontmatter.thumb.childImageSharp.fluid

  return (
    <Layout>
      <div>
        <SEO title="Home" />
        <Header siteTitle="Subham Sahu"></Header>
        <h1 style={{ marginTop: "20px", color: "yellow", fontWeight: "lighter" }}>{post.frontmatter.title}</h1>
        <Img fluid={thumb} style={{ width: "80%", margin: "40px auto", height: "500px" }} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} className='blog-content' />
      </div>
      <Footer></Footer>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumb {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`