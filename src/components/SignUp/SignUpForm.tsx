import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
          회원가입
        </h2>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div className="space-y-5 mb-[10px]">
            <div className="col-span-full">
              <label htmlFor="useEmail" className="block text-sm/6 font-medium">
                이메일
              </label>
              <div className="mt-2">
                <input
                  id="useEmail"
                  name="useEmail"
                  type="email"
                  autoComplete="useEmail"
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
                  autoComplete="userPW"
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
                  autoComplete="userPWV"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
                />
              </div>
            </div>
            {/* <div className="col-span-full">
          <label htmlFor="userId" className="block text-sm/6 font-medium">
            아이디
          </label>
          <div className="mt-2">
            <input
              id="userId"
              name="userId"
              type="text"
              autoComplete="userId"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="userName" className="block text-sm/6 font-medium">
            이름
          </label>
          <div className="mt-2">
            <input
              id="userName"
              name="userName"
              type="text"
              autoComplete="userName"
              placeholder=""
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="userPhone" className="block text-sm/6 font-medium">
            주소
          </label>
          <div className="mt-2">
            <input
              id="userPhone"
              name="userPhone"
              type="tel"
              autoComplete="userPhone"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="userAddress"
            className="block text-sm/6 font-medium"
          >
            휴대폰번호
          </label>
          <div className="mt-2">
            <input
              id="userAddress"
              name="userAddress"
              type="text"
              autoComplete="userAddress"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-172b4d sm:text-sm/6"
            />
          </div>
        </div> */}
          </div>

          <div className="mt-1">
            <span className="text-small mr-2">계정이 이미 있으신가요?</span>
            <Link to="/todo-list-v2/login" className="text-small text-gray-500">
              로그인 하기
            </Link>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full rounded-md bg-172b4d px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-172b4d"
            >
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
