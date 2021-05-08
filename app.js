function bgChanger() {
  console.log(this.scrollY);
  if (this.scrollY > this.innerHeight / 2) {
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
}

window.addEventListener("scroll", bgChanger);
