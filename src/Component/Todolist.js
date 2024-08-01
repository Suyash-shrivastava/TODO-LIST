import React from "react";
import { useStyles } from "./TodolistCss";
import { TextField,Button } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


export default function Todolist(){

    var classes=useStyles();

    const[input,setInput]=useState("");
    const[list,setList]=useState([]);

    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);


    const handleClick = () => {
        if (!input) {
            return;
        }

        if (isEditing) {
            
            const updatedList = list.map((item, index) => 
                index === currentIndex ? input : item
            );
            setList(updatedList);
            setIsEditing(false);
            setCurrentIndex(null);
        } else {
           
            setList([...list, input]);
        }

        setInput("");
    };

    const handleDelete=(i)=>{
        let filterData=list.filter((items,id)=>{
            return id != i
        })
        setList(filterData)
   
    }
    function handleEdit(i){
        const editTask=list[i];
        setInput(editTask);
        setIsEditing(true);
        setCurrentIndex(i);
        
    }

    const removeAll=()=>{
        setList([])
    }

    return(

        <>
            <div className={classes.nav}>
                <h1>Todolist</h1>
            </div>

            <div className={classes.mainContainer}>
                <div className={classes.box}>
                    <div className={classes.text}>
                    
                        <TextField value={input}  onChange={(event) => setInput(event.target.value)} label="Enter Task" variant="outlined"></TextField>
                        <Button className={classes.btn} variant="outlined" onClick={handleClick} >
                        {isEditing ? "Update" : "Add List"}</Button>                   
                    </div>                    

                    <div className={classes.listheading}>
                        
                    <h2>Your List is Here</h2>
                        {list.map((item, i)=> {
                            return(
                                <div className={classes.list} key={i}>
                                 
                                    <h3>{item}</h3>
                                   
                                   
                                    <div  className={classes.listbtn}>
                                       <div><IconButton>
                                            <EditIcon  onClick={()=>handleEdit(i)}/>
                                            </IconButton>
                                       </div>

                                       <div><IconButton>
                                            <DeleteIcon  onClick={()=>handleDelete(i)}/>
                                            </IconButton>
                                       </div>
                                    </div>
                                    
                                    
                                </div>)}
                            )
                        }
                    </div>

                    <div className={classes.removeAll}>
                        <Button variant="outlined" onClick={removeAll}>Remove All</Button>
                    </div>
               
                </div>    
            </div>
           
        </>
    )
}