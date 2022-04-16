import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ''
    })

    const [error, setError] = useState({
        email: "",
        password: '',
        others: ''
    })
    const [singInWithEmail, user, handelError] = useSignInWithEmailAndPassword(auth)


    const handelEmailChange = (e) => {
        const emailRedex = / \S+@\.\S+/;
        const validEmail = emailRedex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
        }
        else {
            setError({ ...error, email: 'invalid email' })
        }
    }








    const handleFromSubmi = (e) => {
        e.preventDefault()


    }

    return (
        <div className='login-container'>
            <div className='login-title'> Login</div>
            <from className=' login-from' onSubmit={handleFromSubmi}>
                <input type="email" placeholder='your email' onChange={handelEmailChange} />
                <input type="password" placeholder='your password' />

                <button>Login</button>
                { }
            </from>
        </div>
    );
};

export default Login;
