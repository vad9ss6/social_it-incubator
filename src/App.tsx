import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";





function App() {
    return (
        <div className="wrapper">
            <Header/>
            <SideBar/>
            <div className={"app-wrapper-content"}>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/profile' render={() => <Profile/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
