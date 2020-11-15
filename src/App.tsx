import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {StateType} from "./Redux/state";


// type AppType = {
//     state: StateType
//     addPost: addPostType
//     updateNewPostText:(value: string) => void
//     subscribe?:(funRererender:() => void) => void
// }

type AppPropsType = {
    state: StateType
    dispatch: () => void

    // addPost: () => void
    // updateNewPostText: (value: string) => void
}

function App(props: AppPropsType) {
    return (
        <div className="wrapper">
            <Header/>
            <SideBar/>
            <div className={"app-wrapper-content"}>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} />}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
