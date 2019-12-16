import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    root:{
        padding: "0 1em 1em 1em",
        "& .key":{
            fontSize: "1.3em",
            fontWeight: "bolder",
            marginBottom: "1em"
        },
        "& .body":{
            fontSize: "1.1em"
        }
    }
})

export default useStyles