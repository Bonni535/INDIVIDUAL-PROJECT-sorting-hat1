console.log("H.P.");

const students = [
    {
      id: 0,
      name: "Hermione Granger",
      house: "Gryffondor",
    },
  
    {
      id: 1,
      name: "Cedric Diggory",
      house: "Hufflepuff",
    },
  
    {
      id: 2,
      name: "Luna Lovegood",
      house: "Ravenclaw",
    },

    {
      id: 3,
      name: "Draco Malfoy",
      house: "Slytherin",
    },
  ];
  const studentsDeleted = []


const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const filter = (array, houseString) => {
  const houseArray = [];

  for (const student of array) {
    if (student.house === houseString) {
       houseArray.push(student);
    }
  }

  return houseArray;
}

const showAllHousesButton = document.querySelector("#allHouses-btn");
  const showGryffondorButton = document.querySelector("#gryffondor-btn");
  const showSlytherinButton = document.querySelector("#slytherin-btn");
  const showHufflepuffButton = document.querySelector("#hufflepuff-btn");
  const showRavenclawButton = document.querySelector("#ravenclaw-btn");
  showAllHousesButton.addEventListener('click', () => {
    cardsOnDom(students, '#cards');
    cardsOnDom(studentsDeleted, '#cards-deleted');
  });
  showGryffondorButton.addEventListener('click', () => {
    const gryffondorStudents = filter(students, 'gryffondor');
    cardsOnDom(students, '#cards');
  });
  showSlytherinButton.addEventListener('click', () => {
    const slytherinStudents = filter(students, 'slytherin');
    cardsOnDom(students, '#cards');
  });
  showHufflepuffButton.addEventListener('click', () => {
    const hufflepuffStudents = filter(students, 'hufflepuff');
    cardsOnDom(students, '#cards');
  });
  showRavenclawButton.addEventListener('click', () => {
    const ravenclawStudents = filter(students, 'ravenclaw');
    cardsOnDom(students, '#cards');
  });

const cardsOnDom = (array, divId) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">${student.house}</p>
        <a href="#" class="btn btn-primary" id="delete--${student.id}">Delete</a>
      </div>
    </div>`;
  }
  renderToDom(divId, domString);
};


const randomHouse = () => {
  const houses= ["Gryffondor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  return houses[Math.floor(Math.random() *4)];

}

const createStudent = (e) => {
  e.preventDefault();
  const newStudent = {
    id: students.length +1,
    name: document.querySelector ("#new-name").value,
    house: randomHouse(), 
   }
   students.push(newStudent);
   cardsOnDom(students, '#cards');
   form.reset();
}

const form = document.querySelector('form');

form.addEventListener ('submit', createStudent);

cards.addEventListener('click', (e) => {
    
  if (e.target.id.includes("delete")) {
    console.log(e.target.id);
    const[, id] = e.target.id.split("--");


    const index = students.findIndex(student => student.id === Number(id));
    studentsDeleted.push(students[index])
    students.splice(index, 1);

    cardsOnDom(students, '#cards');
    cardsOnDom(studentsDeleted, '#cards-deleted');


  }
  
})



const startApp = () => {
  cardsOnDom(students, '#cards');
};

startApp();
