let active = document.querySelectorAll('active-show');
let navLink = document.querySelectorAll('.nav-link');
let tabPane = document.querySelectorAll('.tab-pane');

let re = /(#[a-z0-9]+)/;

navLink.forEach(link => {
  link.addEventListener("click", function(event) {
    let showClass = "active-show"

    // Reset all the classes so none are showing
    navLink.forEach(link => link.classList.remove(showClass))
    tabPane.forEach(link => link.classList.remove(showClass))

    // Get the id of the tab to show from the link
    // let hrf = re.exec(link.href)[1];
    let id = new URL(link).hash
    
    // Add the active class to the clicked link and tab
    document.querySelector(id).classList.add(showClass)
    link.classList.add(showClass)

    // Prevent the browser from jumping to the id
    event.preventDefault()
  });

});
