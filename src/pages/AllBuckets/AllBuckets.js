import React, { useState, useEffect, useContext } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import { AuthContext } from '../../context/Auth';
import './AllBuckets.css'

export const AllBuckets = () => {

    const { currentUser } = useContext(AuthContext);

    const [bucketContents, setbucketContents] = useState({});
    const [showBucket, setShowBucket] = useState(false);
    const [loading, setLoading] = useState(true);

    const userId = currentUser.uid;

    document.title = "ToDo Application";

    useEffect(() => {
        getBucketContents();
    }, [showBucket]);
  
    const getBucketContents = () => {
        Axios
        .get(`https://todo-app-a1032.firebaseio.com/${userId}/bucketContents.json`)
        .then((response) => {
          setTimeout(setbucketContents(response.data), 50000);
          setLoading(false);
          if (bucketContents !== null) {
            setShowBucket(true);
          } else setShowBucket(false);
        })
        .catch((error) => console.log(error));
    };

    return (
        <div>
          <br />
          {loading ? (
            <Loader></Loader>
          ) : (
            <section className="all-buckets bg-black py-5">
              <div className="container-fluid">
              <h3 className="text-warning py-3">Buckets</h3>
                <div className="bucket-data">
                    
                        {showBucket ? (
                        <div className="row">
                            {bucketContents &&
                            Object.entries(bucketContents).map((item) => (
                              
                                <div className="col-lg-3" key={item[1].bucketName}>
                                  <Link
                                      to={{
                                          pathname: "/bucket/" + item[1].bucketName,
                                          state: {
                                          bucketId: item[0],
                                          },
                                      }}
                                      >
                                    <div className="bucket-box border bg-black shadow rounded my-3 p-5">
                                        <h5 className="text-center text-white">{item[1].bucketName}</h5>
                                    </div>
                                    </Link>
                                </div>
                                 
                            ))}
                        </div>
                        ) : (
                        <div className="alert alert-warning" role="alert">
                            You haven't created any buckets. Kindly click on the 'Create
                            Bucket' button in the navigation bar to create a Bucket.!
                        </div>
                        )}
              </div>
              </div>
            </section>
          )}
        </div>
      );
    }
    

export default AllBuckets;
