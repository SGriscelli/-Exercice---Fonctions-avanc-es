const people = [
    "JoHn",
    "ChrISTiana",
    "anThoNY",
    "MARia",
    "jaMeS",
    "MIChaEl",
    "jeNNIFeR",
  ];
  
  const capitalizedPeople = people.map(
    (person) => person.charAt(0).toUpperCase() + person.slice(1).toLowerCase()
  );
  console.log(capitalizedPeople);