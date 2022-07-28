import React, { useEffect, useState } from "react";
import InputEnter from "../InputEnter/InputEnter";
import "./Form.scss";
import NumberFormat from 'react-number-format';
export default function Form({submit, status}) {

  const [sub, setSub] = useState();
  const [dsee, setDsee] = useState(true)
  const [textArea, setTextArea] = useState(false)
  const [enterName, setEnterName]=useState(false)
  const [enterMail, setEnterMail] = useState(false)
  const [input, setInput] = useState();
  const [mailinp, setMailinp] = useState();
  const [area, setArea] = useState();
  const handleValidName = (e) => {
    const uperValue = e.target.value.toUpperCase();
    const langReg = /^[a-zA-Z\s]+$/;
    if (
      uperValue.split(" ").length !== 2 ||
      uperValue.length < 3 ||
      uperValue.length > 30 ||
      !uperValue.match(langReg)
    ) {
      setInput("Вы ввели некоректные данные");
    } else {
      setInput("");
      setEnterName(true);
    }
  };
  const handleValidMail = (e) => {
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!e.target.value.match(regEmail)) {
      setMailinp("Вы ввели некоректный емаил");
    } else {
      setMailinp("");
      setEnterMail(true)
    }
  };
  const handleArea = (e) => {
    if (e.target.value.length < 10) {
      setArea("Введенн слишком маленький текст");

    } else if (e.target.value.length > 300) {
      setArea("Введен слишком длинный текст");
    } else {
      setArea("");
      setTextArea(true)
    }
  };

  useEffect(()=>{
    if(textArea && enterName && enterMail){
      setDsee(false)
    }else{
      setDsee(true)
    }
  })





  return (
    <div className="form__body">
      <form className="form" onSubmit={submit}>
        <InputEnter
          onInput={handleValidName}
          text="First and Last name"
          type="text"
          name="FirstLastname"
        />
        <p className="error">{input}</p>
        <InputEnter
          onInput={handleValidMail}
          text="Email"
          type="mail"
          name="Email"
        />
        <p className="error">{mailinp}</p>
        <NumberFormat format="+7 (###) ###-##-##" allowEmptyFormatting mask="_" />
        <p className="error"></p>
        <InputEnter text="date of birsday" type="date" name="date" />
        <p className="error"></p>
        <textarea onInput={handleArea}></textarea>
        <p className="error">{area}</p>
        <button disabled={dsee}>Submit</button>
        <p className="error">{status}</p>
      </form>
    </div>
  );
}
