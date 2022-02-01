import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BgImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeaderImage from "../components/image"
import icon from "../images/domabau-icon.png"

import ImageSlider from "../components/ImageSlider"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Ihr Bauunternehmen aus Frankfurt am Main" />
      <div>
        <HeaderImage />
      </div>
      <div className="container">
        <h1 className="site-title">
          <span className="site-title welcome">Herzlich Willkommen bei</span>
          <br /> DOMA-<span className="responsive-title">Bauunternehmen</span>
        </h1>
        <h2 className="subtitle gold">Wir schaffen Ihnen ein Zuhause!</h2>
        <p>
          Sie brauchen einen Tapetenwechsel oder wollen Ihr neues Heim beziehen
          und es nach Ihren Wünschen und Bedürfnissen gestalten? Dann sind Sie
          bei uns genau richtig! Sei es in Ihren vier Wänden oder aber auch in
          Ihrem Garten, bei uns können Sie sich sicher sein hier passt nicht nur
          der Schlüssel sondern auch das Herz! Wir legen sehr viel Wert auf
          Qualität und die Bedürfnisse jedes einzelnen Kunden. Wir bieten sowohl
          die Ausführung von kompletten Projekten, als auch die Ausführung von
          einzelnen Gewerken an. Unser Team besteht aus kompetenten und
          erfahrenen Mitarbeitern und einem festen Ansprechpartner für alle Ihre
          Fragen und Wünsche. Wir würden uns sehr freuen Sie auf dem Weg in Ihr
          neues Zuhause begleiten zu dürfen.
        </p>
      </div>
      <div className="separation-image">
        <Image
          fluid={data.separationImageOne.childImageSharp.fluid}
          alt="Weiße Badewanne mit Fliesen in Anthrazit Optik"
          style={{ maxHeight: "600px" }}
        />
      </div>
      <div className="container">
        <span id="leistungen"></span>
        <h2 className="subtitle section-title">
          <span className="title-underline">Unser Unternehmen bietet:</span>
        </h2>
        <div className="section-center services-center">
          <article className="service">
            <img src={icon} alt="Icon" className="service-icon" />
            <h4>Sanierung</h4>
            <div className="underline"></div>
            <p>
              Sanierung, Modernisierung, Umbau, Renovierung, Innenausbau (Alt-
              und Neubau)
            </p>
          </article>
          <article className="service">
            <img src={icon} alt="Icon" className="service-icon" />
            <h4>Trockenbauarbeiten</h4>
            <div className="underline"></div>
            <p>Trockenbauarbeiten aller Art</p>
          </article>
          <article className="service">
            <img src={icon} alt="Icon" className="service-icon" />
            <h4>Fliesen</h4>
            <div className="underline"></div>
            <p>Fliesen legen von Mosaik bis XXL Formaten</p>
          </article>
          <article className="service">
            <img src={icon} alt="Icon" className="service-icon" />
            <h4>Türen und Fenster</h4>
            <div className="underline"></div>
            <p>Türen und Fenster einbauen und austauschen</p>
          </article>
          <article className="service">
            <img src={icon} alt="Icon" className="service-icon" />
            <h4>Gartengestaltung</h4>
            <div className="underline"></div>
            <p>Pflastersteine, Zäune, Terrassen, Baggerarbeiten etc.</p>
          </article>
          <article className="service">
            <img src={icon} alt="Icon" className="service-icon" />
            <h4>Beratung</h4>
            <div className="underline"></div>
            <p>Beratung, Planung und Ausführung</p>
          </article>
        </div>
      </div>
      <div className="separation-image">
        <BgImage
          fluid={data.separationImageTwo.childImageSharp.fluid}
          alt="Ein Mann der mit einer Bohrmaschine eine Schraube in Holz bohrt."
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h2 className="slogan">
            &bdquo;Wir schaffen Ihnen ein Zuhause!&ldquo;
          </h2>
        </BgImage>
      </div>
      <div className="container slider">
        <span id="referenzen"></span>
        <h2 className="subtitle section-title">
          <span className="title-underline">Unsere Referenzen:</span>
        </h2>
        <div className="container slider">
          <ImageSlider />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    separationImageOne: file(relativePath: { eq: "domabau-separator-01.jpg" }) {
      childImageSharp {
        fluid(quality: 85, maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    separationImageTwo: file(relativePath: { eq: "holzbohrung.jpg" }) {
      childImageSharp {
        fluid(quality: 85, maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
