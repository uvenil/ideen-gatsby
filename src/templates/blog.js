import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulIdee(slug: { eq: $slug }) {
      titel
      autor
      kategorie
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulIdee.titel}/>
      <h1>{props.data.contentfulIdee.titel}</h1>
      <p>Autor: {props.data.contentfulIdee.autor}</p>
      <p>Kategorie: {props.data.contentfulIdee.kategorie}</p>
      <p>{props.data.contentfulIdee.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulIdee.body.json, options)}
    </Layout>
  )
}

export default Blog
