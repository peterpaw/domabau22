import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Datenschutz = () => (
  <Layout>
    <SEO title="Datenschutzerklärung" />
    <div className="container">
      <h1 className="datenschutz-title" style={{ margin: '50px 0' }}>
        Datenschutzerklärung
      </h1>
      <h3>Name und Anschrift des Verantwortlichen</h3>
      <p>
        Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer
        nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger
        datenschutzrechtlicher Bestimmungen ist die:
      </p>

      <p>
        DOMA-Bauunternehmen
        <br />
        Am Borsdorfer 58
        <br />
        60435 Frankfurt am Main
        <br />
        Telefon: (+49) 174 - 91 60 117
        <br />
        Email: info@doma-bauunternehmen.de
      </p>

      <h3>Umfang der Verarbeitung personenbezogener Daten</h3>
      <p>
        Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur,
        soweit dies zur Bereitstellung einer funktionsfähigen Website sowie
        unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
        personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach
        Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen
        eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen
        nicht möglich ist und die Verarbeitung der Daten durch gesetzliche
        Vorschriften gestattet ist.{' '}
      </p>

      <h3>Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
      <p>
        Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
        Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a
        EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
      </p>
      <p>
        Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung
        eines Vertrages, dessen Vertragspartei die betroffene Person ist,
        erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage.
        Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung
        vorvertraglicher Maßnahmen erforderlich sind.
      </p>
      <p>
        Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer
        rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen
        unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
      </p>
      <p>
        Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder
        einer anderen natürlichen Person eine Verarbeitung personenbezogener
        Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als
        Rechtsgrundlage.
      </p>
      <p>
        Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres
        Unternehmens oder eines Dritten erforderlich und überwiegen die
        Interessen, Grundrechte und Grundfreiheiten des Betroffenen das
        erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als
        Rechtsgrundlage für die Verarbeitung.{' '}
      </p>

      <h3>Datenlöschung und Speicherdauer</h3>
      <p>
        Die personenbezogenen Daten der betroffenen Person werden gelöscht oder
        gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung
        kann darüber hinaus erfolgen, wenn dies durch den europäischen oder
        nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder
        sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen
        wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn
        eine durch die genannten Normen vorgeschriebene Speicherfrist abläuft,
        es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der
        Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
      </p>

      <h3>Beschreibung und Umfang der Datenverarbeitung</h3>
      <p>
        Bei jedem Aufruf unserer Internetseite erfasst unser System
        automatisiert Daten und Informationen vom Computersystem des aufrufenden
        Rechners.
      </p>

      <ul>
        <li>Informationen über den Browsertyp und die verwendete Version</li>
        <li>Das Betriebssystem des Nutzers</li>
        <li>Den Internet-Service-Provider des Nutzers</li>
        <li>Die IP-Adresse des Nutzers</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>
          Websites, von denen das System des Nutzers auf unsere Internetseite
          gelangt{' '}
        </li>
        <li>
          Websites, die vom System des Nutzers über unsere Website aufgerufen
          werden
        </li>
      </ul>

      <p>
        Die Daten werden ebenfalls in den Logfiles unseres Systems gespeichert.
        Nicht hiervon betroffen sind die IP-Adressen des Nutzers oder andere
        Daten, die die Zuordnung der Daten zu einem Nutzer ermöglichen. Eine
        Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten
        des Nutzers findet nicht statt.
      </p>

      <p>
        Rechtsgrundlage für die vorübergehende Speicherung der Daten ist Art. 6
        Abs. 1 lit. f DSGVO.
      </p>

      <h3>Ihre Rechte</h3>
      <p>
        Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
        betreffenden personenbezogenen Daten:
      </p>

      <ul>
        <li>Recht auf Auskunft</li>
        <li>Recht auf Berichtigung oder Löschung</li>
        <li>Recht auf Einschränkung der Verarbeitung</li>
        <li>Recht auf Widerspruch gegen die Verarbeitung</li>
        <li>Recht auf Datenübertragbarkeit</li>
        <li>
          Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
          über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
          beschweren.
        </li>
      </ul>
    </div>
  </Layout>
);

export default Datenschutz;
