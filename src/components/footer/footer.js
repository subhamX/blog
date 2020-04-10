import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
    let res = useStaticQuery(graphql`
    query {
        linkedIn: file(relativePath: {eq: "linkedin-logo.png"}){
            childImageSharp {
              fixed(width: 35, height: 35){
                ...GatsbyImageSharpFixed
              }
            }
          }
          github: file(relativePath: {eq: "github-logo.png"}){
            childImageSharp {
                fixed(width: 35, height: 35){
                    ...GatsbyImageSharpFixed
                  }
            }
          }
          resume: file(relativePath: {eq: "resume.png"}){
            childImageSharp {
                fixed(width: 35, height: 35){
                    ...GatsbyImageSharpFixed
                  }
            }
          }
    }
    `);
    return (<footer className='footer-wrapper'>
        <a href="https://bit.ly/subham_sahu" target="_blank" rel="noopener norefferer" className='footer-links'><Img fixed={res.resume.childImageSharp.fixed} style={{ marginRight: "20px" }}></Img></a>
        <a href="https://github.com/subhamX" target="_blank" rel="noopener norefferer" className='footer-links'><Img fixed={res.github.childImageSharp.fixed} style={{ marginRight: "20px" }}></Img></a>
        <a href="https://linkedin.com/in/subhamX" target="_blank" rel="noopener norefferer" className='footer-links'><Img fixed={res.linkedIn.childImageSharp.fixed} style={{ marginRight: "20px" }}></Img></a>
    </footer>)
}


// export const query = 