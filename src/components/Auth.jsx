import { auth ,googleProvider} from "../config/firebase";
import {
  createUserWithEmailAndPassword,signInWithPopup, signOut
} from "firebase/auth";
import { useState } from "react";

 const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  
      const SigIn =  async ()=>{
          await createUserWithEmailAndPassword(auth,email,password)
      }
    
  
      const SigInWithGoogle =  async ()=>{
        await signInWithPopup(auth,googleProvider)
    }
    const logout =  async ()=>{
        await signOut(auth)
    }
  

  

  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={SigIn}> Sign In</button>

      <button onClick={SigInWithGoogle}> Sign In With Google</button>

      <button onClick={logout} > Logout </button>
    </div>
  );
};
export default Auth