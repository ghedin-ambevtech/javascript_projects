const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
  // get number random 0 - 3
  const randomNumber = getNumberRandom();
  console.log(randomNumber);
  // change background color
  document.body.style.backgroundColor = colors[randomNumber]
  // change text of color
  color.textContent = colors[randomNumber]
})


function getNumberRandom(){
    return Math.floor(Math.random() * colors.length)
}