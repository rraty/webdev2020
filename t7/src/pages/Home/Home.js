import { Card, Typography, Divider, Badge } from "antd";
import { Route, useHistory } from "react-router-dom";
import styles from "./Home.module.scss";

import ExerciseModal from "./components/ExerciseModal/ExerciseModal";
const { Meta } = Card;
const { Title, Paragraph } = Typography;

const items = [
  {
    id: "teht1",
    title: "Palindromi tarkastaja",
    exerciseNumber: "Tehtävä 1",
    assignment:
      "Luoda sovellus, joka kysyy syötettävän sanan ja testaa onko sana palindromi (eli onko sana sama toisinpäin) siten ettei käytössä ole valmiita funktiota ongelman ratkaisemiseen",
    implementation:
      "Toteutin sanan kyselemisen <code>readline-async</code> kirjaston avulla ja vertasin sanoja looppaamalla toista ja vertailemalla kirjaimien järjestystä tämän jälkeen.",
    learning:
      "Opin käsittelemään komentoriviltä tulleita syötteitä ja parametreja nodejs:n kanssa ja lisää esim. operaattoreiden välisistä eroita (== vs ===).",
    additionalThings:
      "Tehtävä onnistui mielestäni oikein hyvin ja en muuttaisi siitä mitään, ehkä jos tehtävällä ei olisi kiire ja sen tekisin uudestaan niin opettelisin syötteiden käsittelyä ilman ulkopuolista kirjastoa.",
    image: "t1.png",
    repositoryUrl: "https://github.com/rraty/webdev2020/tree/master/t1",
    technologiesUsed: ["Javascript", "Nodejs", "NPM"],
  },
  {
    id: "teht2",
    title: "Puhelinluettelo konsoliohjelma",
    exerciseNumber: "Tehtävä 2",
    assignment:
      "Tarkoituksena oli luoda opetella komentorivi pohjaisen puhelinluettelon tekemistä ja javascriptin hof:ioiden käyttämistä",
    implementation:
      "Toteutin käyttäjältä syötteiden lukemisen hieman eri kirjastolla kuin tehtävässä 1. Tällä kertaa käytössä oli <code>readline-sync</code> kirjasto. Käyttäjän syöttämät tiedot tallensin muuttujaan, josta niille suoritettaan CRD operaatiot komentorivi käyttöliittymältä.",
    learning:
      "Opin käsittelemään taulukkoa paremmin ja suunnittelemaan sovelluksen rakennetta mahdollisimman taipuvaksi ja yksinkertaiseksi.",
    additionalThings:
      "Tehtävä onnistui hyvin, eikä suurempia vaikeuksia sen kanssa ollut. Jos nyt tekisin uudelleen tehtävää niin yrittäisin saada käyttäjän syöttämiä tietoja tallennettuun json tiedostoon, jolloin tiedot säilyisivät myös sovelluksen sammuttua ja olisivat aina samat seuraavalla käynnistyskerralla.",
    image: "t2.png",
    repositoryUrl: "https://github.com/rraty/webdev2020/tree/master/t2",
    technologiesUsed: ["Javascript", "Nodejs"],
  },
  {
    id: "teht3",
    title: "Javascript luokka harjoitus",
    exerciseNumber: "Tehtävä 3",
    assignment:
      "Tarkoituksena oli luoda opetella komentorivi pohjaisen puhelinluettelon tekemistä ja javascriptin hof:ioiden käyttämistä",
    implementation:
      "Opettelin ja perehdyin ES6 standardissa mukana tulleisiin luokkiin sekä niiden käyttöön ja periytymiseen. Perehdyin myös konstruktoreiden nimeämiseen sekä gettereiden ja settereiden oikea oppiseen muodostamiseen.",
    learning:
      "Opin luokkien toiminnasta ja niiden oikea oppisesta käyttämisestä sekä Javascriptin vanhoista toteutuksista paikkaamaan natiivia tukea luokille.",
    additionalThings: null,
    repositoryUrl: "https://github.com/rraty/webdev2020/tree/master/Urheilu1",
    technologiesUsed: ["Javascript", "Nodejs"],
  },
  {
    id: "teht4",
    title: "Puhelinluettelo backend",
    exerciseNumber: "Tehtävä 4",
    assignment:
      "Tarkoituksena oli luoda seuraavalle tehtävälle valmiiksi backend puhelinluettelo sovellusta varten.",
    implementation:
      "Toteutin backendin ohjeenannon mukaisesti Expressillä ja MariaDB:llä sekä kiinnitin huomiota ja harjoittelin REST-Status koodien oikeaoppista käyttämistä oikeissa operaatioissa ja virheiden kanssa.",
    learning:
      "Opin käyttämään Dockeria ja MariaDB:tä pyöritin dockerin päällä, joka mahdollisti sen ettei minun tarvinnut asentaa sitä suoraan omalle koneelle. Opin myös Restin polkujen nimeämisestä, expressistä ja http status codeista. Harjoitus oli mukava ja sujui hyvin.",
    additionalThings: "Tehtävä sujui oikein hyvin ja oli mukava tehdä.",
    image: "t4.png",
    repositoryUrl: "https://github.com/rraty/webdev2020/tree/master/t4",
    technologiesUsed: ["Javascript", "Nodejs", "Express"],
  },
  {
    id: "teht5",
    title: "Puhelinluettelo frontend",
    exerciseNumber: "Tehtävä 5",
    assignment:
      "Tarkoituksena oli luoda edellisellä viikolla toteutetulle rajapinnalle (Harjoitus 4) käyttöliittymä, josta pitää pystyä lisäämään, muokkaamaan ja poistamaan yhteystietoja.",
    implementation:
      "Frontedntin toteutin hyödyntäen useita eri elementtejä. Teknisen toteutuksen ja toiminnallisuuden toteutin HTML:ä ja Jquery:llä. Paremman ulkonäön saavuttamiseksi hyödynsin Bootstrap 4:sta.",
    learning:
      "Harjoituksessa muodostin html & Jquery frontedin urheilija rajapinnalla, joka toteutettiin edellisellä viikolla. Harjoituksessa hyödynsin lisäksi Bootstrap 4:sta ulkoasun tyylittelyyn. Tutustuin myös VSCoden näppäinkomentoihin ja yritin niitä käyttää mahdollisimman tehokkaasti harjoitusta tehdessäni.",
    additionalThings:
      "Tehtävä onnistui mielestäni hyvin ja oli mukavaa vaihtelua käyttää Jqueryä ja tavallista HTML:ää Reactin tai muun vastaavan sijasta.",
    image: "t5.png",
    repositoryUrl: "https://github.com/rraty/webdev2020/tree/master/t5",
    technologiesUsed: ["Jquery", "Javascript", "Bootstrap"],
  },
  {
    id: "teht6",
    title: "Urheilijaluettelo fullstack",
    exerciseNumber: "Tehtävä 6",
    assignment:
      "Tarkoituksena oli luoda fullstack sovellus, joka mahdollistaa urhelijoiden lisäämisen, muokkaamisen ja poistamisen.",
    implementation:
      "Refaktoroin tehtävässä 4 tuotetun rajapinnan vastaamaan tehtävän antoa sekä myös dokumentoin sen swaggerin avulla. Harjoittelin myös Dockerin käyttö muodostamalla projektilla (frontend & backend) imaget ja docker-compose tiedoston, joilloin ne saa käyntiin yhdellä komennolla (docker-compose up). Lähdin sen jälkeen toteuttamaan sovelluksen frontendiä. Frontendissä käytin Bootstrap 4:sta ja sen pohjalta tehtyjä komponentteja reactstrap kirjastosta. Lomakkeet toteutin Formik:in avulla, koska halusin oppia sen käyttöä ja olin kuullut siitä hyvää. Viimeiseksi korjasin sovelluksesta muutamat bugit pois, lisäsin ilmoitukset (<code>react-alert</code>) kirjaston avulla, joten onnistuneesta poistosta/myös epäonnistuneesta informoidaan käyttäjää, siistin koodin ja otin routtauksen käyttöön <code>react-router-dom</code> kirjaston avulla. ",
    learning: `<b>Opettelin ja onnistuin tekemään seuraavat:</b> <ul><li>REST-rajapinnan dokumentointia Swaggerillä</li><li>Routtaamista Reactissa <code>react-router-dom</code> kirjaston avulla</li><li>Lomakkeiden tekoa <code>Formik</code> kirjaston avulla</li><li>Valmiiden komponenttien käyttöä ja muokkaamista (<code>reactstrap</code>)</li><li><p>Asynkroonisen monivalinnan teko, joka hakee tiedot Wikipedian rajapinnasta.</p> <img alt="Asynkroonien monivalinta" class="img-vw30" src="${
      process.env.PUBLIC_URL + "/assets/t6_multiselect_async.gif"
    }" /></li><li><p>Dynaamisen saavutuksien teko komponentin teko</p> <img alt="Fieldarray toteutus" class="img-vw30" src="${
      process.env.PUBLIC_URL + "/assets/t6_fieldarray.gif"
    }" /></li></ul>`,
    additionalThings:
      "Tehtävä oli kurssin tehtävista mielestäni mukavin ja käytinkin siihen kaikista eniten aikaa ePortfolion ohella. Jos lähtisin toteuttamaan/muokkaamaan sovellusta niin parantelisin 'Saavutukset' osion toiminta logiikkaa.",
    image: "t6.png",
    repositoryUrl: "https://github.com/rraty/webdev2020/tree/master/t6",
    technologiesUsed: [
      "React",
      "Javascript",
      "Bootstrap",
      "Nodejs",
      "Express",
      "SASS",
      "Yarn",
    ],
  },
  {
    id: "teht7",
    title: "ePortfolio",
    exerciseNumber: "Tehtävä 7",
    assignment:
      "Tarkoituksena oli luoda ePortfolio esittelemään kurssin aikana luotuja tehtäviä ja kertoa niiden toteutuksesta hieman laajemmin.",
    implementation:
      "Aloin koostamaan Antd-kirjaston pohjalta mahdollisimman yksinkertaista ja simppeliä sivua, jossa korttimaisesti esiteltäisiin tehtävät ja korttia klikkaamalla aukeaisi modaali, jossa olisi kunkin tehtävän tiedot tarkemmin ja mahdollisesti myös kuva valmiista tehtävästä. Toteutusin modaalit niin, että html renderöidään tekstistä oikein, jolloin voin muodostaa listoja ja lihavoida tekstiä mahdollisimman helposti. <ul> <li> Käytetyt teknologiat ja kirjastot <ul> <li><a target='_blank' rel='noopener noreferrer'  href='https://ant.design/components/overview/'>Antd</a></li> <li> <a target='_blank' rel='noopener noreferrer'  href='https://github.com/css-modules/css-modules'>CSS-Modules</a> </li> <li><a target='_blank' rel='noopener noreferrer'  href='https://sass-lang.com/guide'>SCSS</a></li> <li><a target='_blank' rel='noopener noreferrer'  href='https://github.com/JedWatson/classnames'>Classnames</a></li> <li><a target='_blank' rel='noopener noreferrer'  href='https://reactjs.org/'>React</a></li> <li><a target='_blank' rel='noopener noreferrer'  href='https://devicon.dev/'>Devicon</a></li></ul> </li> </ul>",
    learning:
      "Tehtävän aikana opin tuottamaan komponentteja ja suunnittelemaan sovellusta niin, että sen jatko jalostaminen olisi mahdollisimman helppoa ja tietojen haku tapahtuisi esimerkiksi REST-rajapinnan kautta.",
    additionalThings:
      "Tehtävästä en muuttaisi mitään, koska olen siitä kurssin toteutuksista kaikista ylpein tehtävän 6 ohella.",
    image: "t7.png",
    repositoryUrl: "https://github.com/rraty/webdev2020/tree/master/t7",
    technologiesUsed: ["React", "Javascript", "Bootstrap", "SASS", "Yarn"],
  },
  {
    id: "teht8",
    title: "Asynkrooninen promise 5x5 taulukko backendissä",
    exerciseNumber: "Tehtävä 8",
    assignment:
      "Tarkoituksena oli luoda backend, joka luo 5*5 kokoisen taulukon, johon sijoitetaan 3 ruudun kokoinen laiva joko pysty- tai vaakasuunnassa.",
    implementation:
      "Toteutin backendin express-kirjaston avulla ja frontedin html:llä ja jqueryllä, joka muodostaa jokaisen api kutsun jälkeen sivulla olevan html-taulukon uudestaan.",
    learning:
      "Tehtävä oli suurimmalta osalta kertausta edellisistä tehtävistä, mutta tehtävä syventi taulukoiden käsittelyä ja ruutujen arpomista sen sisällä.",
    additionalThings: "Mukava ja ei hirveän pitkä tehtävä.",
    image: "t8.png",
    repositoryUrl: "https://github.com/rraty/webdev2020/tree/master/t8",
    technologiesUsed: ["Jquery", "Javascript", "Nodejs", "Express", "Yarn"],
  },
];

