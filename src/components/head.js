import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet 
            title={`${title} | ${data.site.siteMetadata.title}`} 
        >
            <base href="http://www.ultra-text.net/" target="_top" rel="noopener noreferrer"/>
        </Helmet>
    )
}

export default Head