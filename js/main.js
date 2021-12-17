let btnPobierzDane = document.getElementById("get-data");

const getData = () => {
  fetch("https://akademia108.pl/api/ajax/get-post.php")
    .then((response) => response.json())
    .then((data) => {
      let parUserId = document.createElement("p");
      let parId = document.createElement("p");
      let parTitle = document.createElement("p");
      let parBody = document.createElement("p");

      parUserId.innerText = `User ID: ${data.userId} `;
      parId.innerText = `ID: ${data.id}`;
      parTitle.innerText = `Title: ${data.title}`;
      parBody.innerText = `Body: ${data.body}`;

      document.body.appendChild(parUserId);
      document.body.appendChild(parId);
      document.body.appendChild(parTitle);
      document.body.appendChild(parBody);
    });
  // .catch(error => {
  //   console.error(error);
  // })
};

btnPobierzDane.addEventListener("click", getData);
