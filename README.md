<html>
<head>
    <title>Ojasvi Doye</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        :root {
  --background-color: #0a192f;
  --text-color: #8892b0;
  --accent-color: #64ffdb9b;
  --header-background: rgba(10, 25, 47, 0.8);
  --navbar-background: #0a192f;
  --navbar-text: #ccd6f6;
  --navbar-text-hover: #64ffdb9b;
  --project-background: #303C55;
  --project-info-background: rgba(255, 255, 255, 0.9);
}

/* Reset default styles */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body*/
body {
  font-family: 'Roboto';
  background-color: var(--background-color);
  position: relative; 
}

/* Header  */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: var(--header-background);
  padding: 20px;
  color: #fff;
  transition: background-color 0.3s;
}

header.scrolled {
  background-color: transparent;
}

body {
  padding-top: 60px; 
}

.topleft {
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 18px;
}

header {
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--navbar-background);
  padding: 20px;
  z-index: 999;
  transition: background-color 0.3s;
}

nav.nav-scrolled {
  background-color: transparent;
}


body {
  padding-top: 80px; 
}

.logo {
  color: var(--navbar-text);
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  font-family: monospace;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

nav ul li {
  display: inline-block;
  margin-left: 20px;
}

nav ul li:first-child {
  margin-left: 0;
}

nav ul li a {
  font-family: monospace;
  font-size: 25px;
  color: var(--navbar-text);
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s ease;
}

nav ul li a:hover {
  color: var(--navbar-text-hover);
}

.sticky-title {
  top: 0;
  background-color: var(--header-background);
  padding: 20px;
  color: #fff;
  z-index: 999;
  transition: background-color 0.3s;
}

/* Hero section*/
#hero {
  background-color: var(--background-color);
  padding: 200px 0;
  justify-content: flex;
  align-items: flex-start;
  padding-left: 15rem;
  height: 100%;

}
#hero img {
  width: 200px; 
  margin-left: 20px; 
  flex-direction: row;

}
#hero h1 {
  font-size: 120px;
  color: #ccd6f6;
}

#hero p {
  font-size: 50px;
  color: var(--text-color);
  padding: 15px;
}

#hero p.hello {
  font-size: 45px;
  font-family: monospace;
  color: var(--accent-color);
  padding: 10px;
}

button {
  background-color: var(--background-color);
  border: none;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  font-size: 25px;
  padding: 15px;
  border-radius: 12px;
  transition-duration: 0.4s;
}

button:hover {
  color: var(--background-color);
  background-color: var(--accent-color);
}

/* About */
#about {
  padding: 100px 0;
  text-align: center;
}

#about h2 {
  font-size: 40px;
  margin-bottom: 20px;
  color: var(--navbar-text);
}

#about p {
  font-family: monospace;
  color: var(--text-color);
  font-size: 25px;
  padding-right: 250px;
  padding-left: 250px;
}

/* Skills*/
#skills {
  padding: 100px 0;
  text-align: center;
}

#skills h2 {
  font-size: 40px;
  margin-bottom: 20px;
  color: var(--navbar-text);
}

#skills ul {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#skills li {
  color: var(--text-color);
  margin: 10px;
  padding: 10px 20px;
  background-color: var(--project-background);
  border-radius: 20px;
  font-weight: bold;
  font-size: 25px;
  font-family: monospace;
}

#projects {
  text-align: center;
  display: flex;
  justify-content: space-evenly;
}

.project-title {
  font-size: 40px;
  margin-bottom: 20px;
  color: var(--navbar-text);
  display: flex;
  justify-content: center;
}

.project {
  position: relative;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  background-color: var(--project-background);
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;
  overflow: hidden;
}

.project:hover {
  transform: scale(1.25);
}

.project h3 {
  text-align: center;
  font-size: 35px;
  margin-bottom: 10px;
  color: var(--text-color);
}

