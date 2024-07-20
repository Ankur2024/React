import React ,{useContext} from 'react';
import UserContext from "../context/UserContext";
import userContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(userContext);
    
    if(!user) return <>please login</>
    return <div>Welcome {user.username}</div>
}

export default Profile