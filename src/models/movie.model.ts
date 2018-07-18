export class MovieModel {
    private _sinopsis:string;
    private _puntaje: number;
    _titulo: string;
    _genero: string;
    _frase: string;
    _autor: string;
    _clasificacion: string;
    _disponible: boolean;
    _estreno: number;
    _url: string;
    _gusto: boolean;
    _favorita: boolean;
    _minduracion: string;

  constructor(_titulo:string, _genero: string, _frase:string, _autor:string, _clasificacion:string) {
    this._titulo = _titulo;
    this._genero = _genero;
    this._frase = _frase;
    this.autor = _autor;
    this._clasificacion = _clasificacion;
  }
  get titulo(): string {
      return this._titulo;
  }
  set titulo(_titulo:string){
      this._titulo= _titulo;
  }
  get genero(): string{
      return this._genero;
  }
  set genero(_genero:string) {
      this._genero = _genero;
  }
  get frase(): string {
      return this._frase;
  }
  set frase(_frase:string) {
      this._frase = _frase;
  }
  set autor(_autor:string) {
    this._autor=_autor;
  }
  get autor() {
    return this._autor;
  }
  get sinopsis():string {
      return this._sinopsis;
  }
  set sinopsis(_sinopsis:string) {
      this._sinopsis = _sinopsis;
  }
  get puntaje(): number {
      return this._puntaje;
  }
  set puntaje(_puntaje:number) {
    if (_puntaje <= 10 && _puntaje > 0)
    {
        this._puntaje=_puntaje;
    }
  }
  get clasificacion(): string {
    return this._clasificacion;
  }
  set clasificacion(_clasificacion:string) {
      this._clasificacion = _clasificacion;
  }
  get disponible(): boolean {
    return this._disponible;
  }
  set disponible(_disponible:boolean){
    this._disponible = _disponible;
  }
  get estreno():number {
      return this._estreno;
  }
  set estreno(_estreno:number) {
      this._estreno = _estreno;
  }
  get url(): string {
    return this._url;
  }
  set url(_url : string) {
    this._url = _url;
  }
  get gusto(): boolean {
    return this._gusto;
  }
  set gusto(_gusto:boolean){
    this._gusto = _gusto;
  }
  get favorita(): boolean {
    return this._favorita;
  }
  set favorita(_favorita:boolean){
    this._favorita = _favorita;
  }
  get minduracion():string {
      return this._minduracion;
  }
  set minduracion(_minduracion:string) {
      this._minduracion = _minduracion;
  }
}
