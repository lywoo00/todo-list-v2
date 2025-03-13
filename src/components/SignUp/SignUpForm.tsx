import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebaseApp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

function SignUpForm() {
  const [error, setError] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");
  const [userPwVerify, setUserPwVerify] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPw);
      navigate("/");
      toast.success("회원가입에 성공했습니다.");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        toast.error(`회원가입 실패 ${error?.code}`);
      } else {
        toast.error("알 수 없는 오류가 발생했습니다.");
      }
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "userEmail") {
      setUserEmail(value);
      const validEmailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value?.match(validEmailRegex)) {
        setError("이메일 형식이 올바르지 않습니다.");
      } else {
        setError("");
      }
    }

    if (name === "userPW") {
      setUserPw(value);
      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력 해주세요");
      } else if (userPwVerify.length > 0 && value !== userPwVerify) {
        setError("비밀번호가 다릅니다. 다시 확인 해주세요.");
      } else {
        setError("");
      }
    }

    if (name === "userPWV") {
      setUserPwVerify(value);
      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력 해주세요");
      } else if (value !== userPw) {
        setError("비밀번호가 다릅니다. 다시 확인 해주세요.");
      } else {
        setError("");
      }
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
          회원가입
        </h2>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-5 mb-[10px]">
            <div className="col-span-full">
              <label
                htmlFor="userEmail"
                className="block text-sm/6 font-medium"
              >
                이메일
              </label>
              <div className="mt-2">
                <input
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  autoComplete="userEmail"
                  value={userEmail}
                  onChange={onChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="userPW" className="block text-sm/6 font-medium">
                비밀번호
              </label>
              <div className="mt-2">
                <input
                  id="userPW"
                  name="userPW"
                  type="password"
                  value={userPw}
                  autoComplete="userPW"
                  onChange={onChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="userPWV" className="block text-sm/6 font-medium">
                비밀번호 확인
              </label>
              <div className="mt-2">
                <input
                  id="userPWV"
                  name="userPWV"
                  type="password"
                  value={userPwVerify}
                  autoComplete="userPWV"
                  onChange={onChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          {error && error?.length > 0 && (
            <p className="text-red-500 text-small">{error}</p>
          )}
          <div className="mt-1">
            <span className="text-small mr-2">계정이 이미 있으신가요?</span>
            <Link to="/login" className="text-small text-gray-500">
              로그인 하기
            </Link>
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="가입하기"
              disabled={error?.length > 0}
              className="w-full rounded-md bg-172b4d px-3 py-2 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-172b4d"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
