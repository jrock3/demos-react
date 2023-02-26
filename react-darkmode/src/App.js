import './App.css';
import { useState, createContext, useContext } from 'react';

const ModeContext = createContext();

const StepOne = () => {
  const { isDark, toggleDark } = useContext(ModeContext);

  return (
    <div>
      <div className="mt-6 p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">Hello world!</div>
          <p className="text-slate-500">Try toggling dark mode.</p>
        </div>
      </div>
      <button onClick={() => toggleDark(!isDark)} className="bg-sky-500 hover:bg-sky-700 m-8 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
        Dark Mode: {String(isDark)}
      </button>
    </div>
  );
};

const StepTwo = () => {
  const { isDark, toggleDark } = useContext(ModeContext);
  
  return (
    <div>
      <div className="mt-6 p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">Hello world!</div>
          <p className="text-slate-500">You have reached the end.</p>
        </div>
      </div>
      <button onClick={() => toggleDark(!isDark)} className="bg-sky-500 hover:bg-sky-700 m-8 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
        Dark Mode: {String(isDark)}
      </button>
    </div>
  );
};

function App() {
  const [ isDark, setIsDark ] = useState(false);
  const toggleDark = () => setIsDark(!isDark);
  const [ step, setStep ] = useState(1);
  const StepDisplay = ({
    1: StepOne,
    2: StepTwo,
  })[step];
  const btnName = {1: 'Next', 2: 'Back'};

  return (
    <div className="App">
      <ModeContext.Provider value={{ isDark, toggleDark }}>
        <header className={`App-header ${isDark ? 'dark' : ''}`}>
          <StepDisplay />
          <button onClick={() => setStep(step === 1 ? 2 : 1)}>{btnName[step]}</button>
        </header>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
