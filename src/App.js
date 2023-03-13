import './App.css';
import DesktopAdvice from './Components/AdviceBox/Advice';
import MobileAdvice from './Components/MobileAdvice/mobileadvice';
import { useState, useEffect} from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {width > 580 ? <DesktopAdvice /> : <MobileAdvice />}
    </div>
  );
}

export default App;
