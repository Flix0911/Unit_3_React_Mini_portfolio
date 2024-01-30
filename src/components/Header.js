const Header = (props) => {
    //component returned in JSX
    return <div className="header">
        <h1 className="creator-name">Erick Valencia's Portfolio</h1>
        <div className="navigation-container">
            <a href="https://github.com/Flix0911">GitHub</a>
            <a href="https://www.linkedin.com/in/erickvalenciadev/">LinkedIn</a>
            <a href="google.com">Resume</a>
            <a href="google.com">About</a>
            <a href="google.com">Contact</a>
        </div>
    </div>
}

export default Header