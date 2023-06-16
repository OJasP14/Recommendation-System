var slideIndex = 1;
showSlide(slideIndex);

var timer = setInterval(function() {
  nextSlide();
}, 5000);

function nextSlide() {
  clearInterval(timer);
  showSlide(slideIndex += 1);
  timer = setInterval(function() {
    nextSlide();
  }, 5000);
}

function prevSlide() {
  clearInterval(timer);
  showSlide(slideIndex -= 1);
  timer = setInterval(function() {
    nextSlide();
  }, 5000);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  var timer = document.getElementsByClassName("timer")[0];
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  timer.textContent = slideIndex + " / " + slides.length;
}






 // Function to display the current page of products
 function displayPage(pageNumber) {
  var rows = document.getElementsByClassName("product-row");

  // Hide all rows
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.display = "none";
  }

  // Calculate the range of rows to display
  var startIndex = (pageNumber - 1) * 50;
  var endIndex = startIndex + 50;

  // Display the selected rows
  for (var j = startIndex; j < endIndex && j < rows.length; j++) {
    rows[j].style.display = "table-row";
  }

  // Update the page number
  document.getElementById("page-number").textContent = "Page " + pageNumber;
}


// Variables to track the current page and total number of pages
var currentPage = 1;
var totalPages = Math.ceil(241071 / 50);

// Function to go to the previous page
function goToPreviousPage() {
  if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
  }
}

// Function to go to the next page
function goToNextPage() {
  if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage);
  }
}

// Initial display of the first page
window.onload = function () {
  displayPage(currentPage);
};












const footer = document.querySelector('.footer');
footer.addEventListener('click', function() {
    alert('You clicked the footer!');
});














document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  
  // Send form data to the server (you need to implement the server-side handling)
  // For example, using AJAX or Fetch API
  
  // Reset form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
  
  // Display a confirmation message (optional)
  alert('Thank you for contacting us! We will get back to you soon.');
});

