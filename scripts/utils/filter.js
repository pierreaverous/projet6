/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


const button = document.getElementById('arrow-populaire');

// Close the dropdown menu if the user clicks outside of it
button.addEventListener('click' , function() {
  /* console.log(button) */
  let dropdowns = document.getElementById("myDropdown");
  dropdowns.classList.toggle("show")
  button.classList.toggle('hide')
  
    
    
    
  })
  