.project-info {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: var(--project-info-background);
  color: var(--background-color);
  transition: opacity 0.3s;
  overflow: auto;
  font-size: 17px;
}
.project:hover .project-info {
  display: block;
  background-color: var(--text-color);
}

.github-link img {
  width: 50px;
  height: 50px;
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.github-link:hover img {
  filter: none;
}

/* Contact */
#contact {
  background-color: var(--background-color);
  padding: 100px 0;
  text-align: center;
}

#contact h2 {
  font-size: 40px;
  margin-bottom: 20px;
  color: var(--navbar-text);
}

#contact form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact input,
#contact textarea {
  margin-bottom: 10px;
  padding: 10px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid var(--project-background);
  background-color: var(--project-background);
  font-size: 20px;
  color: var(--text-color);
}

#contact input[type="submit"] {
  background-color: var(--background-color);
  color: var(--accent-color);
  border: var(--accent-color) solid;
  cursor: pointer;
  font-size: 20px;
  width: 250px;
  transition-duration: 0.4s;
}

#contact ::placeholder {
  color: var(--text-color);
}

#contact input[type="submit"]:hover {
  color: var(--background-color);
  background-color: var(--accent-color);
  color: var(--background-color);
}

/* Footer styles */
.social-links {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.social-links a {
  color: var(--text-color);
  font-size: 25px;
  margin-bottom: 10px;
  padding-top: 15px;
  padding-bottom: 1px;
}

.social-links a i {
  color: var(--text-color);
  transition-duration: 0.4s;
}

.social-links a:hover {
  color: var(--accent-color);
}

footer {
  background-color: var(--background-color);
  color: #ccd6f6;
  padding: 20px;
  text-align: center;
}
/* Media Queries */

/* Mobile devices */
@media only screen and (max-width: 600px) {
  header {
    font-size: 16px;
  }

  .logo {
    font-size: 24px;
  }

  nav ul li a {
    font-size: 16px;
  }

  #hero h1 {
    font-size: 60px;
  }

  #hero p {
    font-size: 30px;
  }

  #about h2 {
    font-size: 30px;
  }

  #about p {
    font-size: 5px;
    padding-right: 50px;
    padding-left: 50px;
  }

  #skills h2 {
    font-size: 24px;
  }

  #skills li {
    font-size: 20px;
    padding: 5px 10px;
  }

  .project-title {
    font-size: 24px;
  }

  .project {
    width: 100%;
  }

  .project h3 {
    font-size: 30px;
  }

  .github-link img {
    width: 30px;
    height: 30px;
  }

  #contact h2 {
    font-size: 24px;
  }

  #contact p {
    font-size: 18px;
  }

  input,
  textarea {
    font-size: 16px;
  }

  button[type="submit"] {
    font-size: 18px;
    padding: 10px 20px;
  }
}

