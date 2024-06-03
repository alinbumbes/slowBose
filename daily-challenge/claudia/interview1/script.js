
const user = {
  name: "gigiel",
  occupation: "frecator de menta",
  company: "ING backoffice",
  atributions: ["spalator", "instalator", "electrician", "secretar"],
  accessCodes: {
    ganitor: 24,
    security: 46,
    level: 78,
  },
};

//ex 1:
// afisez in consola stringul. Asta e toata rezolvarea.
console.log(`Ex1: Atributiile lui gigiel sunt: ${user.atributions.join(", ")}`);

//  EXTRA BONUS: pun rezultatul intr-o functie ca sa o apelam ulterior
// function getAttr() {
//   return `Atributiile lui gigiel sunt: ${user.atributions.join(", ")}`;
// }
// console.log(getAttr());

// ------------------------------------------
// iterez prin proprietatile obiectului (user e un obiect, dar user.accessCodes e si el un obiect in obiect)
// si returnez un array cu toate valorile lui
const getAccessCodes = () => {
  const list = [];
  for (let code in user.accessCodes) {
    list.push(user.accessCodes[code]); // asta [] e a 2a metoda de a apela un obiect, prima e cu punct (obj.key)
  }
  return list;
};
console.log(`\nEx1.1:`);
console.log(getAccessCodes())
// ------------------------------------------

const userData = {
  personalInfo: {
    name: "John Doe",
    age: 35,
    gender: "male",
    email: "john.doe@example.com",
    phone: "+1 555-555-5555",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  },
  education: [
    {
      school: "University of Anytown",
      degree: "Bachelor of Science",
      major: "Computer Science",
      graduationYear: 2010,
    },
    {
      school: "Anytown Community College",
      degree: "Associate of Arts",
      major: "General Studies",
      graduationYear: 2008,
    },
  ],
  workExperience: [
    {
      company: "Acme Corp",
      title: "Software Engineer",
      startDate: "2015-06-01",
      endDate: "2020-12-31",
      responsibilities: [
        "Developed and maintained web applications",
        "Collaborated with cross-functional teams",
        "Implemented new features and bug fixes",
      ],
    },
    {
      company: "Globex Inc",
      title: "Junior Developer",
      startDate: "2012-03-15",
      endDate: "2015-05-31",
      responsibilities: [
        "Assisted senior developers with coding tasks",
        "Performed code reviews and testing",
        "Contributed to documentation efforts",
      ],
    },
  ],
  skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"],
  interests: ["Reading", "Hiking", "Photography", "Traveling"],
};

// ex2: iterez prin obiect si returnez date
console.log('\nEx 2:')
const companyStartDate = () => {
    for(let job in userData.workExperience){
        console.log(userData.workExperience[job].startDate)
    }
};

companyStartDate();
console.log('\nEx 2.1:')
//ex 2.1: afisez si numele companiei, si cand a inceput munca acolo. deci valori din company si startDate
































const getCompanyAndStartDate = () => {
  let message = ``;
  for (let job in userData.workExperience) {
//aici iteram prin valoarea proprietatii 'workExperience' din obiectul 'userData'
//userData.workExperience contine 1 array cu 2 obiecte.
//cu 'for (let job in userData.workExperience)' iteram prin acel array cu 2 obiecte.
// ce inseamna sa iteram ?in prima iteratie variabila job = 0.
// a doua iteratie, variabila job =  1
// a 3a iteratie nu va mai exista pentru ca structura for...in trece printr-un array 
//de atatea ori cat este lungimea array-ului. 
//(array.length() = 2, atunci si for...in trece de 2 ori prin userData.workExperience)

//in prima iteratie ajungem la al 2lea for, care e un for...of. citeste diferentele pe MDN
//acest for STIE de existenta variabilei 'job' de mai sus. 
//noi vrem sa trecem prin tot obiectul care se afla la pozitia userData.workExperience[job].
//deci in prima iteratie job= 0 si noi vrem  cu for ul de jos sa trecem prin :
// OBIECTUL care se afla la pozitia 0: adica userData.workExperience[0], deci prima pozitie
// cum iteram printr-un obiect daca obiectele NU SUNT ITERABILE? Object.entries().
// deci Object.entries() transforma orice obiect intr-un array de array uri. 
// const obj1 = {a:0, b:1}
//Object.entries(obj1) returneaza : [[a, 0], [b, 1]] . deci un array de array uri.
// de ce vrem sa transformam un obiect intr-un array de array uri ? 
//ca sa putem itera prin el cu for.

console.log(userData.workExperience[job])
// console.log(userData.workExperience[0])
    for (let [key, value] of Object.entries(userData.workExperience[job])) {
      message += `${key} : ${value} \n\n`;
    } 
  } 
  return message;
};

console.log(getCompanyAndStartDate());
