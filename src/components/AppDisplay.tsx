
import '../styles/InfoTechAndInterests.css'; // Reusing your existing CSS file

const AppShowcase = () => {
    const appLinks = ['https://play.google.com/store/apps/details?id=com.sahkotekniikka_2021&pli=1']; // Replace with your app's link
    const appDescriptions = ['React Native app for educational purposes.']
    const contributions = [`Frontend development, UI&UX design. Communicating with PM and the customer.`]
    const thisIsLink = "//the header above is a link"

    return (
        <div className="infoContainer">
            <h1 className="variable">Projects</h1>
            <div className="codeContainer">
                <pre>
                    <code>
                        <a href={appLinks[0]} target="_blank" rel="noopener noreferrer" className="appLink">
                            <h2>Sähkötekniikka 2021</h2>
                        </a>
                        <p>{thisIsLink}</p>
                        <span className="variable">appDescription</span> = 
                        <span className="appDescription"> '{appDescriptions[0]}'</span>;
                        <br />
                        <span className='variable'>contributions</span> = 
                        <span className="appDescription"> '{contributions[0]}'</span>;

                        <br />
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default AppShowcase;
