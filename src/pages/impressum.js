import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Impressum = () => (
  <Layout>
    <div style={{ maxWidth: "600px", margin: "auto", minHeight: "70vh" }}>
      <SEO title="Impressum" />
      <div className="container full-screen">
        <h2 style={{ margin: "50px 0" }}>Impressum</h2>
        <h3>DOMA-Bauunternehmen</h3>

        <div className="paragraph-list">
          <p>Geschäftsführer / Inhaber: Herr Domagoj Županić</p>
          <p>Am Borsdorfer 58</p>
          <p>60435 Frankfurt am Main</p>
          <p>Telefon: (+49) 174 - 91 60 117</p>
          <p>Email: info@doma-bauunternehmen.de</p>
          <p>USt-ID: DE 312866682</p>
        </div>

        <h3>Haftungsausschluss</h3>

        <p>Haftung für Inhalte</p>
        <p>
          Die Inhalte unserer Seite wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen.
        </p>
        <p>Urheberrecht</p>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
        </p>
      </div>
    </div>
  </Layout>
)

export default Impressum
