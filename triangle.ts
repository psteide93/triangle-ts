export class Triangle {
  sideOne = 0;
  sideTwo = 0;
  sideThree = 0;
  constructor(sideOne: number, sideTwo: number, sideThree: number) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
  }

  get isEquilateral() {
    return (
      this.sideOne != 0 &&
      this.sideOne === this.sideTwo &&
      this.sideTwo === this.sideThree
    );
  }

  get isIsosceles() {
    return (
      (this.sideOne === this.sideTwo &&
        this.sideThree < this.sideTwo + this.sideOne) ||
      (this.sideTwo === this.sideThree &&
        this.sideOne < this.sideTwo + this.sideThree) ||
      (this.sideThree === this.sideOne &&
        this.sideTwo < this.sideThree + this.sideOne)
    );
  }

  get isScalene() {
    return (
      this.sideOne < this.sideTwo + this.sideThree &&
      this.sideOne != this.sideTwo &&
      this.sideOne != this.sideTwo &&
      this.sideTwo != this.sideThree
    );
  }
}
