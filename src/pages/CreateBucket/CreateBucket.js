import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { AuthContext } from '../../context/Auth';
import { withRouter, useHistory } from "react-router-dom";
import './CreateBucket.css'

const CreateBucket = (props) => {
    const { currentUser } = useContext(AuthContext);

    const [formComplete, setFormComplete] = useState(false);
    const [formIncompleteError, setFormIncompleteError] = useState(false);
    const [isBucketAdded, setIsBucketAdded] = useState(false);

    const [nameOfBuckets, setNameOfBuckets] = useState("");
    const [bucketDate, setBucketDates] = useState("");


    const NameOfBuckets  = React.useRef();
    const BucketDate  = React.useRef();

    const userId = currentUser.uid;

    // to use history function
    const history = useHistory();

    useEffect(() => {
        setIsBucketAdded(false);
      }, [isBucketAdded]);

    
    const addBucketToDBHandler = (event) => {
        event.preventDefault();
        if(NameOfBuckets.current.value.length === 0 || BucketDate.current.value.length === 0){
        setFormComplete(false);
        setFormIncompleteError(true);
        } else {
        // add column name in firebase
        Axios.post(`https://todo-app-a1032.firebaseio.com/${userId}/bucketContents.json`, {
            bucketName: nameOfBuckets,
            bdate: bucketDate,    
            
        })
            .then((response) => {
                alert("Bucket added succesfully");
                history.push("/");
                setIsBucketAdded(true);
            })
            .catch((error) => console.log(error));

        }
    };

    return(

    <section className="createbucket bg-black">
    <div className="container">
    
        
        <div className="row justify-content-center">
            
                <div className="col-lg-10">
                    <div className="border shadow p-4">
                    <h2 className="pb-3 text-white">Create a Board</h2>
                    {formIncompleteError ?<div class="alert alert-danger" role="alert">Kindly complete the form before adding the Bucket</div> : null}
                    <form  onSubmit={addBucketToDBHandler}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-white">Enter a name of your bucket:</label>
                        <input id="bucketname" type="text" name="bucketname" class="form-control" placeholder="eg Frontend Bucket" ref={NameOfBuckets}  onChange={(event) => setNameOfBuckets(event.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-white">Password</label>
                        <input id="bdate" type="date" name="bdate" className="form-control" ref={BucketDate}  onChange={(event) => setBucketDates(event.target.value)}/>
                    </div>
                    <button type="submit" id="createBucket" className="btn btn-warning" disabled={formComplete}>Submit</button>
                    </form>
                    </div>
                </div>
    
        </div>
    </div>
    </section>

    );

}


export default withRouter(CreateBucket);
