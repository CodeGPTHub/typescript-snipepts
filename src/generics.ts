// Generic function
function printArray<T>(array: T[]): void {
  array.forEach(item => console.log(item));
}

printArray<string>(["Hello", "World"]); // Output: "Hello", "World"

// Generic interface
interface KeyValue<K, V> {
  key: K;
  value: V;
}

const pair: KeyValue<number, string> = { key: 1, value: "one" };
