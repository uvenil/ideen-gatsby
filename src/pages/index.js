import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hallo</h1>
            <h2>Auf dieser Internetseite werden spannende Ideen präsentiert.</h2>
        </Layout>
    )
}

export default IndexPage