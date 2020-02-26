import Point from "./Point";
import Line from "./Line";

function countLineOccurrences(points: Array<Point>): Map<string, number> {
  const counts = new Map<string, number>();
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const line = new Line(points[i], points[j]);
      const currentCount = counts.get(line.toString()) || 0;
      counts.set(line.toString(), currentCount + 1);
    }
  }
  return counts;
}

function findAllLines(points: Array<Point>): Array<string> {
  const counts = countLineOccurrences(points);
  return Array.from(counts.entries())
    .filter(([_, num]) => {
      return num > 1;
    })
    .map(([line]) => line);
}

// run example and print output

const TEST_INPUT = [
  [0, 0],
  [6, 10],
  [1, 1],
  [3, 5],
  [4, 4],
  [2, 2],
  [1, 2],
  [1, 3]
];
// @ts-ignore
console.log(findAllLines(TEST_INPUT));
