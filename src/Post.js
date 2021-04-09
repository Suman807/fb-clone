import {Avatar} from "@material-ui/core";
import React from 'react';
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined } from "@material-ui/icons"

function post({profilePic,image,username,timestamp,message}) {
    return (
        <div className="Post" >
            
            <div className="Post_top">
                <Avatar src={profilePic} className="Post_Avatar" />
                <div className="Post_topinfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="Post_bottom">
                <p>{message}</p>
            </div>
            
            <div className="Post_image">
                <img src={image} alt=""/>
            </div>

            <div className="Post_options">
                <div className="Post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="Post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="Post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="Post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        
        </div>
    )
}

export default post;
