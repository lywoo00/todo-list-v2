import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
          로그인
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium">
              이메일
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium">
                비민번호
              </label>
              {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-172b4d">
                    비밀번호 찾기
                  </a>
                </div> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
              />
            </div>
          </div>

          <div className="mb-[10px]">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-172b4d px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-172b4d"
            >
              로그인
            </button>
          </div>
          <div className="text-right text-small">
            <Link to="/todo-list-v2/signup">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
