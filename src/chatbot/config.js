import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from './../components/Options/Options';
import LinkList from "../components/LinkList/LinkList";

const config = {
  botName: "ExpenseBeqala",
  initialMessages: [createChatBotMessage("Welcome to ExpenseBeqala, I'm here to help. How can I help you?  أهلاً بحضرتك يفندم! أخبرنا كيف يمكننا مساعدتك؟ ",
  {widget: "Options"})],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#002029",
    },
    chatButton: {
      backgroundColor: "#002029",
    },
    
  },
 
 widgets: [
     {
     	widgetName: "Options",
    	widgetFunc: (props) => <Options {...props} />,
     },
     {
      widgetName: "partnerLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Partner Form",
            url:
              "http://localhost:8000/partner",
            id: 1,
          },
        ],
      },
    },
    {widgetName: "clientLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Contact Us",
            url:
              "http://localhost:8000/contactus",
            id: 1,
          },
        ],
      },
    },
 ],
}
export default config;