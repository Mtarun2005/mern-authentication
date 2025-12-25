import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile({ setIsAuthenticated }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="register-container">
      <h2>Profile</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
