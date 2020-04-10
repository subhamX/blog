import React from "react"
import Footer from '../components/footer/footer';
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from '../components/header/header'
import Blog from '../components/blog/blog';
import { graphql } from 'gatsby';


const IndexPage = ({ data }) => {

  let blogData = data.allMarkdownRemark.edges.map((e, key) => (<Blog key={key} slug={e.node.fields.slug} title={e.node.frontmatter.title} date={e.node.frontmatter.date} excerpt={e.node.excerpt} thumb={e.node.frontmatter.thumb}></Blog>));
  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle="Subham Sahu"></Header>
      <div className='container'>
        {blogData}
      </div>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage;


export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        fields{
          slug
        }
        timeToRead
        excerpt
        frontmatter {
          title
          date
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`