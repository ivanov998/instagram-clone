import Landing from "../../../pages/Landing";

const ProtectedRoute = ({children}) => {
  
    // TODO: make it a real variable
    const isLoggedIn = false;
    
    if (!isLoggedIn) {
        return <Landing />;
    }

    return children;
}

export default ProtectedRoute;