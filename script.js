const studentsData = [
  {
    name: "Rajesh Kushwaha",
    class: "5th",
    marks: "50%",
    Address: "AWB,VXS, Jaipur",
  },
  {
    name: "Shikha Gupta",
    class: "6th",
    marks: "60%",
    Address: "AWB,VXS,Uttar Pradesh",
  },
  {
    name: "Neelam Singh",
    class: "7th",
    marks: "80%",
    Address: "AWB,VXS,Rajashthan",
  },
  {
    name: "Pawan Thakur",
    class: "8th",
    marks: "80%",
    Address: "AWB,VXS,Punjab",
  },
  {
    name: "Meera Pal",
    class: "9th",
    marks: "90%",
    Address: "ACC,XYZ,Gujrat",
  },
  {
    name: "Anil Kumar",
    class: "9th",
    marks: "70%",
    Address: "AWB,VXS,Unnao",
  },
  {
    name: "Pooja Verma",
    class: "10",
    marks: "50%",
    Address: "AWB,VXS,Lucknow",
  },
  {
    name: "Mohan Gupta",
    class: "8th",
    marks: "90%",
    Address: "AWB,VXS,Mumbai",
  },
  {
    name: "Neelakshi",
    class: "6th",
    marks: "60%",
    Address: "AWB,VXS,Raipur",
  },
  {
    name: "Kamal Kishore",
    class: "9th",
    marks: "50%",
    Address: "AWB,VXS,Tamilnadu",
  },
  {
    name: "Pawan",
    class: "8th",
    marks: "90%",
    Address: "Delhi",
  },
  {
    name: "Neeta Shrivastav",
    class: "11th",
    marks: "82%",
    Address: "Allahabad",
  },
];

const container = document.getElementById("card");

const htmlContent = studentsData
  .map(
    (user) => ` 
    <div class="card" style="border: 1px solid #ccc; margin:10px; padding: 10px;">
        <div class="stu_detail"><p>Student's Name:</p><h4>${user.name}</h4></div>
        <div class="stu_detail"><p>Class:</p><h4> ${user.class}</4></div>
       <div class="stu_detail"> <p>Marks:</p><h4>Marks: ${user.marks}</h4></div>
       <div class="stu_detail"><p>Address:</p><h4>${user.Address}</h4></div>
    </div>
`,
  )
  .join("");

console.log(studentsData);

container.innerHTML = htmlContent;

const user = document.getElementById("searchElement");
const buttonElement = document.getElementById("searchButton");
const searchText = document.getElementById("search_loading_text");

function search_user() {
  /* apply button event listener on click */
  buttonElement.addEventListener("click", function () {
    console.log(user);
    const InputText = user.value;
    console.log(InputText);
    searchText.innerHTML = `<h1>Search Results for ${InputText}...</h1>:`;
     /* filter the data according to input text */
    const filterData = studentsData.filter((ele) => {
      console.log(ele.name);
      return ele.name.startsWith(InputText);
    });
   
    const filterContent = filterData
      .map(
        (user) => ` 
    <div class="card" style="border: 1px solid #ccc; margin:10px; padding: 10px;">
        <div class="stu_detail"><p>Student's Name:</p><h4>${user.name}</h4></div>
        <div class="stu_detail"><p>Class:</p><h4> ${user.class}</4></div>
       <div class="stu_detail"> <p>Marks:</p><h4>Marks: ${user.marks}</h4></div>
       <div class="stu_detail"><p>Address:</p><h4>${user.Address}</h4></div>
    </div>
`,
      )
      .join("");
    container.innerHTML = filterContent;

    console.log(filterData);
  });
}

search_user();
