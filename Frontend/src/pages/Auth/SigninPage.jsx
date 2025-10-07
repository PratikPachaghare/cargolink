import React from 'react'

export default function SigninPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("sender");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication - you can replace with API later
    if (username && password) {
      login(username, role);
      navigate("/"); // Redirect to homepage
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* Card Container */}
      <div className="bg-white shadow-2xl rounded-2xl flex w-full max-w-4xl overflow-hidden">
        
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="text-center mb-6">
            <img src={LogoImage} alt="CargoLink Logo" className="w-24 mx-auto mb-3" />
            <h1 className="text-2xl font-extrabold text-blue-700">CargoLink</h1>
            <p className="text-gray-500 text-sm">Direct Cargo, Zero Commission 🚚</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Login as</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="sender"
                    checked={role === "sender"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <span>Sender</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="transporter"
                    checked={role === "transporter"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <span>Transporter</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Side - Banner */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-700 to-indigo-800 text-white flex-col justify-center items-center p-12">
          <h2 className="text-3xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to CargoLink
          </h2>
          <p className="text-lg text-center max-w-md mb-6 text-gray-200">
            Where <span className="font-semibold text-yellow-300">Senders</span>{" "}
            meet <span className="font-semibold text-yellow-300">Transporters</span>{" "}
            directly.
          </p>
          <div className="grid grid-cols-1 gap-4 text-left w-full max-w-md">
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-xl">✔</span>
              <span>Direct sender ↔ transporter matching</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-xl">✔</span>
              <span>Shared cargo trips — pay only for space you use</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-xl">✔</span>
              <span>Transparent pricing — no middlemen</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-xl">✔</span>
              <span>Faster booking & trusted network</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
