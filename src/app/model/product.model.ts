export class Product {
  public id: string;
  public name: string;
  public description: string;
  public currentPrice: string;
  public lastUpdated: number;

  constructor() {
    this.id = '';
    this.name = '';
    this.description = '';
    this.currentPrice = '';
    this.lastUpdated = Date.now();
  }
}
