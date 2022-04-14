let siteScrolled = 0;
navBar = document.getElementById('nav-bar');
window.addEventListener("scroll", ()=>{
  let scrolledUp = window.pageYOffset || document.documentElement.scrolledUp;
  if (scrolledUp > siteScrolled){
    navBar.style.top = "-80px"; 
  } else {
    navBar.style.top = "0";
  }
  siteScrolled = scrolledUp;
})
