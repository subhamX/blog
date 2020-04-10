import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import SEO from '../components/seo';
// require('');

export default ({ data }) => {
  let post = data.markdownRemark;
  let thumb = post.frontmatter.thumb.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle="Subham Sahu"></Header>
      <div className='container'>
        <div className='blog-blogtitle'>{post.frontmatter.title}</div>
        <Img fluid={thumb} style={{ width: "90%", margin: "40px auto", height: "400px" }} />
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