import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingBlock from "../components/LandingBlock"

const blocks = [
  {
    color: '#FB9D46',
    fullHeight: true,
  }, {
    color: '#1CBABD',
    fullHeight: true,
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Dmytro Borchuk" keywords={[`personal`, `website`, `site`, `portfolio`, `resume`, `sv`]} />
    {blocks.map(block => (
      <LandingBlock
        color={block.color}
        fullHeight={block.fullHeight}
      />
    ))}
  </Layout>
)

export default IndexPage
