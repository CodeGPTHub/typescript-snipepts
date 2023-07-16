// Class and inheritance
class Animal {
  constructor(public name: string) {}
  
  makeSound(): void {
    console.log("Animal is making a sound.");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Dog is barking.");
  }
}

const dog: Dog = new Dog("Buddy");
console.log(dog.name); // Output: "Buddy"
dog.makeSound(); // Output: "Dog is barking."
