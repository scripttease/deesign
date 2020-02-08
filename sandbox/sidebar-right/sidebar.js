document.onscroll = function() {
  let scrollP = document.documentElement.scrollTop || document.body.scrollTop;
  let navBkgnd = document.getElementsByClassName("sidebar-mobile-header")[0];
  console.log(navBkgnd);

  let headerEnd = document.getElementsByClassName("page-header-al")[0].offsetHeight;

  let navBarHeight = navBkgnd.offsetHeight

  let mainStart = headerEnd - navBarHeight

  if (scrollP < mainStart) {
    navBkgnd.style.backgroundColor = "rgba(0, 0, 0, 0)"
  } else {
    navBkgnd.style.backgroundColor = "rgba(0, 0, 0, 1)"
  }

}
