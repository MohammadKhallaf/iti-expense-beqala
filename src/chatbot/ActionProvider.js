class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handlePartnerList = () => {
    const message = this.createChatBotMessage(
      "We are delighted to have you join us! Please complete this form and we will contact you. Thank you! يسعدنا إنضمامك إلينا! من فضلك قم بتسجيل بياناتك في هذه الفورم و سنقوم بالتواصل معك! شكرًا لك.",
      {
        widget: "partnerLinks",
      },
    );

    this.updateChatbotState(message);
  };
handleClientList = () => {
    const message = this.createChatBotMessage(
      "We are very sorry! Please describe your problem in this form and we will contact you. Thank you! !عميلنا العزيز يؤسفنا أنك تواجهة مشكلة. من فضلك قم بشرح المشكلة في هذه الفورم و سنقوم بالتواصل معك في أقرب وقت! شكرًا لك.",
      {
        widget: "clientLinks",
      },
    );

    this.updateChatbotState(message);
  };

  greet() {
  
    const greetingMessage = this.createChatBotMessage("Welcome to ExpenseBeqala! Tell me how can I help you! أهلا بحضرتك يفندم. أخبرني كيف يمكنني مساعدتك.", {widget: "Options"})
    this.updateChatbotState(greetingMessage)
  
  }

  thanking() {
  
    const greetingMessage = this.createChatBotMessage("Thank you for choise ExpenseBeqala! شكرًا لختيارك موقعنا، يسعدنا دايمًا خدمتك.")
    this.updateChatbotState(greetingMessage)
  
  }
  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;