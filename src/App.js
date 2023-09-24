import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//ChatBot
import config from './ChatBot/config';
import ActionProvider from './ChatBot/ActionProvider';
import MessageParser from './ChatBot/MessageParser';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

//components
import EnterInfo from './components/EnterInfo';
import DataDisplay from './components/DataDisplay';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<EnterInfo />} />
          <Route path="/chat" element={<Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />} />
      <Route path="/data" element={<DataDisplay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
