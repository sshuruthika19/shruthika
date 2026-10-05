<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Shruthika | AI & Data Science Portfolio</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
            font-family: Arial, sans-serif;
        }

        body {
            background: #0b1020;
            color: white;
            line-height: 1.6;
        }

        /* Navigation */
        nav {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            padding: 18px 8%;
            background: rgba(11, 16, 32, 0.9);
            backdrop-filter: blur(10px);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 25px;
            font-weight: bold;
            color: #00e5ff;
        }

        .logo span {
            color: white;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 30px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s;
        }

        nav ul li a:hover {
            color: #00e5ff;
        }

        /* Home */
        #home {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 100px 20px 50px;
            background:
                radial-gradient(circle at top left, #143c52, transparent 35%),
                radial-gradient(circle at bottom right, #24204d, transparent 35%);
        }

        .hero h1 {
            font-size: 60px;
            margin-bottom: 15px;
        }

        .hero h1 span {
            color: #00e5ff;
        }

        .hero h2 {
            font-size: 25px;
            color: #b8c7d9;
            margin-bottom: 20px;
        }

        .hero p {
            max-width: 650px;
            margin: auto;
            color: #cbd5e1;
            font-size: 17px;
        }

        .buttons {
            margin-top: 30px;
        }

        .btn {
            display: inline-block;
            padding: 13px 28px;
            margin: 8px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s;
        }

        .primary {
            background: #00e5ff;
            color: #061018;
        }

        .secondary {
            border: 2px solid #00e5ff;
            color: #00e5ff;
        }

        .btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
        }

        /* Sections */
        section {
            padding: 90px 8%;
        }

        .section-title {
            text-align: center;
            font-size: 38px;
            margin-bottom: 50px;
        }

        .section-title span {
            color: #00e5ff;
        }

        /* About */
        .about {
            max-width: 900px;
            margin: auto;
            text-align: center;
            color: #cbd5e1;
            font-size: 18px;
        }

        /* Skills */
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            max-width: 1000px;
            margin: auto;
        }

        .skill {
            background: #121a30;
            padding: 25px;
            text-align: center;
            border-radius: 15px;
            border: 1px solid #24304d;
            transition: 0.3s;
        }

        .skill:hover {
            transform: translateY(-8px);
            border-color: #00e5ff;
        }

        .skill h3 {
            color: #00e5ff;
            margin-bottom: 10px;
        }

        /* Projects */
        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            gap: 25px;
        }

        .project {
            background: #121a30;
            padding: 30px;
            border-radius: 18px;
            border: 1px solid #24304d;
            transition: 0.3s;
        }

        .project:hover {
            transform: translateY(-10px);
            border-color: #00e5ff;
        }

        .project h3 {
            color: #00e5ff;
            margin-bottom: 12px;
        }

        .project p {
            color: #cbd5e1;
        }

        .project a {
            display: inline-block;
            margin-top: 18px;
            color: #00e5ff;
            text-decoration: none;
            font-weight: bold;
        }

        /* Education */
        .timeline {
            max-width: 800px;
            margin: auto;
        }

        .timeline-box {
            background: #121a30;
            padding: 25px;
            margin: 20px 0;
            border-left: 4px solid #00e5ff;
            border-radius: 10px;
        }

        .timeline-box h3 {
            color: #00e5ff;
        }

        .timeline-box p {
            color: #cbd5e1;
        }

        /* Contact */
        .contact {
            text-align: center;
        }

        .contact p {
            color: #cbd5e1;
            margin: 10px;
        }

        .social-links {
            margin-top: 25px;
        }

        .social-links a {
            display: inline-block;
            margin: 8px;
            padding: 10px 20px;
            border: 1px solid #00e5ff;
            border-radius: 20px;
            color: #00e5ff;
            text-decoration: none;
        }

        .social-links a:hover {
            background: #00e5ff;
            color: #061018;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 25px;
            background: #070b16;
            color: #94a3b8;
        }

        /* Mobile */
        @media (max-width: 700px) {

            nav {
                padding: 15px 5%;
            }

            nav ul {
                gap: 12px;
            }

            nav ul li a {
                font-size: 12px;
            }

            .hero h1 {
                font-size: 42px;
            }

            .hero h2 {
                font-size: 20px;
            }

            section {
                padding: 70px 5%;
            }
        }
    </style>
