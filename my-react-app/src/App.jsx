import React, {useContext, useCallback, useEffect} from "react";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./pages/Footer";
import { NavLink, Outlet, useNavigate  } from "react-router-dom";
import { FormContext } from "./pages/FormContext";
import { Search } from "lucide-react";


function App() {
   const navigate = useNavigate();


const handleLogout = () => {
  localStorage.removeItem("user"); // remove login user
  navigate('/'); 
};

// AUTO LOGOUT TIME
const autoLogoutTime = 5 * 60 * 1000; // 5 minutes
  const autoHandleLogout = useCallback(() => {
    localStorage.removeItem("user");
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    let logoutTimer;
    const resetTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(handleLogout, autoLogoutTime);
    };

    // Activities that count as "active"
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    // Start timer when page loads
    resetTimer();

    return () => {
      clearTimeout(logoutTimer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, [autoHandleLogout]);




const {
  user,
 userName,
 search,
 setSearch
 } = useContext(FormContext);


  return (
  <div className="flex flex-col h-screen max-w-[1570px] mx-auto bg-gray-100    overflow-hidden">
  {/* Header (fixed height) */}
  <header className="h-16 bg-w border shadow-sm flex items-center px-8 shrink-0 ">
    <nav className="flex gap-6">
      {[
        // { name: "Logout User", path: "/login" },
        { name: "Register", path: "/register" },
        { name: "Data Charts", path: "/addData" },
        { name: "Add Data", path: "/form" },
        { name: "View Data", path: "/viewData" },
      ].map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `relative text-sm font-medium transition !no-underline ${
              isActive
                ? "text-indigo-600 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-indigo-600"
                : "text-gray-600 hover:text-indigo-600"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
   {/* Search Box */}
  <div className="relative w-1/2">
  <Search
    className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-500"
    size={18}
  />

  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search by data, fligt operator, aircraft, incident location, r/way ..."
    className="w-full py-1 px-4 pl-8 border rounded-lg text-black focus:outline-none focus:ring-0 focus:border-gray-300"
  />
</div>

    <div className="ml-auto text-sm text-gray-600">
      Welcome{" "}
      <span className="font-semibold capitalize text-indigo-600 px-2">
        {userName}
      </span>
      <small className="text-red-500 left-5">
        <button
        onClick={handleLogout}
        >Logout User</button>
      </small>
    </div>
  
  </header>
  {/* Scrollable Content ONLY */}
  <main className="flex-1 overflow-y-auto bg-image containa p-6">
    <div className="w-full">
      <Outlet />
    </div>
  </main>
  {/* Footer (fixed) */}
  <footer className="bg-white py-6 border-t h-[70px] shrink-0">
    <Footer />
  </footer>

</div>
  );
}

export default App;