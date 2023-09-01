import React, {useState} from 'react';

export default function Projects() {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
        {
            id: 0,
            title:  'Projeto Maker',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem ',
            image: '../assets/img/maker.png',
        },
        {
            id: 1,
            title:  'Implantação ERP',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem ',
            image: '../assets/img/maker.png',
        },
        {
            id: 2,
            title:  'Analise e implantação',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem ',
            image: '../assets/img/maker.png',
        },
    ];

    const handleSectionChange = (index) => {
        setActiveSection(index);
    }
    
    return(
    <> 
    <div className="projects animate">
      <div className="container animate">
        {sections.map((section, index) => (
          <div
            className={`project-section ${index === activeSection ? 'active' : ''}`}
            id={`section-${section.id}`}
            key={index}
          >
            <div className="img-projects">
              <img src={section.image} alt="" />
            </div>
            <div className="texto-projects">
              <h1>{section.title}</h1>
              <p>{section.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        {sections.map((section, index) => (
          <a
            key={index}
            className={index === activeSection ? 'active' : ''}
            onClick={() => handleSectionChange(index)}
          >
            {section.title}
          </a>
        ))}
      </div>
    </div>
    </>
    )
}