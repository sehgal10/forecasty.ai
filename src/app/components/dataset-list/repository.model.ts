export class Repository {
  public data: string;
  public source: string;
  public lastUpdate: string;

  constructor( obj ) {
      this.data = obj.data;
      this.source = obj.source;
      this.lastUpdate = obj.lastUpdate;
  } 
}