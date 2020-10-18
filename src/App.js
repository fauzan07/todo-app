import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import AllBuckets from "./pages/AllBuckets/AllBuckets";
import Bucket from "./pages/Bucket/Bucket";
import CreateBucket from './pages/CreateBucket/CreateBucket';
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import { AuthProvider } from './context/Auth';
import PrivateRoute from './common/guards/PrivateRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header />
        <Switch>
          <PrivateRoute path="/" exact  component = {AllBuckets} />
          <PrivateRoute path="/CreateBucket" component = {CreateBucket} />
          <PrivateRoute path="/bucket/:bucketName" component = {Bucket} />
          <Route path="/LoginRegister" component={LoginRegister} />
          <Route path="*" render = {() => <h3>Page not Found!</h3>} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
