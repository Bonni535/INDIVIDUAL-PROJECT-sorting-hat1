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