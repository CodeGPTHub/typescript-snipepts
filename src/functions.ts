// Optional function parameters
function greet(message: string, name?: string): void {
  console.log(message + (name ? ", " + name : ""));
}

greet("Hello"); // Output: "Hello"
greet("Hello", "John"); // Output: "Hello, John"

// Default function parameters
function multiply(a: number, b: number = 2): number {
  return a * b;
}

multiply(5); // Output: 10
multiply(5, 4); // Output: 20
