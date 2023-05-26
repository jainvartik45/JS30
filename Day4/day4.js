
var modal = document.getElementById("myModal");

function testResults(form){
    
    var city = form.city.value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c58fb21a5fb12a3640845008d53d3bf`)
  .then(response => response.json()) // Parse response as JSON
  .then(data => {
    // Handle the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.log('An error occurred:', error);
  });

  form.city.value = "";

  

  modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }




