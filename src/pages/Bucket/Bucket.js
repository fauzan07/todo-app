import React, { useState, useEffect, useContext } from "react";
import Axios from 'axios';
import { withRouter, useHistory } from "react-router-dom";
import { AuthContext } from '../../context/Auth';
import Todo from "../../components/Todo/Todo";
import './Bucket.css';

export const Bucket = (props) => {
    const { currentUser } = useContext(AuthContext);

    const name = props.match.params.bucketName;

    // const bucketid = props.match.params.bucketId;
    // console.log(bucketid);

    const userId = currentUser.uid;
    
   

     // to use history function
    const history = useHistory();

    document.title = `${name} | ToDo App`;

    useEffect(() => {
    
    }, []);
  




      // handle bucket delete
    const handleBucketDelete = (e) => {
      if (window.confirm("Are you sure you want to delete the bucket?")) {
        Axios
        .delete(`https://todo-app-a1032.firebaseio.com/${userId}/bucketContents/${props.location.state.bucketId}.json`)
          .then((response) => {
            alert("bucket deleted succesfully");
            history.push("/");
          })
          .catch((error) => console.log("Error" + error));
      }
    };



    return (
        <>
            <section className="bg-black">
            <div className="container bucket-section">

              <div className="d-flex justify-content-between">
                <div>
                    <h3  className="text-warning">{name}</h3>
                </div>
                <div>
                    <button className="btn btn-sm btn-danger" onClick={handleBucketDelete}>Delete Bucket</button>
                </div>
              </div>
              
              <div className="row">
                  <div className="col-lg-12 todo-list">
                      <Todo
                        pathname={props.location.pathname}
                        bucketId={props.location.state.bucketId}
                        boardTitle={name}
                      ></Todo>
                  </div>
              </div>

            </div>
            </section>
       
        </>
      );
    }
    

export default withRouter(Bucket);
