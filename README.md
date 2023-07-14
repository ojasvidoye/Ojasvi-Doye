<!DOCTYPE html>
<html>
<head>
    <title>Ojasvi Doye</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
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
    <script src="script.js"></script>
    <script src="https://cdn.emailjs.com/sdk/2.6.4/email.min.js"></script>

    
</body>
</html>
