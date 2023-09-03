import Header from './sections/Header.jsx';
import Solutions from './sections/Solutions.jsx';
import Projects from './sections/Projects.jsx';
import About from './sections/About.jsx';
import Team from './sections/Team.jsx';
import Modelo from './assets/img/modelo.png'



function App() {
  return (
    <>
     < Header />
     < Solutions />
     < Projects/>
     < About/>
     < Team image={Modelo} title={"Sheila Tirony"} cargo={"Gerente de projeto"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"
}/>


    </>
  )
}

export default App
