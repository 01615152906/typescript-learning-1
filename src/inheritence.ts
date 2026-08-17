





class Person {
        name: string; // common
    age: number; // common
    address: string; // common


    constructor (name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
 // common
    getSleep(numOFhours: number){
        console.log(`${this.name} ${numOFhours} eto ghonta ghumai`);

    }
}
class Student extends Person{

     rollNo: number;  //  own property
    constructor ( name:string, age: number, address: string, rollNo: number){
      
super(name, age, address )

  this.rollNo = rollNo
    }

}


const student1 = new  Student("Mr.fakibaz", 18, "Bangladesh", 1981);


student1

// class Student {
//     name: string; // common
//     age: number; // common
//     address: string; // common


//     constructor (name: string, age: number, address: string){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//  // common
//     getSleep(numOFhours: number){
//         console.log(`${this.name} ${numOFhours} eto ghonta ghumai`);

//     }

    //     getSleep(){
    //     console.log(`${this.name} eto ghonta ghumai`);

    // }
// }

// const student1 = new  Student("Mr.fakibaz", 18, "Bangladesh");


// student1.getSleep()

// student1.getSleep(15);



// class Teacher {
//     name: string; // common
//     age: number; // common
//     address: string; // common
//     designation: string;  // extra own property




//     constructor (name: string, age: number, address: string,  designation: string){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.designation = designation;

//     }
// // common
//     getSleep(numOFhours: number){
//         console.log(`${this.name} ${numOFhours} eto ghonta ghumai`);

//     }
// // own method
//     takClass(numOfclass: number){
//         console.log(`${this.name} doinik ${numOfclass} ghonta class nei `)
//     }


// }
// const teacher1 = new Teacher("Mr.Smart Teacher", 25, "BAngladesh", "Senior teacher");
// teacher1.takClass(4);




class Teacher extends Person {

    designation: string;  // extra own property
    constructor ( name:string, age: number, address: string, designation: string){
      
super(name, age, address )

  this.designation = designation;
    }
// own method
    takClass(numOfclass: number){
        console.log(`${this.name} doinik ${numOfclass} ghonta class nei `)
    }


}





const teacher1 = new Teacher("Mr.Smart Teacher", 25, "BAngladesh", "Senior teacher");
