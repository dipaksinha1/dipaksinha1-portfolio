const text = document.querySelector(".changing-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Full Stack Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Frontend Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Backend Developer";
  }, 8000); //1s = 1000 milliseconds
};
textLoad();
setInterval(textLoad, 12000);
