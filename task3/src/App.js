import { useSelector } from "react-redux";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import { selectUser } from "./Store/userSlice";

const App = () => {
  const user=useSelector(selectUser);
  return (
    <div>
      {user ? <Logout/> : <Login/>}
    </div>
    
    
    
  )
}

export default App