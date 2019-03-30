import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingBlock from "../components/LandingBlock"
import HelloBlock from "../components/HelloBlock"

const blocks = [
  {
    color: '#FB9D46',
    fullHeight: true,
    id: 'hello',
    content: (
      <HelloBlock />
    ),
  }, {
    color: '#1CBABD',
    fullHeight: true,
    id: '2',
  }, {
    color: '#E4473E',
    fullHeight: true,
    id: '3',
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Dmytro Borchuk" keywords={[`personal`, `website`, `site`, `portfolio`, `resume`, `sv`]} />
    {blocks.map(block => (
      <LandingBlock
        color={block.color}
        fullHeight={block.fullHeight}
        key={block.id}
      >
        {block.content}
      </LandingBlock>
    ))}
  </Layout>
)

export default IndexPage
