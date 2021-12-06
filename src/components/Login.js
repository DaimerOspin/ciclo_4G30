import React, { Component } from 'react';
import axios from 'axios';
import appConfig from '../appConfig'


export default class Login extends Component {
    constructor(props){ //props= propiedades delo que se ingresa a travez del input en este caso
        super(props); //para llamar las propiedades del padre
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.changeStateDaAPP=this.props.onTryLogin;

        //cmponent state
        this.state={
            username:'',
            password:'',
        };
    }

    // changeStateDaAPP(){
    // this.chaneStateDaAPP('','');
    
    async handleClick(){
        //alert('click function')
        let response= await axios.post(appConfig.urlBackEnd + 'clientes', this.state);
        //console.log(response)
        if (response.data.length > 1){
            this.changeStateDaAPP(true,response.data[0].nombre)
            //actualizar l estado de logged
        }else{
            console.log(response.data.length)
            alert('usurio o contraseña erroneos')
        }


    }
    async handleChange(e){
        if(e.target.name == 'username'){
            await this.setState({
                username: e.target.value,
            });
        }else{
            await this.setState({
                password:e.target.value,
            });
        }
        console.log(this.state)
        
    }
    render() {
        return (
            <div>
                <form className='formulario'>
                    <label>Nombre usuario</label>
                    <br/>
                        <input type='text' name='username' onChange={this.handleChange}/>
                        <br/>
                        <br/>
                    <label>Password</label>
                    <br/>
                        <input type='password' name='password' onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <input type='button' onClick={this.handleClick} value='Login' />
                </form>
            </div>
        )
    }
}
