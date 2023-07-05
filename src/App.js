import './index.css';
import Footer from './components/section/footer/footer';
import Navbar from './components/section/navbar/navbar';
import Presentation from './components/section/presentation/presentation';
import Projects from './components/section/projects/projects';
import Skills from './components/section/skills/skills';

function App() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
