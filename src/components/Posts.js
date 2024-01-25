import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../redux/postsSlice";
import { Input, Button } from 'antd';
import ThaicardInput from './thaicard';

export default function Posts () {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [telephone, setTelephone] = useState("");
    const [expecsalary, setExpecsalary] = useState("");

    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");

    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(null);

    const posts = useSelector((state) => state.posts.items)

    const dispatch = useDispatch()
    return (
        <div className="border-all">
            <div className="form">
                {/* <div className="input-1"> */}
                    <p className="p-name">ชื่อจริง</p>
                    
                    <Input className="input-name" type="text"  onChange={(e) => setTitle(e.target.value)}/>
                {/* </div> */}
                <p className="s-name">นามสกุล</p>
                <Input className="input-surname" type="text"  onChange={(e) => setDescription(e.target.value)}/>
                <p className="t-name">เบอร์โทรศัพท์มือถือ</p>
                <Input className="input-tele" type="text"  onChange={(e) => setTelephone(e.target.value)}/>
                <p className="expec-name">เงินเดือนที่คาดหวัง</p>
                <Input className="input-expec" type="text"  onChange={(e) => setExpecsalary(e.target.value)}/>
                <Button className="butt-Add" onClick={() => {
                    dispatch(addPost({id: posts.length + 1, title, description, telephone, expecsalary}))
                    setTitle("");
                    setDescription("")
                    setTelephone("")
                    setExpecsalary("")
                }}>Add Post</Button>
            </div>


            <div className="posts">
                {posts.length > 0 ? posts.map(post => <div key={post.id} className="post">
                    <div className="table-data">
                        <p>{post.title}</p>
                        <p>{post.description}</p>
                        <p>{post.telephone}</p>
                        <p>{post.expecsalary}</p>
                    </div>
                    <Button onClick={() => {
                        setIsEdit(true) 
                        setId(post.id)
                    }}>Edit</Button>
                    <Button onClick={() => dispatch(deletePost(post.id))}>Delete</Button>
                    <br />
                    {isEdit && id == post.id && (
                        <>
                            <Input type="text" placeholder="updated Title" onChange={(e) => setUpdatedTitle(e.target.value)}/>
                            <Input type="text" placeholder="updated Desc" onChange={(e) => setUpdatedDescription(e.target.value)}/>
                            <Button onClick={() => {
                                dispatch(updatePost({id: post.id, title: updatedTitle, description: updatedDescription}))
                                setIsEdit(false)
                            }}>Update</Button>
                        </>
                    )}
                </div>): 'There is no Posts'}
            </div>
        </div>
    )
}