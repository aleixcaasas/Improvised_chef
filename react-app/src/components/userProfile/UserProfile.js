import axios from "axios";
import "./UserProfile.css";
import DeleteAccountButton from "../login/deleteAccount";
import React, { useEffect, useState, useRef } from "react";

export default function UserProfile() {
    const [response, setResponse] = useState(null);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [userAPI, setUSerAPI] = useState('');

    const imageRef = useRef(null);
    const fileRef = useRef(null);
    const uploadButtonRef = useRef(null);

    useEffect(() => {
        const getInfo = async () => {
            try {
                const userBO = await axios.get('http://localhost:3000/user');
                const response = await axios.post('http://localhost:3000/user/summary', { id: userBO.data.id });
                setUSerAPI(userBO.data);
                setResponse(response);
                setName(response?.data[0].fullName);
                setUsername(response?.data[0].userName);

            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, []);

    const handleImageChange = () => {
        const chosenFile = fileRef.current.files[0];
        if (chosenFile) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                imageRef.current.setAttribute('src', reader.result);
            });
            reader.readAsDataURL(chosenFile);
        }
    };

    async function handleSaveProfile() {

        const formData = new FormData();
        formData.append('userId', userAPI.id);
        formData.append('fullName', name);
        formData.append('userName', username);
        formData.append('profilePic', fileRef.current.files[0]);

        try {
            const response = await axios.post('http://localhost:3000/user/edit', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if(response.status === 200){
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="div-user">
            <div className="profile_container">
                <div className="profile_user">
                    <h1>Welcome {response?.data[0].fullName}</h1>
                    <div>
                        <div className="profile_basic_information">    
                            <div className="name_surname_email">
                                <p>Your name</p>
                                <input className="text_input" placeholder={response?.data[0].fullName} value={name} onChange={(e) => setName(e.target.value)} />
                                <p>Your username</p>
                                <input className="text_input" placeholder={response?.data[0].userName} value={username} onChange={(e) => setUsername(e.target.value)} />
                                <p>Password</p>
                                <input type="password" className="text_input" placeholder={"Password"} />
                                <p>Repeat password</p>
                                <input type="password" className="text_input" placeholder={"Password"} />


                            </div>
                            <div id="profile_right">
                                {response?.data && (
                                    <div id="image_change">
                                        <img ref={imageRef} id="user-image-pic" alt="" src={response.data[0].profilePic} />
                                        <input ref={fileRef} id="file" type="file" onChange={handleImageChange} />
                                        <label ref={uploadButtonRef} id="label" htmlFor="file">
                                            Change photo
                                        </label>
                                    </div>
                                )}
                                {!response?.data && (
                                    <h1>Loading...</h1>
                                )}
                            </div>
                        </div>

                        <div id="button_save_delete">
                            <button id="save_profile_button" onClick={handleSaveProfile}>
                                Save profile
                            </button>
                            <DeleteAccountButton />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}