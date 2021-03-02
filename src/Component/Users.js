import React,{useState, useEffect} from 'react';
import Input from "./Input";
import axios from "axios";
import "./Users.css";

function Users() {
    const [data, setData] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fun(){
            let db;
            db = await axios.get('https://reqres.in/api/users');
            db = db.data.data;
            console.log(db);
            setData(db);
            console.log(data)
        }
        fun();
    }, []);

    async function  handleDeleteEvent(id){
        let results = window.confirm("Do you really want to delete?")
        if(results){

            try{
                let das = await axios.delete(`https://reqres.in/api/users/${id}`);
                console.log(das);
                alert(`Data of ID ${id} is deleted successfully`);
            }catch(err){

            }
        }

    }

    async function handleEditEvent(e,id,first_name,last_name,email){
        e.preventDefault();
        console.log(`/edit?${id}&${first_name}&${last_name}&${email}`);
        window.location.href = `/edit?${id}&${first_name}&${last_name}&${email}`;
    }

    async function handleSearchEvent(e){
        setSearch(e.target.value);
        try{
            if(e.target.value){
                let dd = await axios.get(`https://reqres.in/api/users/${e.target.value}`);
                console.log(e.target.value);
                console.log([dd.data.data]);
                setData([dd.data.data]);
            }
            else{
                let dd = await axios.get(`https://reqres.in/api/users/`);
                setData(dd.data.data);
            }
        }catch(err){
            alert("provide correct input...");
        }
    }

    return (
        <div className="users">
            <h1>My Customers</h1>
            <br/>
            <Input value={search} onChange={(e)=>handleSearchEvent(e)} className="searchbar" type="search" placeholder="search by ID" />
            <br/>
            <button className="btn"> <a href="/newuser"> Add User</a></button>
            <br/>
            <br/>

            <table style={{width:"80%", margin:'auto '}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                     {
                    data ?
                    data.map(dat =>(
                        <tr key={dat.id}>
                            <td>
                                {dat.id}
                            </td>
                            <td>
                                {dat.first_name}
                            </td>
                            <td>
                                {dat.last_name}
                            </td>
                            <td>
                                {dat.email}
                            </td>
                            <td>
                                <a onClick={(e)=>handleEditEvent(e,dat.id,dat.first_name,dat.last_name,dat.email)}> Edit </a> &nbsp;
                                <a onClick={()=>handleDeleteEvent(dat.id)} > Delete </a>
                            </td>
                        </tr>
                    ))
                    : ''
                }
                </tbody>
            </table>

        </div>
    );
}


export default Users;
