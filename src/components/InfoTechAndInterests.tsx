
import React from 'react';
import '../styles/InfoTechAndInterests.css'; // Path to your CSS file

const InfoTechAndInterests = () => {
    const techSkills = {
    'Python': 'Advanced',
    'JavaScript': 'Advanced',
    'React': 'Proficient',
    'C#':'Basic',
    '.Net':'Familiar',
    'Node.js':'Familiar',
    'Express':'Familiar',
    'MongoDB':'Familiar',
    'SQL':'Familiar',
    'Git':'Basic',
};

const softSkills = {
    'Communication': 'Proficient',
    'Teamwork': 'Proficient',
    'Problem Solving': 'Proficient',
}

    const personalInterests = ['Coffee', 'Movies', 'Gym', 'Cooking'];

    return (
        <div className="infoContainer">
            <div className="codeContainer">
                <pre>
                    <code>
                        <span className="variable">techSkills</span> = {'{'}
                        <br />
                        {Object.entries(techSkills).map(([skill, level]) => (
                            <React.Fragment key={skill}>
                                {'    '}{skill.padEnd(10)}: '{level}',
                                <br />
                            </React.Fragment>
                        ))}
                        {'}'};
                        <br />
                        <br />
                        <span className='variable'>softSkills</span> = {'{'}
                        <br />
                        {Object.entries(softSkills).map(([skill, level]) => (
                            <React.Fragment key={skill}>
                                {'    '}{skill.padEnd(15)}: '{level}',
                                <br />
                            </React.Fragment>
                        ))}
                        {'}'};
                        <br />
                        <br />
                        <span className="variable">personalInterests</span> = {JSON.stringify(personalInterests, null, 2)};
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default InfoTechAndInterests;
