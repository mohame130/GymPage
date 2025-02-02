import './App.css'
import Footer from './componant/Footer/Footer';
import Join from './componant/Join/Join';
import Plans from './componant/Plans/Plans';
import Programs from './componant/Programs/Programs';
import Reasons from './componant/Reasons/Reasons';
import Testimonials from './componant/Testimonials/Testimonials';
import Hero from './componant/hero/Hero';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
