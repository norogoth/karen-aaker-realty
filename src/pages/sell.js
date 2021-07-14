import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function consoleLogger() {
	console.log("BUTTON CLICKED");
}

const IndexPage = () => (
  <Layout>
	<p>sell works</p>
  </Layout>
)

export default IndexPage
