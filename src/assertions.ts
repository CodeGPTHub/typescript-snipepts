// Type assertion for casting variables
const myVariable: any = "Hello TypeScript!";
const myLength: number = (myVariable as string).length;

// Type assertion for casting to a specific type
const myArray: any[] = [1, 2, 3, 4, 5];
const myNumbers: number[] = myArray as number[];
