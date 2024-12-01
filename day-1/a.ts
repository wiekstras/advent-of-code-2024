import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day1a(data: string[]) {
  //Split the numbers in a list left and right
  //Then sort the numbers
  //Then calculate the difference between left (right - left) difference.
  data.pop()

  const rowLeft = [];
  const rowRight = [];

  //Split numbers then add them to the correct row
  data.map((numbers) => {
    rowLeft.push(numbers.split(" ")[0])
    rowRight.push(numbers.split(" ")[3])
  });

  //sorting
  rowLeft.sort();
  rowRight.sort();

  //Comparing
  let finalNumber = 0;
  rowRight.map((numberRight, index)=>{
    //Math.abs to turn negative into positive.
    finalNumber += Math.abs((numberRight-rowLeft[index]))
  });
  return finalNumber;
}

await runSolution(day1a);
