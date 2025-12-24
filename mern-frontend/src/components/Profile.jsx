import {useEffect,useState} from "react";

function Profile(){
    const [user,setUser]= useState(null);
    const [error,setError]=useState("");

    useEffect(()=>{
        const token=localStorage.getItem("token");
        console.log("token in profile",token);

        if(!token){
            setError("Not logged in");
            return;
        }

        const fetchProfile =async()=>{
            try{
                const response=await fetch(
                    "http://localhost:5000/api/auth/profile",
                    {
                        method:"GET",
                        headers:{
                            Authorization:`Bearer ${token}`,
                        },
                    }
                );

                const data =await response.json();

                if (!response.ok){
                    setError(data.message || "Access denied");
                    return;
                }

                setUser(data);

            }catch(err){
                setError("Server error");
            }
        };
        fetchProfile();
    },[]);

    if (error){
        return <h3>{error}</h3>;
    }

    if (!user){
        return <h3>Loading...</h3>
    }

    return (
        <div className="register-container">
            <h2>Profile</h2>
            <p><b>Name:</b>{user.name}</p>
            <p><b>Email:</b>{user.email}</p>
        </div>
    );
}

export default Profile;