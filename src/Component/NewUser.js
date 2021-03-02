import React,{useState} from 'react'
import Input from "./Input";
import axios from "axios";

function NewUser() {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");

    async function handleEventBtn(e){
        let data = {
            first_name,
            last_name,
            email
        }

        if(first_name.trim() && last_name.trim() && email.trim()){

            let da = await axios.post("https://reqres.in/api/users", data);
            console.log(da);
            alert("User added Successfully");
            window.location.href = "/users";
        }
        else{
            alert("provide correct inputs");
        }

    }


    return(
        <div className="newuser" style={{width:"80%", margin:"auto"}}>
            <h1>
                Add New User
            </h1>
            <Input type="text" placeholder="First_Name" value={first_name} onChange={(e)=>setFirst_name(e.target.value)} />
            <br/><br/><Input type="text" placeholder="Last_Name" value={last_name} onChange={(e)=>setLast_name(e.target.value)} />
            <br/><br/><Input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br/><br/><button onClick={handleEventBtn} >Save</button>
        </div>
    );
}


export default NewUser;