const Home = () => {
  let history = useHistory();

  return (
    <>
      <div className={styles.Header}>
        <Title level={1}>ePortfolio Web-Ohjelmointi</Title>
        <Paragraph>
          Tämä sivusto toimii web-ohjelmointi kurssin ePortfoliona, jossa
          esitellään kurssillä tehdyt asiat tarkemmin ja myös eritellään niiden
          toteutusta hieman tarkemmin.
        </Paragraph>
      </div>
      <Divider />
      <div>
        <Title style={{ textAlign: "center" }} level={3}>
          Harjoitustehtävät
        </Title>
        <div className={styles.Projects}>
          {items.map((item) => {
            const {
              id,
              image,
              title,
              implementation,
              technologiesUsed,
              exerciseNumber,
            } = item;

            return (
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="Tehtävä"
                    height={150}
                    src={
                      process.env.PUBLIC_URL + `/assets/${image || "code.svg"}`
                    }
                  />
                }
                onClick={() => history.push(id)}
                actions={
                  technologiesUsed &&
                  technologiesUsed.map((t) => {
                    return (
                      <i
                        class={`devicon-${t.toLowerCase()}-${
                          ["express"].includes(t.toLocaleLowerCase())
                            ? "original"
                            : "plain"
                        }`}
                      ></i>
                    );
                  })
                }
              >
                <Meta
                  title={title}
                  description={
                    <div>
                      <Badge
                        count={exerciseNumber}
                        style={{ backgroundColor: "#52c41a" }}
                      />
                      <Divider />
                      <Paragraph ellipsis={{ rows: 4 }}>
                        <div
                          dangerouslySetInnerHTML={{ __html: implementation }}
                        />
                      </Paragraph>
                    </div>
                  }
                />
              </Card>
            );
          })}
        </div>
      </div>
      <Divider />
      <div className={styles.Header}>
        <Title level={3}>Palaute</Title>
        <Paragraph>
          <p>
            Koen, että en ole hirveästi uutta kurssin aikana oppinut kurssin
            keskittyessä web-ohjelmoinnin perusteisiin, jotka koen itselläni
            olevan jo hallussa aiemman kiinnostuksen ja tekemisen ansiosta.
            Enemmän voisin sanoa tietojeni syventyneen ja tekemisen nopeutuneen
            harjoittelun tuloksena, tosin on sekin uuden oppimista &#128512;.
            Vaikka perusteet oli jo minulla hallussa ennen kurssin alkua, niin
            tehtäviä tehdessä yritin kokeilla toteutustapaa, jota olen vähiten
            käyttänyt tai joka ei ole minulle niin tuttu. Pyrin myös tekemään
            aina joissakin tehtävissä hieman yli ohjeen, jos tehtävä sujui
            nopeasti tai vastaavasti parantamaan olemassa olevaa toteutusta
            vielä paremmaksi. Pyrin myös tekemään frontend tehtävistä
            visuaalisesti hyvännäköisiä, mutta se ei oikein onnistunut
            suunnitellulla tavalla, joten siinä ainakin harjoitusta vielä
            paljonkin tarvitsen.
          </p>
          <p>
            Oppimistani kurssilla tukivat kurssikaverit ja myös toisinpäin sekä
            keskustelin myös muiden kanssa erillaisista toteutustavoista sekä
            ratkaisuista.
          </p>
          <p>
            <b>
              Kurssin aikana olen oppinut/syventynyt muun muassa seuraavia
              asioita:
            </b>
          </p>
          <ul>
            <li>
              <code>react-router-dom</code> kirjaston käyttöön syventymistä ja
              routtaamista Reactissa
            </li>
            <li>Ulkoisen kirjastojen hyödyntämistä</li>
            <li>Sivuston ja toteutuksen suunnittelua sekä toteuttamista</li>
            <li>
              <code>SCSS</code>:n hyödyntämistä ja käyttämistä yhdessä CRA:n
              kanssa
            </li>
          </ul>
          <p>
            Kurssin kohokohtia olivat ehdottomasti tehtävien teko, kun taas
            vähemmän kiinnostavaa oli ylläpitää kehittäjä-blogia, joka monesti
            jäikin vahingossa jälkeen ja sitä joutui täydentämään jäljessä.
            Kurssilta jäin kaipaamaan yhtä kokonaisuutta, jota olisi rakennettu
            melkein koko kurssin ajan ja lopulta se olisi kattanut laajan kirjon
            eri tekniikoita ja toiminnallisuuksia. Yhden kokonaisuuden puutetta
            paikkaavat tehtävä 6 ja 7, jotka nitoivat kurssin aikana tehtyjä
            tehtäviä yhteen.
          </p>
          <p>
            Tulevaisuudessa toivottavasti tulen olemaan kovan luokan
            fullstack-osaaja, joka pystyy ratkaisemaan asiakkaan kuin asiakkaan
            ongelman. Koen fullstackin olevan se, mitä haluan tulevaisuudessa
            tehdä ja missä voisin olla hyvä sekä ansaita elantoni.
            Saavuttaakseni huippuluokan osaajan tason minun pitää vielä kohentaa
            taitojani ohjelmoinnissa ja eri tekniikoissa sekä ulkoasun
            suunnittelussa.
          </p>
        </Paragraph>
      </div>

      <Route path={`/:id`}>
        <ExerciseModal items={items} />
      </Route>
    </>
  );
};

export default Home;
