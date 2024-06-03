const obiect1 = {
  jobA: {
    company: "ING backoffice",
    employeeId: 1903,
    taxPayer: true,
    workYears: 3,
  },

  jobD: {
    company: "Garanti recuperari",
    employeeId: 504,
    taxPayer: true,
    workYears: 2,
  },

  jobB: {
    company: "BCR credite",
    employeeId: 1935,
    taxPayer: true,
    workYears: 4,
  },

  somer: {
    company: "frecat manganu acasa",
    employeeId: null,
    taxPayer: false,
    workYears: 7,
  },

  jobC: {
    company: "MaxBet Pariuri sportive",
    employeeId: 1905,
    taxPayer: true,
    workYears: 4,
  },
};

console.log(obiect1);
console.log('_____________________________for clasic____')
//EX1: itereaza prin obiect1 cu for clasic, apoi cu for...in, apoi cu for...of, afisand de fiecare data in console.log valoarea fiecarei proprietati. 
//     explicatii ajutatoare: Sunt 5 proprietati in obiect1: jobA, jobB, jobC, jobD si somer. fiecare proprietate contine o valoare de tip obiect, care contine si ea 
//     la randul ei mai multe proprietati. Pentru fiecare proprietate dai un console.log cu tot obiectu. atat. 

for(let i=0; i<5; i++){
    console.log(obiect1['jobA'])
}
console.log('_____________________________for...in____')
for(let job in obiect1){
    console.log(obiect1[job])
}

console.log('_____________________________for...of____')
for(let [key, value] of Object.entries(obiect1)){
    console.log(key, value)
}

//EX2: returneaza 
//// FUNCTII
// fa o functie care returneaza suma anilor lucrati (aduni valorile din workYears de la toate joburile, mai putin de la somer. filtreaza dupa proprietea "taxPayer: true")
// functia primeste ca parametru un obiect 'obiectu1' va returna un singur numar care e suma. apoi o pui in console.log(getSumOfYears())
//scrie functia in cele 3 feluri:

//function declaration
function getSumOfYears1(){}

// function expression
const getSumOfYears2 = function (){}

// si lambda function (arrow function)
const getSumOfYears3 = () => {}