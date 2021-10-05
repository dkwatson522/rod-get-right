import './App.css';
import Navigation from './components/ui/Navigation';
import Header from './components/ui/Header';
import DayList from './components/schedule/DayList';

function App() {


  return (
    <>
      <Navigation />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-gray-800">
      <Header text={'Planning your journey one week at a time!'}/>
      <DayList/>
      </div>
    </>

  );
}

export default App;
