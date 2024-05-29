var a = 1;
console.log(a);

// >2015 ES6 let + const
// var este function scoped
// let este block scoped
//
var x = 2;

function fc() {
  let sum = 2 + x;
  if (sum > 1) {
    var c = 5;
  }
  console.log(c);
}
fc();

//var este hoisted. let si const nu este hoisted
console.log(b);
var b = 5;

let arr = [2, 3, [4, 5]];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "number") {
    console.log(arr[i] + 1);
  } else {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j] + 1);
    }
  }
}



let arr2 = [...arr.flat(), 9]
console.log(arr2)

// let arr3 = [ ...arr, 9]
// console.log(arr3)

const obj = {
a : 2,
b : function(){
    console.log(this.a)
}
}
obj.b();

const user = {
    name: 'gigiel',
    occupation: 'frecator de menta',
    company: 'ING backoffice',
    atributions: ['spalator', 'instalator', 'electrician', 'secretar'],
    accessCodes: {
        'ganitor': 24,
        'security': 46,
        'level': 78
    }
}


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
        zip: "12345"
      }
    },
    education: [
      {
        school: "University of Anytown",
        degree: "Bachelor of Science",
        major: "Computer Science",
        graduationYear: 2010
      },
      {
        school: "Anytown Community College",
        degree: "Associate of Arts",
        major: "General Studies",
        graduationYear: 2008
      }
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
          "Implemented new features and bug fixes"
        ]
      },
      {
        company: "Globex Inc",
        title: "Junior Developer",
        startDate: "2012-03-15",
        endDate: "2015-05-31",
        responsibilities: [
          "Assisted senior developers with coding tasks",
          "Performed code reviews and testing",
          "Contributed to documentation efforts"
        ]
      }
    ],
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "SQL",
      "Git"
    ],
    interests: [
      "Reading",
      "Hiking",
      "Photography",
      "Traveling"
    ]
  };