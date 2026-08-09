

// Generic Function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string }) => {
//   return [value];
// };


const createArrrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrrayWithGeneric("Apple");
const arrNum = createArrrayWithGeneric(22)
const arrObj = createArrrayWithGeneric({
    id: 123,
    name:"Next Level",
});

// console.log(arrString, arrNum, arrObj)


// const arrString = createArrayWithString("Apple");
// const arrNum = createArrayWithNumber(22)
// const arrObj = createArrayWithUserObj({
//     id: 123,
//     name:"Next Level",
// })



// tuple

const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];


const res1 = createArrayTupleWithGeneric("Mezba", false);

const res2 = createArrayTupleWithGeneric(222, { name: "Mezba" })

// console.log(res1, res2)


const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const result1 = addStudentToCourse(student2);
const result2 = addStudentToCourse(student1);
console.log(result1, result2);