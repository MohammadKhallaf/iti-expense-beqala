import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "../chatbot/config";
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";

import 'react-chatbot-kit/build/main.css';

export default function ChatBox (){
  return (
   <>
   <div className="container col-12">
     <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
   </div>
   </>
  );
};


