


//oop - class >>> object


// class Animal {
//   name: string;
//   species: string;
//   sound: string;

// constructor (name: string,  species: string, sound: string){
// this.name = name
// this.sound = sound
// this.species = species
// }


// makeSound (){
//     // console.log(`The animal is making sound`);
//      console.log(`${this.name}  is making sound ${this.sound}`);
// }

// }


//patrameter properties


class Animal {

  constructor(public name: string, public species: string, public sound: string) {
   
  }




  makeSound() {
    console.log(`${this.name} is making  sound: ${this.sound}`);
  }
}





const dog = new Animal("dogesh bhai", "dog", "ghew ghew");



const cat = new Animal("Cat bhai", "Cat", "meaw meaw")


//  console.log(cat.sound)

cat.makeSound()
// console.log(dog.name)
//  console.log(cat.makeSound())
 dog.makeSound()






// function add (num1: number,num2:number){

// }

// add (2,3)