import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import SqueezeDox from './components/SqueezeDox';
import Industries from './components/Industries';
import Services from './components/Services';
import Results from './components/Results';
import Security from './components/Security';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <SqueezeDox />
      <Industries />
      <Services />
      <Results />
      <Security />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
