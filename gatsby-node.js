/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({  actions }) => {
  const { createPage } = actions;
  createPage({
    path: `test-amp/amp`,
    component: path.resolve('./src/templates/test.amp.js'),
    context: {
      slug: 'test-amp',
    },
  })
  createPage({
    path: `test-amp/`,
    component: path.resolve('./src/templates/test.js'),
    context: {
      slug: 'test-amp',
    },
  })
}