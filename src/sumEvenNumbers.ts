/**
 * Calculates the sum of all even numbers in an array
 * @param numbers An array of numbers to process
 * @returns The sum of all even numbers in the array
 */
export function sumEvenNumbers(numbers: number[]): number {
    let sum = 0;
    
    for (const num of numbers) {
        if (num % 2 === 0) sum += num;
    }
    
    return sum;
}
