const students = [
  {
    name: 'Nam',
    age: 24,
    gender: 'male',
  },
  {
    name: 'Mai',
    age: 22,
    gender: 'female',
  },
  {
    name: 'Trang',
    age: 23,
    gender: 'female',
  },
  {
    name: 'An',
    age: 20,
    gender: 'male',
  },
  {
    name: 'Thien',
    age: 27,
    gender: 'male',
  },
];

let countnam = 0;
let countnu = 0;

students.forEach(element => {
        if (element.gender === "male")
        countnam++;
        else 
        countnu++;
        
});

console.log('So luong hs nam la: ' + countnam);
console.log('So luong hs nu la: ' + countnu);

const newstudents = students.map(element => element.name);

console.log(newstudents);

