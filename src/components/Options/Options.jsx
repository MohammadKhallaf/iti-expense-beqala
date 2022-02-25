import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Partner With Us هل تريد الإنضمام معنًا",
      handler: props.actionProvider.handlePartnerList,
      id: 1,
    },
    { text: "Have a problem? هل تواجهك مشكلة؟", handler: props.actionProvider.handleClientList, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;