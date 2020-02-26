import { X, Y } from "./constants";
import Point from "./Point";

function orderPoints(a1: Point, a2: Point): { a1: Point; a2: Point } {
  if (a1[X] > a2[X]) {
    return { a1, a2 };
  }
  return {
    a1: a2,
    a2: a1
  };
}

class Line {
  m: number = 0;
  b: number = 0;
  // special case where the line is vertical
  x: number | null = null;

  constructor(a1Input: Point, a2Input: Point) {
    const { a1, a2 } = orderPoints(a1Input, a2Input);
    if (a1[X] === a2[X]) {
      this.x = a1[X];
    } else {
      this.m = (a2[Y] - a1[Y]) / (a2[X] - a1[X]);
      // y = mx + b
      // b = y - mx
      this.b = a1[Y] - this.m * a1[X];
    }
  }

  toString(): string {
    if (this.x !== null) {
      return `x = ${this.x}`;
    }
    const mIdentifier = this.m === 1 ? "" : this.m;
    const bIdentifier = this.b === 0 ? "" : this.b;
    return `y = ${mIdentifier}x${bIdentifier ? " + " : ""}${bIdentifier}`;
  }
}

export default Line;
