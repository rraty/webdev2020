class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this._etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
  // Etunimet
  get etunimet() {
    return this._etunimet;
  }

  set etunimet(newEtunimet) {
    this._etunimet = newEtunimet;
  }

  // Sukunimi
  get sukunimi() {
    return this._sukunimi;
  }

  set sukunimi(newSukunimi) {
    this._sukunimi = newSukunimi;
  }

  // Kutsumanimi
  get kutsumanimi() {
    return this._kutsumanimi;
  }

  set kutsumanimi(newKutsumanimi) {
    this._kutsumanimi = newKutsumanimi;
  }

  // Syntymavuosi
  get syntymavuosi() {
    return this._syntymavuosi;
  }

  set syntymavuosi(newSyntymavuosi) {
    this._syntymavuosi = newSyntymavuosi;
  }
}

class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    omaPaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this._linkkiKuvaan = linkkiKuvaan;
    this._omaPaino = omaPaino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }

  // Linkki kuvaan
  get linkkiKuvaan() {
    return this._linkkiKuvaan;
  }

  set linkkiKuvaan(newLinkkiKuvaan) {
    this._linkkiKuvaan = newLinkkiKuvaan;
  }

  // Oma paino
  get omaPaino() {
    return this._omaPaino;
  }

  set omaPaino(newOmaPaino) {
    this._omaPaino = newOmaPaino;
  }

  // Laji
  get laji() {
    return this._laji;
  }

  set laji(newLaji) {
    this._laji = newLaji;
  }

  // Saavutukset
  get saavutukset() {
    return this._saavutukset;
  }

  set saavutukset(newSaavutus) {
    this._saavutukset = newSaavutus;
  }
}

module.exports = Urheilija;