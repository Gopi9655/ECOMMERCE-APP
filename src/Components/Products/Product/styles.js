import { makeStyles } from "@material-ui/core";
///import { height } from "@material-ui/system";
export default makeStyles(()=>({
    root:{
        maxWidth:'100%',
        backgroundColor:"#c1e4cc",
        
    },
    media:{
        height:0,
        paddingTop:'56.26%',
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end',
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:"#685ed5",
        

    }
}))