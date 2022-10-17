import React, { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../api";
import './login.scss'

const LoginForm = () =>{
  // let navigate = useNavigate();
  // useEffect(() => {
  //   let token = localStorage.getItem('token');
  //   if (token) {
  //     navigate('/')
  //   }
    
  // }, [])
    return (
      <div id='login'>
          <div id="loginform">
              <FormHeader title="Login" />
              <Form />
          </div>
      </div>
    )
  }
  
  const FormHeader: FunctionComponent<{ title: string }>  = (props) => (
      <h2 id="headerTitle">{props.title}</h2>
  );
  
  
  const Form  = () => (
     <div>
       <FormInput description="Email" type="text" />
       <FormInput description="Password" type="password"/>
       <FormButton title="Log in"/>
     </div>
  );
  
  const FormButton: FunctionComponent<{ title: string }> = props => {
    let navigate = useNavigate();
    const handleLogin = async() => {
        const { access_token } = await login('buithanhtho14ig@gmail.com', '2021996');
        localStorage.setItem('token', access_token)
        navigate('/')
    }
    return(
        <div id="button" className="row">
            <button onClick={() => handleLogin()}>{props.title}</button>
        </div>
    )
  }
  
  const FormInput: FunctionComponent<{ description: string, type: string }> = props => (
    <div className="row">
      <label>{props.description}</label>
      <input type={props.type} />
    </div>  
  );
  

export default LoginForm;
  
  