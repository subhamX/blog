import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export default (props) => {
    let title = props.title;
    let date = props.date;
    let excerpt = props.excerpt;
    let thumb = props.thumb;
    let slug = props.slug;
    return (
        <div className='blogtile-wrapper'>
            <Link to={slug} className='blogtile-title'>{title}</Link>
            <div className='blogtile-date'>{date}</div>
            <Link to={slug} className='blogtile-title'><Img fluid={thumb.childImageSharp.fluid} className='blogtile-img'></Img></Link>
            <div className='blogtile-excerpt'>{excerpt}</div>
        </div>)
}