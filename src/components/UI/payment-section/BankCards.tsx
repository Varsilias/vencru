import visa from "../../../assets/visa-icon.svg";
import mastercard from "../../../assets/mastercard-icon.svg";
import plusIcon from "../../../assets/plus-Icon.svg";

import "./style.css";
import { useState } from "react";

const BankCards = () => {
  const [focus, setFocus] = useState(false);
  const [id, setId] = useState(0);

  const handleClick = (id: number) => {
    setFocus(true);
    setId(id);
  };
  const cards = [
    {
      id: 1,
      ending_text: "Visa ending in 1234",
      expiry: "06/2024",
      logo: visa,
    },
    {
      id: 2,
      ending_text: "Mastercard ending in 1234",
      expiry: "06/2024",
      logo: mastercard,
    },
  ];
  return (
    <section className="bank_cards w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => handleClick(card.id)}
          className={`master_card text-left flex justify-evenly p-4 border-[1px] mb-4 rounded-md border-solid focus:border-[1px] focus:border-solid ${
            id === card.id && focus
              ? "border-[#D6BBFB] bg-[#F5F5F5]"
              : "border-[#d0d5dd] bg-white"
          }`}
        >
          <div className="icon w-[20%] md:w-[10%] pt-[3px]">
            <img
              src={card.logo}
              alt="master_card_logo"
              className="border-[1px] rounded border-solid border-[#d0d5dd] group-focus:border-none"
            />
          </div>
          <div className="card_details w-[75%] md:w-[85%] ml-4">
            <h6
              className={`font-medium text-sm ${
                id === card.id && focus ? "text-[#53389E]" : "text-[#344054]"
              }`}
            >
              {card.ending_text}
            </h6>
            <p
              className={`font-base text-sm mb-2  ${
                id === card.id && focus ? "text-[#7F56D9]" : "text-[#667085]"
              }`}
            >
              Expiry {card.expiry}
            </p>
            <p
              className={`first-line:font-medium text-base text-[#667085] ${
                id === card.id && focus ? "text-[#9E77ED]" : "text-[#667085]"
              }`}
            >
              Set as default <span className="text-[#6941C6] pl-2">Edit</span>
            </p>
          </div>
          <div className="checkmark ml-8 w-[5%]">
            <input
              type="checkbox"
              name="checkmark"
              id="checkmark"
              readOnly={true}
              checked={id === card.id && focus ? true : false}
            />
          </div>
        </div>
      ))}
      <div>
        <div className="my-4">
          <p className="font-medium text-sm text-[#667085] flex">
            <img src={plusIcon} alt="add new icon" />
            <span className="pl-3">Add new payment method</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BankCards;
