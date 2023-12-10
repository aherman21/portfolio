//this component is for the Github and LinkedIn links.
import '../styles/index.css';
import githubLogo from '../logos/GitHub-Mark-ea2971cee799.png'



const Links = () => {
    return (
        <>
            <div className='infoContainer'>
            <a href="https://github.com/aherman21" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className="logo" />
            </a>
            </div>
        </>
      )
}


export default Links