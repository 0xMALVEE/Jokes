const btn = document.querySelector("a");
const h6 = document.querySelector("h6");

btn.addEventListener("click", handelClick);


function handelClick(e){
  e.preventDefault();
  getJoke();
  function getJoke(){
    fetch("http://api.icndb.com/jokes/random")
    .then(res => res.json())
    .then((data)=>{
      let jokes = data.value.joke;
      let id = data.value.id;
      h6.textContent = jokes;
    });
  }
}