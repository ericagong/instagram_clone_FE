import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LOGIN_PATH } from "../../shared/paths";
import { apis } from "../../shared/axios";
import RESP from "../../server/response";
import { useFormik } from "formik";
import { emailCheck, usernameCheck, pwCheck } from "../../shared/regex";
import * as Yup from "yup";

const Signup = (props) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("You should write in proper email format.")
      .required("Required"),
  });

  const validate = (values) => {
    const errors = {};

    if (!emailCheck(values.email)) {
      errors.email = "You should write in proper email format.";
    }

    if (!usernameCheck(values.username)) {
      errors.username =
        "Username should consists of english letters or numbers.";
    }

    if (!pwCheck(values.password)) {
      errors.password =
        "Password should be mixture of english letters, numbers and special characters.(@$!%*#?&)";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      passwordCheck: "",
    },
    onSubmit: ({ email, username, password }) => {
      console.log(email, username, password);

      // const {
      //   data: {
      //     result,
      //     status: { message },
      //   },
      // } = await apis.signup(email, username, password);

      // success
      const {
        result,
        status: { message },
      } = RESP.AUTH.SIGN_UP_SUCCESS;

      // fail
      // const {
      //   result,
      //   status: { message },
      // } = RESP.AUTH.SIGN_UP_FAIL;

      // TODO 하단 모달로 처리
      if (!result) {
        alert(message);
        return;
      }

      navigate(LOGIN_PATH);
    },
    validate,
  });

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const onShowHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Link to={LOGIN_PATH}>
        <div>Go Sign in</div>
      </Link>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <span role="alert">{formik.errors.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="username">username</label>
          <div>Username should consists of english letters or number.</div>
          <input
            type="text"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && (
            <span role="alert">{formik.errors.username}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <div>
            Password should be length of 8 to 15, mixture of english letters,
            number and following special characters(@$!%*#?&).
          </div>
          <input
            type={!show ? "password" : "text"}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <button type="button" onClick={onShowHandler}>
            show
          </button>
          {formik.errors.password && (
            <span role="alert">{formik.errors.password}</span>
          )}
        </div>
        <div>
          <label htmlFor="passwordCheck">password check</label>
          <input
            type={!show ? "password" : "text"}
            id="passwordCheck"
            name="passwordCheck"
            value={formik.values.passwordCheck}
            onChange={formik.handleChange}
          />
          {formik.errors.passwordCheck && (
            <span role="alert">{formik.errors.passwordCheck}</span>
          )}
        </div>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default Signup;
