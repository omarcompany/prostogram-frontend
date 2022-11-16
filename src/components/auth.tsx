import { FormEvent, useRef } from 'react';
import { submitAuthMethod } from '../types';

enum ErrorMessage {
  Email = 'Incorrect email, e.g. name@mail.ru',
  Password = "Password must have at least a number and a letter and mustn't contain spaces",
}

interface IAuthProps {
  submitTitle: string;
  headerTitle: string;
  handleSubmit: submitAuthMethod;
  children?: JSX.Element;
}

export const Auth = ({
  submitTitle,
  headerTitle,
  handleSubmit,
  children,
}: IAuthProps): JSX.Element => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleEmailChange = () => {
    if (emailRef.current !== null) {
      const emailField = emailRef.current;

      const result = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        emailField.value
      );

      result === false
        ? emailField.setCustomValidity(ErrorMessage.Email)
        : emailField.setCustomValidity('');
    }
  };

  const handlePasswordChange = () => {
    if (passwordRef.current !== null) {
      const passwordField = passwordRef.current;

      const containNumber = /\d/g.test(passwordField.value);
      const containString = /[a-z]/gi.test(passwordField.value);
      const containSpace = /[\s]/gi.test(passwordField.value);

      const result = containNumber && containString && !containSpace;

      result === false
        ? passwordField.setCustomValidity(ErrorMessage.Password)
        : passwordField.setCustomValidity('');
    }
  };

  const callSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      if (handleSubmit) {
        handleSubmit(event, emailRef.current.value, passwordRef.current.value);
      }
    }
  };

  return (
    <div className="auth">
      <form className="auth-form" onSubmit={callSubmitHandler}>
        <p className="auth-form-header">{headerTitle}</p>

        <label className="auth-form-label">
          <input
            className="auth-form-input"
            type="text"
            id="email"
            name="registration_form_email"
            placeholder="Email"
            ref={emailRef}
            onChange={handleEmailChange}
          />
        </label>

        <label className="auth-form-label">
          <input
            className="auth-form-input"
            type="password"
            id="password"
            name="registration_form_password"
            placeholder="Password"
            ref={passwordRef}
            onChange={handlePasswordChange}
          />
        </label>

        <input
          className="button auth-form-submit"
          type="submit"
          id="submit"
          name="registration_form_submit"
          value={submitTitle}
        />
        {children}
      </form>
    </div>
  );
};
