import React from "react";
import '../assests/css/Login.css'
import logo from '../assests/img/user.png';
import {Apiurl} from '../services/ApiRest';
import axios from 'axios';


class Login extends React.Component{

    state = {
        form:{
            "cedula": "",
            "password":""
        },
        error:false,
        errorMsg:""
    }

    manejadorBtn = e => {
        e.preventDefault();
    }

    change = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    inicioSesion = async () => {
        console.log(this.state.form)
        try {
            const response = await axios.post(`${Apiurl}/usuarios/`,  this.state.form);
            return await response.data;
        } catch (error) {
            console.log("Error: ", error);
            return error;
        }
    }

    render(){
        return(
           <React.Fragment>
               <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <br/><br/>
                        <img src={logo} width = "100px" alt="User Icon" />
                            <br/><br/>
                        </div>

                        <form onSubmit = {this.manejadorBtn}>
                        <input type="text" className="fadeIn second" name="cedula" placeholder="Usuario" onChange = {this.change} />
                        <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange = {this.change} />
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick = {this.inicioSesion} />
                        </form>

                        <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>

                    </div>
                </div>
           </React.Fragment>
        );
    }
}

export default Login