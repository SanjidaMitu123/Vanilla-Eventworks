
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";



const Login = () => {

  const {signIn} = useContext(AuthContext);
  
    const Login = e => {
        e.preventDefault();
        console.log(e.currentTarget)
         const form = new FormData(e.currentTarget);
         const email = form.get('email');
         const password = form.get('password');
         console.log(email, password)

         signIn(email, password)
         .then(result =>{
          console.log(result)
         })
         .catch (error => {
          console.error(error)
         })
         
    }
    
    return (
        <div>
         <h1 className="text-4xl text-center">Login</h1>
      <form onSubmit={Login} className="md:w-3/4 lg:w-1/2 mx-auto" >
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <p className="text-center mt-5">For new Account <Link to='/register' className="font-bold text-cyan-500 mt-5"> Resgister</Link> Now</p>
            
        
        </div>
    );
};

export default Login;