</head>

<body>

    <!-- Navigation -->
    <nav>
        <div class="logo">S<span>.</span>SHRUTHIKA</div>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>


    <!-- Home -->
    <section id="home">

        <div class="hero">

            <h1>Hi, I'm <span>Shruthika</span></h1>

            <h2>B.Tech AI & Data Science Student</h2>

            <p>
                I am passionate about Artificial Intelligence, Data Science,
                Python and Web Development. I love learning new technologies
                and building creative digital projects.
            </p>

            <div class="buttons">
                <a href="#projects" class="btn primary">View My Projects</a>
                <a href="#contact" class="btn secondary">Contact Me</a>
            </div>

        </div>

    </section>


    <!-- About -->
    <section id="about">

        <h2 class="section-title">About <span>Me</span></h2>

        <div class="about">

            <p>
                I'm <strong>S.Shruthika</strong>, a B.Tech Artificial Intelligence
                and Data Science student. I am interested in AI, Data Science,
                Python programming and modern web technologies.
            </p>

            <br>

            <p>
                My goal is to continuously improve my technical skills,
                create innovative projects and build solutions that can
                make a meaningful impact.
            </p>

        </div>

    </section>


    <!-- Skills -->
    <section id="skills">

        <h2 class="section-title">My <span>Skills</span></h2>

        <div class="skills-container">

            <div class="skill">
                <h3>Python</h3>
                <p>Programming & Problem Solving</p>
            </div>

            <div class="skill">
                <h3>HTML</h3>
                <p>Web Page Development</p>
            </div>

            <div class="skill">
                <h3>CSS</h3>
                <p>Web Design & Styling</p>
            </div>

            <div class="skill">
                <h3>Java</h3>
                <p>Object-Oriented Programming</p>
            </div>

            <div class="skill">
                <h3>SQL</h3>
                <p>Database Management</p>
            </div>

            <div class="skill">
                <h3>AI & Data Science</h3>
                <p>Exploring Intelligent Systems</p>
            </div>

        </div>

    </section>


    <!-- Projects -->
    <section id="projects">

        <h2 class="section-title">My <span>Projects</span></h2>

        <div class="projects">

            <div class="project">
                <h3>Personal Portfolio</h3>

                <p>
                    A responsive personal portfolio website created using
                    HTML and CSS to showcase my skills, education and projects.
                </p>

                <a href="#">View Project →</a>
            </div>


            <div class="project">
                <h3>Python Calculator</h3>

                <p>
                    A beginner-friendly calculator developed using Python
                    to perform basic arithmetic operations.
                </p>

                <a href="#">View Project →</a>
            </div>


            <div class="project">
                <h3>AI Data Project</h3>

                <p>
                    An upcoming project focused on exploring Artificial
                    Intelligence and Data Science concepts.
                </p>

                <a href="#">Coming Soon →</a>
            </div>

        </div>

    </section>


    <!-- Education -->
    <section id="education">

        <h2 class="section-title">My <span>Education</span></h2>

        <div class="timeline">

            <div class="timeline-box">
                <h3>B.Tech - Artificial Intelligence & Data Science</h3>
                <p>
                    Currently pursuing B.Tech in AI & Data Science.
                </p>
            </div>

            <div class="timeline-box">
                <h3>Technical Learning</h3>
                <p>
                    Python, Java, SQL, HTML, CSS and Data Science.
                </p>
            </div>

            <div class="timeline-box">
                <h3>Internship</h3>
                <p>
                    Web Development Internship at WizTech Automation Solutions.
                </p>
            </div>

        </div>

    </section>


    <!-- Contact -->
    <section id="contact">

        <h2 class="section-title">Contact <span>Me</span></h2>

        <div class="contact">

            <p>Let's connect and create something amazing!</p>

            <p>📧 Email: your-email@example.com</p>

            <div class="social-links">

                <a href="#">GitHub</a>

                <a href="#">LinkedIn</a>

                <a href="#">Instagram</a>

            </div>

        </div>

    </section>


    <!-- Footer -->
    <footer>

        <p>
            © 2026 S.Shruthika | AI & Data Science
        </p>

    </footer>

</body>
</html>
```
