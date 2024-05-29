
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
    for (let [key, value] of Object.entries(userData.workExperience[job])) {
      message += `${key} : ${value} \n\n`;
    } 
  } 
  return message;
};

console.log(getCompanyAndStartDate());
