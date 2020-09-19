import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  StyledFormWrapper,
  StyledContainer,
  StyledInput,
  StyledTextArea,
  StyledButton,
  WarnSpan,
  StyledH3,
  StyledResponseWrapper,
} from "./Contact";

const Contact = () => {
  const [form, setForm] = useState(true);

  const { register, handleSubmit, errors, setValue } = useForm();
  const onSubmit = () => setForm(false);
  const handleNewMessage = () => setForm(true);

  return (
    <StyledContainer>
      {form && (
        <form>
          <StyledFormWrapper>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1" className="styledLabel">
                Name:
              </label>
              <StyledInput
                type="text"
                name="personName"
                className="form-control shadow-none"
                ref={register({ required: true, minLength: 2, maxLength: 30 })}
              />
              {errors.personName && (
                <WarnSpan>(field empty or information invalid)</WarnSpan>
              )}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleFormControlInput1" className="styledLabel">
                Phone:
              </label>
              <StyledInput
                type="text"
                className="form-control shadow-none"
                name="phone"
                placeholder="(53) 999000000"
                ref={register({
                  required: true,
                  minLength: 2,
                  maxLength: 14,
                })}
              />
              {errors.phone && (
                <WarnSpan>(field empty or information invalid)</WarnSpan>
              )}
            </div>
          </StyledFormWrapper>
          <div className="form-group mb-3">
            <label htmlFor="exampleFormControlInput1" className="styledLabel">
              E-mail:
            </label>
            <StyledInput
              type="text"
              name="mail"
              className="form-control shadow-none"
              placeholder="send@email.com"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                },
              })}
            />
            {errors.mail && (
              <WarnSpan>(field empty or information invalid)</WarnSpan>
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleFormControlInput1" className="styledLabel">
              Message:
            </label>
            <StyledTextArea
              type="text"
              name="textArea"
              className="form-control shadow-none styledTextArea"
              ref={register({ required: true, minLength: 5, maxLength: 150 })}
            />
            {errors.textArea && (
              <WarnSpan>(field empty or information invalid)</WarnSpan>
            )}
          </div>
          <div className="d-flex justify-content-around">
            <StyledButton onClick={handleSubmit(onSubmit)} className="mt-2">
              Send
            </StyledButton>
          </div>
        </form>
      )}
      {!form && (
        <StyledResponseWrapper>
          <StyledH3>Mensagem enviada com sucesso!</StyledH3>
          <StyledButton onClick={handleNewMessage}>
            Enviar outra mensagem
          </StyledButton>
        </StyledResponseWrapper>
      )}
    </StyledContainer>
  );
};

export default Contact;
