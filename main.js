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