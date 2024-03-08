import React from "react";

const UserContext=React.createContext()

export default UserContext;

//whenever we create Context it will give provider

{/* <UserContext>
    <Login/>
    <Card/>
    <Data/>
</UserContext> */}

// if we are wrapping components with Context then the Context has access of the component at global level