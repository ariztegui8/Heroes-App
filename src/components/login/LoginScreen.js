import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import icon from '../../image/icon-marvel.jpg'

const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = ()=>{

        const lastPath = localStorage.getItem('lastPath') || '/';
        
        dispatch({
            type: types.login,
            payload:{
                name: 'Jorge'
            }
        })
        history.replace(lastPath);
    }


    return (
        <div className="container mt-5 text-center">

            <img    
                src={icon}
                alt="perro"
               
            />
            <hr />

            <h1>LOGIN</h1>
            <hr />
            

            <button
                className="btn btn-success btn-lg btn-block"
                

                onClick={handleLogin}
            >
                Login 
            </button>

            
        </div>
    )
}

export default LoginScreen
