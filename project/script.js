// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



function loadModal(title, thumb, body, launchLink) {
  // Reference modal elements
	var modalTitle = document.querySelector(".modal-title");
	var modalThumb = document.querySelector(".modal-thumb img");
	var modalBody = document.querySelector(".modal-body");
	var modalFooterLink = document.querySelector(".modal-footer a");

  // Dynamically fill content of modal with function call
  modalTitle.innerHTML = title;
  modalThumb.src = "img/portfolio-screen-shots/" + thumb;
  modalBody.innerHTML = body;
  modalFooterLink.setAttribute("href", launchLink);
}


// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Fetch form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form data (you can add your own validation logic here)

    // Send email using EmailJS
    emailjs.send('service_mpaov8e', 'template_7yjcncc', {
        from_name: name,
        from_email: email,
        message: message
    }, 'Ojasvi Doye')
        .then(function (response) {
            console.log('Email sent successfully!', response);

            // Clear form inputs
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';

            // Display success message
            alert('Thank you for your message!');
        })
        .catch(function (error) {
            console.error('Error sending email:', error);
            alert('There was an error sending your message. Please try again later.');
        });
});
