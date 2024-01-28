import project1Image from '../images/project1.jpeg'
import project2Image from '../images/project2.jpeg'


const Projects = (props) => {
    return <div className="Projects">
        <div className="project1">
            <h1>Country Look-Up</h1>
            <h3>Learn more about Countries you want to visit!</h3>
            <a href="https://github.com/Flix0911/project1_country_look-up?tab=readme-ov-file">GitHub Repo</a>
            <p>This is a project that utilized JavaScript, CSS, HTML, Jquery, and a RestAPI, to show the user information about a country they input.</p>
            <img src={project1Image} alt="Project 1 Image" />
        </div>
        <div className="project2">
            <h1>Record your Records</h1>
            <h3>Store your physical music collection, online!</h3>
            <a href="https://github.com/Flix0911/project2">GitHub Repo</a>
            <p>This was a full-stack web application that utilizied JavaScript, HTML, and CSS. I used MongoDB for my database and my utilized dependencies are: connect-mango, dotenv, ejs, express, method-override, mongoose, and morgan</p>
            <img src={project2Image} alt="Project 2 Image" />
        </div>
    </div>
}

export default Projects