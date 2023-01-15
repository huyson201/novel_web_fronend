import React, { useState } from "react";
import { IoCreateOutline, IoCheckmarkOutline } from "react-icons/io5";
import InputField from "@src/components/InputField";
import { Button } from "@src/components/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FormFeedback from "@src/components/FormFeedBack";
import styles from "./Register.module.scss";
import classNamesBind from "classnames/bind";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authApi from "@src/apis/auth.api";
import { useDispatch } from "react-redux";
import {
  signIn,
  signInFail,
  signInSuccess,
} from "@src/redux/features/authSlice";
import { RegisterInput } from "@src/models";
import { useAppSelector } from "@src/redux";
import { toast } from "react-toastify";
import { HOME_TOAST_ID, REGISTER_SUCCESS_MESSAGE } from "@src/utils";

const cx = classNamesBind.bind(styles);
const schemaObj = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
const Register = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);
  const [signInError, setSignInError] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: yupResolver(schemaObj),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: RegisterInput) => {
    disPatch(signIn());
    try {
      let resData = await authApi.register(data);
      disPatch(signInSuccess(resData));
      toast.success(REGISTER_SUCCESS_MESSAGE, {
        autoClose: 2000,
        containerId: HOME_TOAST_ID,
      });
      navigate("/login");
    } catch (error: any) {
      disPatch(signInFail());
      setSignInError(error.response?.data?.message);
    }
  };

  if (auth.isLogged) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className={cx("register-page")}>
      <div className="form-wrapper">
        <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__title">
            <h2>Đăng ký</h2>
            <IoCreateOutline />
          </div>
          <div className="form__body">
            {signInError && <FormFeedback message={signInError} />}
            <InputField
              error={errors.name?.message}
              register={register}
              title="Họ Tên"
              name="name"
              placeholder="Nguyễn Văn A"
              type="text"
            />
            <InputField
              error={errors.email?.message}
              register={register}
              title="Email"
              name="email"
              placeholder="vidu@gmail.com"
              autoComplete="true"
              type="text"
            />
            <InputField
              error={errors.password?.message}
              register={register}
              title="Mật khẩu"
              name="password"
              type="password"
              placeholder="*******"
            />

            <div className={cx("check-box")}>
              <label htmlFor="agree-rules">
                <input
                  type="checkbox"
                  name="agree-rules"
                  id="agree-rules"
                  onChange={(e: any) => setDisabled(!e.target.checked)}
                />
                <div className={cx("custom-check-box")}>
                  <IoCheckmarkOutline />
                </div>
                <div className={cx("check-box__title")}>
                  Đồng ý với các <Link to="#">điều khoản</Link> và{" "}
                  <Link to="#">chính sách</Link>
                </div>
              </label>
            </div>

            <div className="form__btn-box">
              <Button
                disabled={disabled}
                loading={auth.loading}
                title="Đăng ký"
                type="submit"
                className={cx("register-btn")}
              />
            </div>

            <div className={cx("login-link")}>
              Bạn Đã có tài khoản?
              <Link to="/login"> Đăng Nhập.</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
