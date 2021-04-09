import { Avatar } from '@material-ui/core';
import React, { useState,setInput } from 'react';
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";



function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input,setInput] = useState("");
    const [imageUrl,setImageUrl] = useState("");
    

    const handlesubmit = (e) => {
        e.preventDefault(); 
            
        db.collection("posts").add({
            image: `${imageUrl}`,
            message: input, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: `${user.photoURL}`,
            username: `${user.displayName}`,
        });
        setInput("");
        setImageUrl("");

    };


    return (
        <div className="MessageSender" >
            <div className="MessageSender_top">
                <Avatar src={user.photoURL}/>
                <form >
                    <input
                    value={ input } 
                    onChange={(e) => setInput(e.target.value)}
                    className="MessageSender_input" placeholder={`What's on your mind,${user.displayName}?`} />
                    <input 
                    value={imageUrl}
                    onChange = {(e) => setImageUrl(e.target.value)}
                    placeholder="Image URL (Optinal)" />
                    <button onClick={handlesubmit} type="submit" >
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="MessageSender_button">
                <div className="MessageSender_option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="MessageSender_option" >
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="MessageSender_option">
                    <InsertEmotionIcon style={{color:"yellow"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
