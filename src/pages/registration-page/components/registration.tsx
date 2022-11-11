export const Registration = (): JSX.Element => {
    return (
      <div className="registration">
        <form className="registration-form" action="#" method="post">
          <p className="registration-form-header">Registration</p>
  
          <label className="registration-form-label">
            <input
              className="registration-form-input"
              type="text"
              id="email"
              name="registration_form_email"
              placeholder="Email"
            />
          </label>
  
          <label className="registration-form-label">
            <input
              className="registration-form-input"
              type="text"
              id="password"
              name="registration_form_password"
              placeholder="Password"
            />
          </label>
  
          <input
            className="button registration-form-submit"
            type="submit"
            id="submit"
            name="registration_form_submit"
            value="Sign up"
          />
          <button className="sign-in-button alredy-have-account-button">
            Have an Account Already? Sign in
          </button>
        </form>
      </div>
    );
  };
  