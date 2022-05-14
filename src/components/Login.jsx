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
        try {
            console.log(this.state.form);
            const response = await axios.post(`${Apiurl}/usuarios/`,  this.state.form);
            console.log(response);
            console.log(response.data.status);
            alert("Credenciales correctas");
            console.log(this.props.history.push("/dashboard"));
            window.location.reload(true);
        } catch (error) {
            alert("Credenciales incorrectas");
            console.log("Error: ", error.response.data);
            window.location.reload(true);
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

                        </div>

                    </div>
                </div>
           </React.Fragment>
        );
    }
}

export default Login