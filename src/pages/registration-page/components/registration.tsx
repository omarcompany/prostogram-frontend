export const Registration = (): JSX.Element => {
    return (
      <div className="auth">
        <form className="auth-form" action="#" method="post">
          <p className="auth-form-header">Registration</p>
  
          <label className="auth-form-label">
            <input
              className="auth-form-input"
              type="text"
              id="email"
              name="registration_form_email"
              placeholder="Email"
            />
          </label>
  
          <label className="auth-form-label">
            <input
              className="auth-form-input"
              type="text"
              id="password"
              name="registration_form_password"
              placeholder="Password"
            />
          </label>
  
          <input
            className="button auth-form-submit"
            type="submit"
            id="submit"
            name="registration_form_submit"
            value="Sign up"
          />
          <button className="alredy-have-account-button auth-header-button">
            Have an Account Already? Sign in
          </button>
        </form>
      </div>
    );
  };
  