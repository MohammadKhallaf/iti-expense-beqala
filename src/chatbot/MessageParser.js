class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("good morning")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("good afternoon")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("good night")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("صباح الخير")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("مساء الخير")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("السلام عليكم")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("اهلا")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("أهلا")) {
      this.actionProvider.greet();
    }
if (lowerCaseMessage.includes("شكرا")) {
      this.actionProvider.thanking();
    }
    if (lowerCaseMessage.includes("thank")) {
      this.actionProvider.thanking();
    }
    if (lowerCaseMessage.includes("partner")) {
      this.actionProvider.handlePartnerList();
    }

    if (lowerCaseMessage.includes("الخير")) {
      this.actionProvider.handlepartnerList();
    }

    if (lowerCaseMessage.includes("problem")) {
      this.actionProvider.handleClientList();
    }
    if (lowerCaseMessage.includes("مشكلة")) {
      this.actionProvider.handleClientList();
    }
    if (lowerCaseMessage.includes("شكوة")) {
      this.actionProvider.handleClientList();
    }
    if (lowerCaseMessage.includes("تواصل")) {
      this.actionProvider.handleClientList();
    }
    if (lowerCaseMessage.includes("خدمة العملاء")) {
      this.actionProvider.handleClientList();
    }
    if (lowerCaseMessage.includes("خدمه العملاء")) {
      this.actionProvider.handleClientList();
    }
  }
}

export default MessageParser;