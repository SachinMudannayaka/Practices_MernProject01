import React,{Component} from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";
import NavBar from "./components/NavBar";
export default class App extends Component{
  render(){
    return(
      
      <BrowserRouter>
      
      <div className="container">
      
      <NavBar/>
      <Routes>
      
      <Route path="/"  exact components={Home}/>
       <Route path="/add" component={CreatePost}/>
       <Route path="/update/:id"component={EditPost}/>
        <Route path="/post/:id" component={PostDetails}/>
       
      </Routes>
      </div>
      
      </BrowserRouter>
      
      
    )
}
}