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

  constructor(_titulo:string, _genero: string, _frase:string, _autor:string, _clasificacion:string) {
    this._titulo = _titulo;
    this._genero = _genero;
    this._frase = _frase;
    this.autor = _autor;
    this._clasificacion = _clasificacion;
  }
  get titulo(): string {
      return _titulo;
  }
  set titulo(_titulo:string){
      this._titulo= _titulo;
  }
  get genero(): string{
      return _genero;
  }
  set genero(_genero:string) {
      this._genero = _genero;
  }
  get frase(): string {
      return _frase;
  }
  set frase(_frase:string) {
      this._frase = frase;
  }
  set autor(_autor:string) {
    this._autor=_autor;
  }
  get autor() {
    return _autor;
  }
  get sinopsis():string {
      return _sinopsis;
  }
  set sinopsis(_sinopsis:string) {
      this._sinopsis = _sinopsis;
  }
  get puntaje(): number {
      return _number;
  }
  set puntaje(_puntaje:number) {
    if (_puntaje <= 10 && _puntaje > 0)
    {
        this._puntaje=puntaje;
    }
  }
  get clasificacion(): string {
    return this._clasificacion;
  }
  set clasificacion(_clasificacion:string) {
      this._clasificacion = _clasificacion;
  }
  get disponible(): boolean {
    return _disponible;
  }
  set disponible(_disponible:boolean){
    this._disponible = _disponible;
  }
  get estreno():number {
      return _estreno;
  }
  set estreno(_estreno:number) {
      this._estreno = _estreno;
  }
  get url(): string {
    return _url;
  }
  set url(_url : string) {
    this._url = _url;
  }
}
