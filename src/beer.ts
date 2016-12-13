export class Beer {
  constructor(private name: string, private alcohol: number) {
  }

  display(): string {
    return `Bière ${this.name} - ${this.alcohol}°`;
  }
}