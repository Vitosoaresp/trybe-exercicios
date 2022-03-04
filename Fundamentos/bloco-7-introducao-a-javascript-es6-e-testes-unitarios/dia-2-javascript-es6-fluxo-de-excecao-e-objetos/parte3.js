const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (obj, key, value) => obj[key] = value;
addKey(lesson2, 'turno', 'noite');
console.table(lesson2);

const listKey = (obj) => Object.keys(obj);
console.log(listKey(lesson3));

const sizeObj = (obj) => Object.keys(obj).length;
console.log(sizeObj(lesson3));

const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson3));

let allLessons = {};
const agruop = () => {
  const obj1 = {lesson1};
  const obj2 = {lesson2};
  const obj3 = {lesson3};
  allLessons = Object.assign({}, obj1, obj2, obj3);
}
agruop();
console.log(allLessons);
let sumStudentsResult = 0;
const sumStudents = () => {
 const lesson1Students = allLessons.lesson1.numeroEstudantes;
 const lesson2Students = allLessons.lesson2.numeroEstudantes;
 const lesson3Students = allLessons.lesson3.numeroEstudantes;

  return sumStudentsResult = lesson1Students + lesson2Students + lesson3Students;
}
sumStudents();
console.log(sumStudentsResult);

const getValueByNumber = (obj,numb) => Object.values(obj)[numb];
console.log(getValueByNumber(lesson1, 0));


const verifyKeyValue = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyKeyValue(lesson2,'professor','Carlos'));
