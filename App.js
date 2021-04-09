import React from "react";
import './App.css';
import Feed from "./Feed";
import Header from "./Header";
// import Post from "./Post";
import Sidebar from "./Sidebar";
// import SidebarRow from "./SidebarRow";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const[{user}, dispatch] = useStateValue();
  return (
    // BEm naming convention

    <div className="app">
      {!user ? ( <Login />
      
      ) : (
        <>
        <Header />

      <div className="app_body">
        <Sidebar /> 
        <Feed />
        <Widgets />

      </div>
      </>
      )}
    </div>

    
  );
}
export default App;
