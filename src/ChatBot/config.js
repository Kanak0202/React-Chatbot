import { createChatBotMessage } from 'react-chatbot-kit';
import GotItBtn from '../components/GotItBtn';
import Slot from '../components/Slot';
import ExitCounter from '../components/Exit';
import AskAge from '../components/AskAge';

const config = {
    botName: "HappilyEver",
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system`, {
    widget: "GotItBtn"
  })],
  widgets:[
    {
      widgetName: "GotItBtn",
      widgetFunc: (props) => <GotItBtn {...props} />,
    },
    {
      widgetName: "slots",
      widgetFunc: (props) => <Slot {...props} />,
    },
    {
      widgetName: "exit",
      widgetFunc: (props) => <ExitCounter {...props} />,
    },
    {
      widgetName: "askage",
      widgetFunc: (props) => <AskAge {...props} />,
    }

  ]
  
};

export default config;