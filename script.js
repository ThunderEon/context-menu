const container = document.querySelector(".container");
const social = document.querySelector(".social");


document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let windWidth = window.innerWidth;
  let windHeight = window.innerHeight;
  let x = e.offsetX;
  let y = e.offsetY;


  if(x > (windWidth - container.offsetWidth - 150 ))
  {
    social.style.left = "-150px";
  }else{
    social.style.left = "15px";
  }

  x =
    x > windWidth - container.offsetWidth
      ? windWidth - container.offsetWidth
      : x;

      y =
      y > windHeight - container.offsetWidth
        ? windHeight - container.offsetWidth
        : y;

  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
  container.style.visibility = "visible";
});

document.addEventListener("click", (e) => {
  container.style.visibility = "hidden";
});
