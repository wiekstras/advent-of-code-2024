import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day1b(data: string[]) {
  //Split the numbers in each row.
  //Check how many times a number exist in the right row
  //Then do that times the number of the left list
  // Add that number and return

  data.pop()

  const rowLeft = [];
  const rowRight = [];

  //Split numbers then add them to the correct row
  data.map((numbers) => {
    rowLeft.push(numbers.split(" ")[0])
    rowRight.push(numbers.split(" ")[3])
  });

  let result = 0;

  //Map over the left number
  rowLeft.map((rowLeftNumber) => {
    //Create count let to keep track of the amount of times the left number exists in the right list.
    let count = 0
    //Filter over the right row.
    rowRight.filter((rowRightNumber)=>{

      //If the numbers are the same up the count.
     if(rowRightNumber === rowLeftNumber){
       count++;
     }
    })

    //Calculate and add to result.
    result += (count * rowLeftNumber);
  })

  return result;
}

await runSolution(day1b);