/* iPad and tablet devices */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  header {
    font-size: 18px;
  }

  .logo {
    font-size: 28px;
  }

  nav ul li a {
    font-size: 18px;
  }

  #hero h1 {
    font-size: 80px;
  }

  #hero p {
    font-size: 40px;
  }

  #about h2 {
    font-size: 34px;
  }

  #about p {
    font-size: 22px;
    padding-right: 150px;
    padding-left: 150px;
  }

  #skills h2 {
    font-size: 32px;
  }

  #skills li {
    font-size: 24px;
    padding: 8px 16px;
  }

  .project-title {
    font-size: 32px;
  }

  .project {
    width: 40%;
  }

  .project h3 {
    font-size: 36px;
  }

  .github-link img {
    width: 40px;
    height: 40px;
  }

  #contact h2 {
    font-size: 32px;
  }

  #contact p {
    font-size: 22px;
  }

  input,
  textarea {
    font-size: 18px;
  }

  button[type="submit"] {
    font-size: 20px;
    padding: 12px 24px;
  }
}</style>
</head>
<body>
    <header>
        <nav class="nav-scrolled">
         
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
    </header>

    <section id="hero">
   
        <p class="hello">&nbsp;Hi, I'm</p>
        <h1 class="sticky-title">Ojasvi Doye</h1>
    
      
        <p>&nbsp;Student</p>
        <div class="buttons">
            <a href="Resume 3 (2).pdf" download><button class="resume-button">Download Resume</button></a>
            <a href="#contact"><button class="hire-button">Hire Me</button></a>
        </div>
    </section>
 
    <section id="about">
        <h2>About Me</h2>
        <p>I'm a 2nd-year engineering student passionate about machine learning and data analysis. I love uncovering insights from data and exploring the potential of artificial intelligence. I have a solid foundation in programming and statistical analysis, and I'm constantly seeking opportunities to deepen my knowledge in this field.</p>
        </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>Machine Learning</li>
            <li>Artificial Intelligence</li>
            <li>Front-End Development</li>
            <li>Python</li>
            <li>Java</li>
        </ul>
    </section>
      
  <section id="portfolio">
    <h2 class="project-title">Projects</h2>

    <div class="container">

    <section id="projects">
       
       
       <div class="project" onclick="toggleProjectInfo(1)">
            <h3>CareerVoyant: Mapping Your Path to Professional Excellence</h3>
            
            <div class="project-info" id="project-info-1">
                <p>The Career Navigator is a data-driven project designed to assist engineering students in making informed decisions regarding their career placements after completing their final year. The project utilizes machine learning techniques and historical placement data to predict the potential job prospects and industry preferences based on individual student profiles.</p>
                <!-- <a class="github-link" href="https://github.com" target="_blank">
                    <img src="social_github_icon.png" alt="GitHub Icon">
                </a> -->
            </div>
        </div>
        <div class="project" onclick="toggleProjectInfo(2)">
            <h3>CarSage: The Intelligent Car Price Oracle</h3>
           <div class="project-info" id="project-info-2">
                <p>The Car Price Predictor project is a machine learning-based system designed to accurately estimate the price of used cars. By analyzing various factors such as make, model, mileage, year of production, and other relevant features, the model predicts the approximate selling price of a car.</p>
                <a class="github-link" href="https://github.com/ojasvidoye/CarSage-The-Intelligent-Car-Price-Oracle" target="_blank">
                    <img src="social_github_icon.png" alt="GitHub Icon">
                </a>
            </div>
        </div>
      <!-- <div class="project" onclick="toggleProjectInfo(2)">
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="project-info" id="project-info-2">
                <p>Additional information about Project 2.</p>
                <a class="github-link" href="https://github.com" target="_blank">
                    <img src="github-icon-gray.png" alt="GitHub Icon">
                </a>
            </div>
        </div> -->
    
    </section>
    
    <section id="contact">
        <h2>Contact Me</h2>
        <form id="contact-form">
            <input type="text" id="name" placeholder="Name">
            <input type="email" id="email" placeholder="Email">
            <textarea id="message" placeholder="Message"></textarea>
            <input type="submit" value="Send Message">
        </form>
    </section>
    <footer>
        <div class="social-links">
            <a href="https://www.linkedin.com/in/ojasvi-doye-13834a27b/" title="Linkedin" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
            <a href="https://github.com/ojasvidoye" title="Github" target="_blank"><i class="fab fa-github fa-2x"></i></a>
            <a href="https://www.instagram.com/ojasvii_04/" title="Instagram" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
        </div>
       <p>&copy; Ojasvi Doye. All rights reserved.</p>
    </footer>
    <script>// Smooth scrolling
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


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Send the form data using EmailJS
    emailjs.sendForm("your-service-id", "your-template-id", this)
        .then(function(response) {
            // Display a success message
            alert("Message sent successfully!");
            // Reset the form after submission
            document.getElementById("contact-form").reset();
        }, function(error) {
            // Display an error message
            alert("Error sending message. Please try again later.");
        });
});</script>
    <script src="https://cdn.emailjs.com/sdk/2.6.4/email.min.js"></script>

    
</body>
</html>
