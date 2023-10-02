import { useContext } from "react";
import { useReducer } from "react";
import { UserContext } from "../../contexts/User";

const DEFAULT_VALUE = {
  login: "",
  password: "",
  code: "",
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "changeField": {
      return { ...state, [action.payload.field]: action.payload.value };
    }
    case "setLogin":
      return { ...DEFAULT_VALUE, login: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "setCode":
      return { ...state, code: action.payload };
    case "reset":
      return { ...DEFAULT_VALUE };
    default:
      return state;
  }
};

export const AuthorizationForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <div>
        <span>login:</span>
        <input value={user} onChange={(event) => setUser(event.target.value)} />
      </div>
      <div>
        <span>password</span>
        <input
          value={formValue.password}
          onChange={(event) => {
            dispatch({ type: "setPassword", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>sms code</span>
        <input
          value={formValue.code}
          onChange={(event) => {
            dispatch({ type: "setCode", payload: event.target.value });
          }}
        />
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Login</button>
    </div>
  );
};
