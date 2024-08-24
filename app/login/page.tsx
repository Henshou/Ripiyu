
// front end of the login page
export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navigation Menu */}
      <nav className="text-white h-auto bg-[#0078B7] p-4">
        <div className="container mx-auto flex justify-between">
          <div className="pl-4 text-xl font-bold ">Ripiyu</div>
          <div className="text-xl font">
            <a href="http://localhost:3000/login">Login</a>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <main className="flex-grow  flex items-center justify-center background bg-gray-100">
        <div className="flex w-full formSize flex-col p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl pt-3 pl-3 text-gray-800">Welcome to</h1>
          <h1 className="mb-8 text-3xl pl-3 font-bold text-gray-800">Ripiyu</h1>

          <form className="w-full">
            
            <div className="mb-8">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border-2 rounded-tl-xl rounded-tr-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mt-[0.80px] px-3 py-2 border-2 rounded-bl-xl rounded-br-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#0051B8] text-white rounded-full hover:bg-blue-600"
            >
              Login
            </button>
            <button
              type="submit"
              className="pb-16 w-full py-2 text-black hover:underline"
            >
              Forgot Password?
            </button>

            <button
              type="submit"
              className="w-full py-2 text-black border-2 custom-border rounded-full hover:bg-gray-200"
            >
              Create New Account
            </button>
          </form>
        </div>
      </main>
      <div className="h-auto bg-[#0078B7] p-4"> 
      <div className="pl-4 text-[#0078B7] text-xl font-bold ">..</div>      
      </div>

    </div>

  );
}
