import React, { Component } from "react"
import Header from "./components/Header"
import { Switch, Route, Redirect } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import Login from "./components/Login"
import MenuAppBar from "./components/MenuAppBar"
import SampleList from "./components/SampleList"
import CreateSample from "./components/CreateSample"
import SampleListContainer from "./containers/SampleListContainer"
import SuperTable from "./components/SuperTable"
import Search from "./components/Search"

// localStorage.setItem(
//   "jwt",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJoYWNrZXItc2VydmVyLWRiQGRldiIsInJvbGVzIjpbImFkbWluIl19LCJpYXQiOjE1MzYwNTYwNjgsImV4cCI6MTUzNjY2MDg2OH0.cImcRd9EFoyV2hRXXY8H8gEpyhme0eZaV7xgTu1JCMQ"
// )

class App extends Component {
  render() {
    return (
      <div className="center w85">
        {/* <Header /> */}
        <MenuAppBar />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route exact path="/table" component={SampleListContainer} />
            <Route exact path="/create" component={CreateSample} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={SampleList} />
            <Route exact path="/new/:page" component={SampleList} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
