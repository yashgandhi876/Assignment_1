import axios from 'axios';
import React,{Component} from 'react'
import Input from "./Input";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""

         }
    }

    handleClickEvent = async (email,password)=>{
        let da = {
            email,
            password
        };
        var data;
//         {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }

        try{
            data = await axios.post("https://reqres.in/api/login",da);
            console.log(data);
            if(data && data.status === 200){
                console.log("Loged In Successfully.....");
            }
            window.location.href = "/users";
        }
        catch(err){
            alert("please provide correct mail and password..");
        }

    }

    render() {
        return (
            <div className="login" style={{width:'80%', margin:"10% auto", height:"100%", padding:"10px"}}>
                <h1>
                    Login here
                </h1>
                <Input value={this.state.email} onChange={(e)=>{this.setState({...this.state, email:e.target.value})}} type="email" placeholder="abc@gmail.com"/>
                <br/>
                <br/>
                <Input value={this.state.password} onChange={(e)=>{this.setState({...this.state, password:e.target.value})}} type="password" placeholder="PassWord"/>
                <br/>
                <br/>
                <button onClick={(e)=>{this.handleClickEvent(this.state.email, this.state.password)}} >Login</button>
            </div>
         );
    }
}

export default Login;
