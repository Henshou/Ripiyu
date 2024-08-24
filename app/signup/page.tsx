
// front end of the signup page

export default function signupPage() {
    return (
      <div className="flex flex-col h-screen">
        {/* Navigation Menu */}
        <nav className="text-white h-[8%] bg-[#0078B7] p-4">
          <div className="container mx-auto flex justify-between">
            <div className="pl-4 text-xl font-bold ">Ripiyu</div>
            <div className="text-xl font">
              <a href="http://localhost:3000/login">Login</a>
            </div>
          </div>
        </nav>
  
        {/* Signup Form */}
        <main className="flex-grow  flex items-center justify-center background bg-gray-100">
          <div className="flex w-full formSize flex-col p-4 bg-white rounded-lg shadow-lg">
            <h1 className="mb-6 text-3xl pl-3 font-bold text-gray-800">Create a username</h1>
            <h2 className="mb-8 text-md pl-3 text-gray-800">Before creating an account, make a username. You can change this anytime you want.</h2>

            <form className="w-full">
              
              <div className="mb-4">
                <input
                  type="username"
                  placeholder="Username"
                  className="w-full px-3 py-2 pb-10 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  

            </form>
          </div>
        </main>
        <div className="text-white h-[8%] bg-[#0078B7] p-4">       
        </div>
  
      </div>
  
    );
  }
  