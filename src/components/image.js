import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-background-image"

import style from "../css/headerImage.module.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "doma-title-image.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      className={style.headerImage}
      loading="eager"
      alt="Weißer Raum mit grauem Bodenbelag - DOMA Bauunternehmen"
    />
  )
}

export default Image
