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
    if (
      this.sideOne != 0 &&
      this.sideOne === this.sideTwo &&
      this.sideTwo === this.sideThree
    ) {
      return true;
    } else {
      return false;
    }
  }

  get isIsosceles() {
    if (
      this.sideOne === this.sideTwo ||
      this.sideTwo === this.sideThree ||
      this.sideThree === this.sideOne
    ) {
      if (
        this.sideOne > this.sideTwo + this.sideThree ||
        this.sideThree > this.sideTwo + this.sideOne ||
        this.sideTwo > this.sideThree + this.sideOne
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  get isScalene() {
    if (this.sideOne > this.sideTwo + this.sideThree||
      this.sideOne === this.sideTwo ||
      (this.sideOne === this.sideTwo && this.sideTwo === this.sideThree)
    ) {
      return false;
    } else {
      return true;
    }
  }
}
