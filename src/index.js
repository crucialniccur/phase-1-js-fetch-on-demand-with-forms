const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(event.target.children[1].value);
    const input = document.querySelector("input#searchByID");
    console.log(input.value);

    fetch(`http://localhost:3001/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
