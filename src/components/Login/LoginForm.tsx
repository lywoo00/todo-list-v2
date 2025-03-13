import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebaseApp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const LoginForm = () => {
  const [error, setError] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, userEmail, userPw);
      navigate("/todo-list-v2/");
      toast.success("로그인에 성공했습니다.");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        toast.error(`로그인 실패 ${error?.code}`);
      } else {
        toast.error("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      } else {
        setError("");
      }
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
          로그인
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="userEmail" className="block text-sm/6 font-medium">
              이메일
            </label>
            <div className="mt-2">
              <input
                id="userEmail"
                name="userEmail"
                type="email"
                value={userEmail}
                onChange={onchange}
                required
                autoComplete="userEmail"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="userPW" className="block text-sm/6 font-medium">
                비민번호
              </label>
            </div>
            <div className="mt-2">
              <input
                id="userPW"
                name="userPW"
                type="password"
                value={userPw}
                onChange={onchange}
                required
                autoComplete="current-userPW"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
              />
            </div>
            {error && error?.length > 0 && (
              <p className="text-red-500 text-small">{error}</p>
            )}
          </div>

          <div className="mb-[10px]">
            <button
              type="submit"
              disabled={error?.length > 0}
              className="flex w-full justify-center rounded-md bg-172b4d px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-172b4d"
            >
              로그인
            </button>
          </div>
          <div className="text-right text-small">
            <Link to="/signup">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
