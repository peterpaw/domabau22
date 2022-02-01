import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReferenzenSlider = () => {
  const data = useStaticQuery(graphql`
    {
      aussen01: file(relativePath: { eq: "image-slider/aussen01.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aussen02: file(relativePath: { eq: "image-slider/aussen02.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aussen03: file(relativePath: { eq: "image-slider/aussen03.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aussen04: file(relativePath: { eq: "image-slider/aussen04.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aussen05: file(relativePath: { eq: "image-slider/aussen05.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aussen06: file(relativePath: { eq: "image-slider/aussen06.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aussen07: file(relativePath: { eq: "image-slider/aussen07.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad01: file(relativePath: { eq: "image-slider/bad01.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad02: file(relativePath: { eq: "image-slider/bad02.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad03: file(relativePath: { eq: "image-slider/bad03.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad04: file(relativePath: { eq: "image-slider/bad04.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad05: file(relativePath: { eq: "image-slider/bad05.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad06: file(relativePath: { eq: "image-slider/bad06.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad07: file(relativePath: { eq: "image-slider/bad07.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad08: file(relativePath: { eq: "image-slider/bad08.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad09: file(relativePath: { eq: "image-slider/bad09.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad10: file(relativePath: { eq: "image-slider/bad10.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bad11: file(relativePath: { eq: "image-slider/bad11.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eingang01: file(relativePath: { eq: "image-slider/eingang01.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eingang02: file(relativePath: { eq: "image-slider/eingang02.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eingang03: file(relativePath: { eq: "image-slider/eingang03.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eingang04: file(relativePath: { eq: "image-slider/eingang04.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      holzterrasse01: file(relativePath: { eq: "image-slider/holzterrasse01.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      holzterrasse02: file(relativePath: { eq: "image-slider/holzterrasse02.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      holzterrasse03: file(relativePath: { eq: "image-slider/holzterrasse03.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      holzterrasse04: file(relativePath: { eq: "image-slider/holzterrasse04.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pool01: file(relativePath: { eq: "image-slider/pool01.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pool02: file(relativePath: { eq: "image-slider/pool02.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pool03: file(relativePath: { eq: "image-slider/pool03.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      terrasse01: file(relativePath: { eq: "image-slider/terrasse01.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      terrasse02: file(relativePath: { eq: "image-slider/terrasse02.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      terrasse03: file(relativePath: { eq: "image-slider/terrasse03.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      terrasse04: file(relativePath: { eq: "image-slider/terrasse04.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      terrasse05: file(relativePath: { eq: "image-slider/terrasse05.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      terrasse06: file(relativePath: { eq: "image-slider/terrasse06.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      transporter: file(relativePath: { eq: "image-slider/transporter.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wohnzimmer01: file(relativePath: { eq: "image-slider/wohnzimmer01.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wohnzimmer02: file(relativePath: { eq: "image-slider/wohnzimmer02.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wohnzimmer03: file(relativePath: { eq: "image-slider/wohnzimmer03.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wohnzimmer04: file(relativePath: { eq: "image-slider/wohnzimmer04.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wohnzimmer05: file(relativePath: { eq: "image-slider/wohnzimmer05.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wohnzimmer06: file(relativePath: { eq: "image-slider/wohnzimmer06.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wohnzimmer07: file(relativePath: { eq: "image-slider/wohnzimmer07.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wohnzimmer08: file(relativePath: { eq: "image-slider/wohnzimmer08.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    fade: true,
  };

  return (
    <Slider {...settings}>
      <Image
        fluid={data.aussen01.childImageSharp.fluid}
        alt="Bauarbeiter und Bagger"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.aussen02.childImageSharp.fluid}
        alt="Bagger und Schuttcontainer"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.aussen03.childImageSharp.fluid}
        alt="Bauarbeiter macht Pause auf Betonteilen"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.aussen04.childImageSharp.fluid}
        alt="Domabau Fahrzeug und Bagger im Hintergrund"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.aussen05.childImageSharp.fluid}
        alt="Betonzaun und gepflasterte Einfahrt"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.aussen06.childImageSharp.fluid}
        alt="Aussenbereich Baustelle"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.aussen07.childImageSharp.fluid}
        alt="Bagger Führerkabine mit Bauarbeiter davor"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad01.childImageSharp.fluid}
        alt="Badezimmer weiß gefliest vor dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad02.childImageSharp.fluid}
        alt="Waschbecken und Badewannenbereich vor dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad03.childImageSharp.fluid}
        alt="Toilettenbereich vor dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad04.childImageSharp.fluid}
        alt="Duschkabine nach dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad05.childImageSharp.fluid}
        alt="Badewanne nach dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad06.childImageSharp.fluid}
        alt="Badewanne nach dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad07.childImageSharp.fluid}
        alt="Duschkabine nach dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad08.childImageSharp.fluid}
        alt="Toilette und Badewanne nach dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad09.childImageSharp.fluid}
        alt="Heizung und Ablage nach dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad10.childImageSharp.fluid}
        alt="Toilette mit Ablage nach dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.bad11.childImageSharp.fluid}
        alt="Ablagebereich neu nach dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.eingang01.childImageSharp.fluid}
        alt="Treppe und Geländer im Eingangsbereich"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.eingang02.childImageSharp.fluid}
        alt="Treppe grau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.eingang03.childImageSharp.fluid}
        alt="Einfahrt grau gepflastert mit Baum"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.eingang04.childImageSharp.fluid}
        alt="Hinterhof grau gepflastert"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.holzterrasse01.childImageSharp.fluid}
        alt="Terrasse vor dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.holzterrasse02.childImageSharp.fluid}
        alt="Terrasse nach dem Umbau mit grünem Rasen"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.holzterrasse03.childImageSharp.fluid}
        alt="Terrasse nach dem Umbau mit Blick auf Kinderschaukel"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.holzterrasse04.childImageSharp.fluid}
        alt="Holzterrasse mit Blick auf Blumenbeet"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.pool01.childImageSharp.fluid}
        alt="Poolbereich vor dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.pool02.childImageSharp.fluid}
        alt="Pool mit Pflanzenelementen in Stein"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.pool03.childImageSharp.fluid}
        alt="Garten mit Pool, grünem Rasen und Gartenlaube"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.terrasse01.childImageSharp.fluid}
        alt="Terrasse vor dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.terrasse02.childImageSharp.fluid}
        alt="Terrasse fertig geflastert"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.terrasse03.childImageSharp.fluid}
        alt="Terrasse fertig geplfastert"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.terrasse04.childImageSharp.fluid}
        alt="Terrasse fertig gepflastert"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.terrasse05.childImageSharp.fluid}
        alt="Steinbereich im Garten"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.terrasse06.childImageSharp.fluid}
        alt="Regenrinne"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.transporter.childImageSharp.fluid}
        alt="Domabau-Transporter mit Firmenbeschriftung"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.wohnzimmer01.childImageSharp.fluid}
        alt="Wohnzimmer vor dem Umbau"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.wohnzimmer02.childImageSharp.fluid}
        alt="Wohnzimmerboden fertig gestellt"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.wohnzimmer03.childImageSharp.fluid}
        alt="Wohnzimmer mit Laminatboden und Stühlen"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.wohnzimmer04.childImageSharp.fluid}
        alt="Decke mit Holzelementen"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.wohnzimmer05.childImageSharp.fluid}
        alt="Laminierter Boden"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.wohnzimmer06.childImageSharp.fluid}
        alt="Zimmerecke mit Laminat"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.wohnzimmer07.childImageSharp.fluid}
        alt="Laminatboden im Wohnbereich"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Image
        fluid={data.wohnzimmer08.childImageSharp.fluid}
        alt="Grüne Wand mit weißen Fußleisten und laminiertem Boden"
        loading="lazy"
        objectFit="cover"
        objectPosition="50% 50%"
      />
    </Slider>
  );
};

export default ReferenzenSlider;
