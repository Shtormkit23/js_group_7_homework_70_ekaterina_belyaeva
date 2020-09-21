import React from 'react';
import Layout from "./components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import MainPage from "./containers/MainPage";


const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route render={() => <h1>404 Not Found</h1>}/>
      </Switch>
    </Layout>
);

export default App;