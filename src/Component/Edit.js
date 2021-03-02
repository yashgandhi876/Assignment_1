import axios from 'axios';
import React,{useState} from 'react'
import Input from "./Input";

function Edit() {
    let link = window.location.href;
    let arr = link.split("?")[1].split("&");
    const id = arr[0];
    const [first_name, setFirst_name] = useState(arr[1]);
    const [last_name, setLast_name] = useState(arr[2]);
    const [email, setEmail] = useState(arr[3]);

    async function handleEditEvent(){
        let dataa = {
            first_name,
            last_name,
            email
        }

        if(first_name.trim() && last_name.trim() && email.trim()){

            try{
                let result = await axios.put(`https://reqres.in/api/users/${id}`, dataa);
                if(result&&result.status === 200){
                    alert("Details has been updated...");
                    window.location.href = "/users";
                }

            }catch(err){
                alert(`provide correct details`);
            }
        }
        else{
            alert(`provide correct details`);
        }

    }
    return(
        <div className="edit" style={{width:"80%", margin:"10% auto"}}>
            <h1>
                Edit here
            </h1>
            <Input value={first_name} onChange={(e)=>{setFirst_name(e.target.value)}} type="text" placeholder="first_name" /><br/><br/>
            <Input value={last_name} onChange={(e)=>{setLast_name(e.target.value)}} type="text" placeholder="last_name" /><br/><br/>
            <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="email" /><br/><br/>
            <button onClick={handleEditEvent}>Save</button>
        </div>
    )
}


export default Edit;