import { Link, Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <nav>
      <Link to={"login"}>Login</Link>
      <Link to={"profile"}>Profile</Link>
      <Link to={"home"}>Home</Link>

      <hr />
      <Outlet />
    </nav>
  );
}

export default Dashboard;
