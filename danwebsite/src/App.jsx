import './App.css'
import Fade from 'react-reveal/Fade';

function App() {

  const goToAbout = () => {
    const about = document.getElementById('about');
    about.scrollIntoView({behavior: 'smooth'});
  };
  const goToUpTo = () => {};
  const goToContact = () => {};




  return (
    <>
    <header className='name_heading' >
      <h1>Daniel Drew</h1>
      <p>Software Engineering</p>
    </header>
    <nav className='navbar'>
        <button onClick={goToAbout}>About Me</button>
        <button>What I'm Up To</button>
        <button>Contact</button>
    </nav>
    <Fade bottom duration={1500}>
      <div className='intro'>
        <p className='big'>Hi!</p>
        <p className='subheading'>I'm Dan a Software Engineer based in the UK!</p>
      </div>
    </Fade>
    <main className='hidden'>
      <Fade left duration={1500}>
        <article className='about' id='about'>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec auctor, nunc eget ultricies ultricies, nunc nisl
            aliquam nunc, nec aliquam nisl nunc vitae nunc. Donec
            auctor, nunc eget ultricies ultricies, nunc nisl aliquam
            nunc, nec aliquam nisl nunc vitae nunc. Donec auctor, nunc
            eget ultricies ultricies, nunc nisl aliquam nunc, nec
            aliquam nisl nunc vitae nunc. Donec auctor, nunc eget
          </p>
        </article>
      </Fade>
      <Fade right duration={1500} delay={1000}>
        <article className='experience' id='experience'>
          <h2>Experience</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec auctor, nunc eget ultricies ultricies, nunc nisl
            aliquam nunc, nec aliquam nisl nunc vitae nunc. Donec
            auctor, nunc eget ultricies ultricies, nunc nisl aliquam
            nunc, nec aliquam nisl nunc vitae nunc. Donec auctor, nunc
            eget ultricies ultricies, nunc nisl aliquam nunc, nec
            aliquam nisl nunc vitae nunc. Donec auctor, nunc eget
          </p>
        </article>
      </Fade>
      <Fade left duration={1500} delay={2000}>
        <article className='contact' id='contact'>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec auctor, nunc eget ultricies ultricies, nunc nisl
            aliquam nunc, nec aliquam nisl nunc vitae nunc. Donec
            auctor, nunc eget ultricies ultricies, nunc nisl aliquam
            nunc, nec aliquam nisl nunc vitae nunc. Donec auctor, nunc
            eget ultricies ultricies, nunc nisl aliquam nunc, nec
            aliquam nisl nunc vitae nunc. Donec auctor, nunc eget
          </p>
        </article>
      </Fade>
    </main>
    </>
  )
}

export default App
