import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
	<head>
		<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
	</head>
    <Seo title="Home" />
	<img className="backgroundImg" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
	<div className="landingDiv">
		<label className="title">Good Guys Realty</label>
		<button>I want to sell.</button>
		<button>I want to buy.</button>
	</div>
  </Layout>
)

export default IndexPage
