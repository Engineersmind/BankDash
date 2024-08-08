import "./Toggle.css"
import ToggleButton from "./ToggleButton";
import { useState } from "react";
export default function Toggle() {

  const [recieveCurrency, setRecieveCurrency] = useState(false);
  const [merchantOrder, setMerchantOrder] = useState(false);
  const [reccomendation, setReccomendation] = useState(false);

  function handleRecieveCurrency() {
    setRecieveCurrency(!recieveCurrency);
  }
  function handleMerchantOrder() {
    setMerchantOrder(!merchantOrder);
  }
  function handleReccomendation() {
    console.log("click",reccomendation);
    setReccomendation(!reccomendation);
  }

  const Attributes = [
    {
      id: "1",
      content: "I send or recieve digital currency",
      onToggle: handleRecieveCurrency,
      onCheck: recieveCurrency 
    },
    {
      id: "2",
      content: "I recieve merchant order",
      onToggle: handleMerchantOrder,
      onCheck:  merchantOrder 
    },
    {
      id: "3",
      content: "There are reccomendation for my account",
      onToggle: handleReccomendation,
      onCheck:  reccomendation 
    }
  ];

  return (
    <div className="toggle-container">
      <ToggleButton Attributes={Attributes} />
    </div>
  );
}
