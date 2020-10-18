import React, { useState, useEffect, useContext } from "react";
import  "./Todo.css";
import Modal from './../../common/Modal/Modal';
import Axios from "axios";
import { AuthContext } from '../../context/Auth';


function Todo(props) {
  const { currentUser } = useContext(AuthContext);

  const {bucketId} = props;
  
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [formComplete, setFormComplete] = useState(false);
  const [formIncompleteError, setFormIncompleteError] = useState(false);

  const [postName, setPostName] = useState("");
  const [postDetail, setPostDetail] = useState("");
  const [postDate, setPostDate] = useState("");

  const [postData, setPostData] = useState("");
  const [isPostAdded, setIsPostAdded] = useState(false);
  const [isPostDelete, setIsPostDelete] = useState(false);
  const [isPostEdited, setIsPostEdited] = useState(false);

  const [editDetails, setEditDetails] = useState(false);
  const [todoId, setPostId] = useState("");

  const postTitles  = React.useRef();
  const postDescriptions  = React.useRef();
  const scheduleDates  = React.useRef();

  const userId = currentUser.uid;
 
    // to Hide past date
    var today = new Date();
    var month,
      day = null;
    if (today.getMonth() < 10 || today.getDate() < 10) {
      month = "0" + (today.getMonth() + 1);
      day = "0" + today.getDate();
    }
    var date = day + "-" + month + "-" + today.getFullYear();

    useEffect(() => {
      setIsPostAdded(false);
      setIsPostDelete(false);
      setIsPostEdited(false);
      getPostData(currentUser.email);
    }, [isPostAdded, isPostDelete, isPostEdited, currentUser]);

    const getPostData = (email) => {
      Axios
      .get(`https://todo-app-a1032.firebaseio.com/${userId}/bucketContents/${bucketId}/todo.json`)
      .then((response) => {
        setPostData(response.data)
        // setPostData(Object.entries(response.data).filter((e)=>(e.user === email)));
        // console.log(response);
      })
      .catch((error) => console.log(error));
  };
  
//  to Add and Edit cardData in DB
const handleAddPostData = (e) => {
  //   check if all input is taken
  if(postTitles.current.value.length === 0 || postDescriptions.current.value.length === 0  || scheduleDates.current.value.length === 0 ){
    setFormComplete(false);
    setFormIncompleteError(true);
  } else {
    // if user wants to edit then put request is used
    if (editDetails) {
      Axios
      .put(`https://todo-app-a1032.firebaseio.com/${userId}/bucketContents/${bucketId}/todo/${todoId}.json`,
        {
          postName: postName === "" ? postTitle : postName,
          postDetail: postDetail === "" ? postDescription : postDetail,
          postDate: postDate === "" ? scheduleDate : postDate,
          user: currentUser.email,
        }
      )
        .then((response) => {
          alert("ToDo edited succesfully");
          setIsPostEdited(true);
        })
        .catch((error) => console.log("Error in editDetails" + error));
    }
    //  if user wants to add a new card
    else {
      Axios
      .post(`https://todo-app-a1032.firebaseio.com/${userId}/bucketContents/${bucketId}/todo.json`,
        {
          postName: postName,
          postDetail: postDetail,
          postDate: postDate,
          user: currentUser.email,
        }
      )
        .then((response) => {
          alert("ToDo added succesfully");
          setIsPostAdded(true);
        })
        .catch((error) => console.log("Error" + error));
    }

    setShowModal(false);
    setEditDetails(false);

    setPostName("");
    setPostDetail("");
    setPostDate("");
  }
};

  // on click of card this function shows details
  const onPostClick = (
    postTitle,
    postDescription,
    scheduleDate,
    postId,
    e
  ) => {
    setShowDetails(true);

    setPostTitle(postTitle);
    setPostDescription(postDescription);
    setScheduleDate(scheduleDate);
    setPostId(postId);
  };

   // handles edit button click
 const handleEdit = (e) => {
  setShowDetails(false);
  setShowModal(true);
  setEditDetails(true);
};



  // handles archive on card archive click
  const handleDelete = (e) => {
    if (window.confirm("Are you sure you want to delete the ToDo?")) {
    Axios
    .delete(`https://todo-app-a1032.firebaseio.com/${userId}/bucketContents/${bucketId}/todo/${todoId}.json`)
      .then((response) => {
        alert("ToDo deleted succesfully");
        setIsPostDelete(true);
      })
      .catch((error) => console.log("Error" + error));
      setShowDetails(false);
    }
  };



  const  modalCloseHandler = () => { setShowModal(false); setEditDetails(false);};

  const  showmodalCloseHandler = () => {setShowDetails(false)};

  //modal of Add and Edit Card
  let modalContent = showModal ? 

  (
      <>
    <div className="container py-4">
      <div className="row">
        <div className="col-md-12 text-left">
          <h3 className="text-warning">{editDetails ? 'Edit ToDo' : 'Add ToDo'}</h3>
          {formIncompleteError ? <p style={{color : 'red'}}>Kindly complete the form before adding Column</p> : null}
        <div className="form-group">
          <label htmlFor="postTitle" className="text-white">Title</label>
          <input type="text" id="post_title" defaultValue={editDetails ? postTitle : ""} placeholder="Enter a title" ref={postTitles} onChange={(event) => setPostName(event.target.value)} className="form-control"/>
        </div> 
        <div className="form-group">
          <label htmlFor="postDescription" className="text-white">Description</label>
          <textarea type="text" id="post_description" defaultValue={editDetails ? postDescription : ""} placeholder="Enter a Description" ref={postDescriptions} onChange={(event) => setPostDetail(event.target.value)} className="form-control"></textarea>
        </div> 
        <div className="form-group">
          <label htmlFor="schedule" className="text-white">Date</label>
          <input type="date" id="schedule_date" min={date} defaultValue={editDetails ? scheduleDate : ""} ref={scheduleDates} onChange={(event) => setPostDate(event.target.value)} className="form-control"/>
        </div>
        <button disabled={formComplete} className="btn btn-warning" onClick={handleAddPostData}>{editDetails ? 'Edit ToDo' : 'Add ToDo'}</button>
        </div>
      </div>
    </div>

  
      </>
  )
  :null;

  //modal of show card details
  let showmodalContent = showDetails ? 

  (
      <>
  <div className="container my-4">
        <div className="row">
          <div className="col-lg-12">
          <div className="d-flex justify-content-between">
            <div> 
                <h3 className="text-left text-warning">View ToDo</h3>
            </div>
            <div>
                <button type="button" id="editBtn" className="btn btn-sm btn-warning" onClick={handleEdit}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                <button type="button" id="deleteBtn" className="btn btn-danger btn-sm ml-2" onClick={handleDelete}><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
          </div>
          <hr/>
          <div className="text-left my-4">
            <h4>Title</h4>
            <p>{postTitle}</p>
          </div>
          <div className="text-left my-4">
            <h4>Description</h4>
            <p>{postDescription}</p>
          </div>
          <div className="text-left my-4">
            <h4>Date</h4>
            <p>{scheduleDate}</p>
          </div>
      </div>
      </div>
      </div>
      </>
     
  )
  :null;

  return (
    <div className="todo-data bg-black pt-3">
      <div className="d-flex justify-content-between border p-2 shadow ">
          <div className="pt-2">
              <h4 className="text-white">Add To-Do</h4>
          </div>
          <div>
              <button className="btn btn-warning" onClick={() => setShowModal(true)}><i class="fa fa-plus-square" aria-hidden="true"></i></button>
          </div>
      </div>

      <div className="todo-list my-4">
     
      {postData ?
        Object.entries(postData).map((item) => (
       
        <div className="d-flex justify-content-between border p-2 shadow my-3">
            <div>
              <h5 className="text-white" key={item[0]}>{item[1].postName}</h5>
              <small className="text-info">{item[1].postDate}</small>
            </div>
            <div>
              <button  id={item[0]} value={item[1].postName} onClick={(e) =>
                    onPostClick(
                      item[1].postName,
                      item[1].postDetail,
                      item[1].postDate,
                      item[0],
                      e
                    )
                  } className="btn btn-transparent mt-2"><i className="text-white fa fa-list" aria-hidden="true"></i></button>
            </div>
        </div>
       
        ) ) : <div className="alert alert-warning" role="alert">No todo added!</div>
        }

      </div>
        <br />
        {showModal && (
        
            <Modal  
                content = {modalContent}
                close = {modalCloseHandler}/> 
        )}
       
       {showDetails && (
        
        <Modal  
            content = {showmodalContent}
            close = {showmodalCloseHandler}/> 
    )}

    </div>


   
)
}

export default Todo;
