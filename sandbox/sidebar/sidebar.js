document.onscroll = function() {
  let scrollP = document.documentElement.scrollTop || document.body.scrollTop;
  let navBkgnd = document.getElementsByClassName("sidebar-mobile-header")[0];
  console.log(navBkgnd);

  let headerEnd = document.getElementsByClassName("page-header-al")[0].offsetHeight;
  console.log(headerEnd);

  let navBarHeight = navBkgnd.offsetHeight
  console.log(navBarHeight);

  let mainStart = headerEnd - navBarHeight
  console.log(mainStart);

  if (scrollP < mainStart) {
    navBkgnd.style.backgroundColor = "rgba(0, 0, 0, 0)"
  } else {
    navBkgnd.style.backgroundColor = "rgba(0, 0, 0, 1)"
  }

}
