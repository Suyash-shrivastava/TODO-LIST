import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({


    nav:{
       fontFamily:"Poppins",
       fontSize:'20px',
       textAlign:'center',


    },

    mainContainer:{
        display:'flex',
        justifyContent:'center',
       
        background:'#dfe6e9',
        height:'100vh',
        width:'100vw',
    },
    box:{
        marginTop:'30px',
        padding:'20px',
       
    },
    text:{
        display:'flex',

    },
    listheading:{
        textAlign:'center'

    },

    list:{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'white',
        margin:'15px 0',
        paddingLeft:'15px',
        
        

    },
    listbtn:{
        display:'flex',
        alignItems:'center'

    },
    removeAll:{
       display:'flex',
       justifyContent:'center',
       padding:'40px'

    }
})