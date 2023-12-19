
import '../styles/index.css';

const AppShowcase = () => {
    const appLinks = ['https://play.google.com/store/apps/details?id=com.sahkotekniikka_2021&pli=1']; // Replace with your app's link
    const appDescriptions = ['React Native app for educational purposes.',
     'React/NodeJS Web Application to display my Portfolio.']
    const contributions = ['Frontend development, UI&UX design, Communicating with PM and the customer.',
    'Design, Frontend, Backend, Setting up the database, Deployment.']
    const thisIsLink = "# the header above is a link"
    const whatILearned = ["This was my first project in React Native and JavaScript. \
     I learned basic stuff, e.g. refactoring code, and how to use React Native's components, navigation etc. \
     I also learned how to use Expo and Android Studio's Emulator for testing.",
     "In terms of communicating with the customer, everything went well. \
     I got pretty much free hands with the design and the customer was happy with the result. \
     I do acknowledge, that this might usually not be the case.", "I got inspiration to create this Portfolio Web App when I was doing the \
     Helsinki University's Full Stack Open course. I chose to create the frontend with TypeScript purely for learning purposes.",
     "On hindsight I think I should have spend time and effort on the design part with a tool like Figma to create a mockup of the app. \
     This time I just started coding the frontend and it took a lot of time to get the design right, \
     when it wasn't clear from the beginning what it should look like. \
     I also should have used frameworks like Bootstrap more.",
     "I tested the frontend with a mock database \
     before implementing an actual one. When creating the backend I tested different requests with \
     REST client extension for VS Code."]

    return (
        <div className="container">
            <h1 className="variable">Projects</h1>
            <div className="codeContainer_fb">
                <pre>
                    <code>
                        <a href={appLinks[0]} target="_blank"
                         rel="noopener noreferrer" className="appLink">
                            <h2>Sähkötekniikka 2021</h2>
                        </a>
                        <p>{thisIsLink}</p>
                        <span className="variable">appDescription</span> = 
                        <span className="appDescription"><p>'{appDescriptions[0]}'</p></span>
                        <br />
                        <span className='variable'>contributions</span> = 
                        <span className="appDescription"><p>'{contributions[0]}'</p></span>
                        <br />
                        <span className='variable'>whatILearned</span> =
                        <span className="appDescription"><p>
                            '{whatILearned[0]}<br/><br/>{whatILearned[1]}'</p></span>
                        <br />
                    </code>
                </pre>
            </div>
            <div className="codeContainer_fb">
                <pre>
                    <code>
                        <h2>Alexander's Portfolio</h2>
                        <span className="variable">appDescription</span> = 
                        <span className="appDescription"><p>'{appDescriptions[1]}'</p></span>
                        <br />
                        <span className='variable'>contributions</span> = 
                        <span className="appDescription"><p>'{contributions[1]}'</p></span>
                        <br />
                        <span className='variable'>whatILearned</span> =
                        <span className="appDescription"><p>'{whatILearned[2]}
                        <br/><br/>{whatILearned[3]}<br/><br/>{whatILearned[4]}'</p></span>
                        <br />
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default AppShowcase;
