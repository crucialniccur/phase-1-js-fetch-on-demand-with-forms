const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(event.target.children[1].value);
    const input = document.querySelector("#searchByID");
    console.log(input.value);

    fetch("http://localhost:3001/movies").then((response) => response.json());
  });
};

document.addEventListener("DOMContentLoaded", init);
