import Menu from './menu'
import {auth} from "./firebase.config";
import { updatePassword } from 'firebase/auth';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


function CreatePassword() {
      const password = useRef(null);
       const navigate = useNavigate();
       const handlePasswordChange = async (event) => {
         event.preventDefault();
         const user = auth.currentUser;
         const passwordChanged = password.current.value;
         try  {
              await updatePassword(user, passwordChanged);
           alert("Password has been changed");
           password.current.value = "";
            navigate('/settings');
         } catch (error){
           console.log(error);
           if(error.code === 'auth/requires-recent-login') {
             alert("Error encountered, please log out and then log in to change password");
           }
           else {
             alert('Error encountered, please try again ' +  error.message);
           }
         }
       }




    return (
        <div className="passwordChanger" id="passwordChanger">
              <h1>Change your password here!</h1>
              <form onSubmit={handlePasswordChange}>
                <br></br>
              <label htmlFor="password">Password</label>
              <br></br>
              <br></br>
              <input type="password" placeholder="Enter New Password" ref={password}/>
              <br></br>
               <br></br>
              <button type="submit">Submit</button>
              </form>
              </div>
       )
    }


    export default CreatePassword

