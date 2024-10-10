import { createContext, useContext, useState } from 'react';
export const UserContext = createContext({
    user: '',
    setUser : void function (){},
});
export const useLoginSession = ()=> useContext(UserContext);
function LoginContext(props) {
    const [user, setUser] = useState('');

    return(
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}
export default LoginContext;