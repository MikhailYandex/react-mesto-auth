import AuthForm from "./AuthForm";

const Login = ({ onLogin }) => {
	return (
		<AuthForm
      title="Вход"
      nameForm="authentication"
      buttonText="Войти"
      onSubmit={onLogin}
    />
	)
}

export default Login