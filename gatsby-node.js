const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulIdee {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulIdee.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/idee/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}