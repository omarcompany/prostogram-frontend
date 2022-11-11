export const Login = (): JSX.Element => {
  return (
    <div className="auth">
      <form className="auth-form">
        <p className="auth-form-header">Login</p>

        <label className="auth-form-label">
          <input
            className="auth-form-input"
            type="text"
            id="email"
            name="login_form_email"
            placeholder="Email"
          />
        </label>

        <label className="auth-form-label">
          <input
            className="auth-form-input"
            type="text"
            id="password"
            name="login_form_password"
            placeholder="Password"
          />
        </label>

        <input
          className="button auth-form-submit"
          type="submit"
          id="submit"
          name="login_form_submit"
          value="Sign in"
        />
      </form>
    </div>
  );
};
