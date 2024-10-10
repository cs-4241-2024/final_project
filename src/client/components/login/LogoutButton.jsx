import {useLoginSession} from "../../LoginContext.jsx";
import Button from '@mui/material/Button';

function LogoutButton() {
  const loginSession = useLoginSession();
    return (
        <Button id="logout" sx={{ marginLeft: "auto" }} variant="outlined" onClick={()=> {loginSession.setUser('');}}>Logout</Button>
    );
}

export default LogoutButton;