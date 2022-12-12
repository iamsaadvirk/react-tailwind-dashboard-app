import './App.css';
import Header from './components/header/Header';
import LeftPart from './components/leftPart/LeftPart';
import NavBar from './components/navbar/NavBar'
import RightPart from './components/rightPart/RightPart';

function App() {
  return (
    <div className="App"> 
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
        <NavBar />
        <div className='w-full grid grid-cols-1 xl:grid-cols-5 col-span-10'>
          {/* Left Side */}
          <LeftPart />
          {/* Right Side */}
          <RightPart />
        </div>
      </div>
    </div>
  );
}

export default App;
