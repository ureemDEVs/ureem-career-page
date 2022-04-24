import React from 'react'
import { useState } from "react"
import styled from 'styled-components';
import './Apply.css'
import imageurl from '../../images/upcv.svg'
import { storage } from './firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Container = styled.div`
margin-top: 100px;

text-align: center;
margin-bottom: 100px;
margin-left: 100px;
margin-right: 100px;
@media screen and (max-width: 991px) {
    font-size: 10px;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

function Apply() {
    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        const category = document.getElementById("select-profession").value

        if (category === "design") {
            const file = e.target[0]?.files[0]
            if (!file) return;
            const storageRef = ref(storage, `Design_Resume/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgresspercent(progress);
                },
                (error) => {
                    alert(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImgUrl(downloadURL)
                    });
                }
            );
        }
        if (category === "engineering") {
            const file = e.target[0]?.files[0]
            if (!file) return;
            const storageRef = ref(storage, `Engineering_Resume/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgresspercent(progress);
                },
                (error) => {
                    alert(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImgUrl(downloadURL)
                    });
                }
            );
        }
        if (category === "management") {
            const file = e.target[0]?.files[0]
            if (!file) return;
            const storageRef = ref(storage, `Management_Resume/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgresspercent(progress);
                },
                (error) => {
                    alert(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImgUrl(downloadURL)
                    });
                }
            );
        }

    }

    return (
        <>
            <Container>

                <form onSubmit={handleSubmit} className='form'>
                    <input className='inpt' type='file' />
                    <p> pdf file formats are preffered </p>
                    <div class="sel sel--black-panther">
                        <select name="select-profession" id="select-profession">
                            <option value="" selected disabled>Select Role</option>
                            <option value="design">Design</option>
                            <option value="engineering">Engineering</option>
                            <option value="management">Management</option>
                        </select>
                    </div>
                    <button className='btn' type='submit'>Upload</button>
                </form>
                {
                    !imgUrl &&
                    <div className='outerbar'>
                        <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                        
                    </div>
                }
                {
                    imgUrl &&
                    // <img src={imgUrl} alt='uploaded file' height={200} />
                    <h1> Application done ! We will contact you back within a week. </h1>
                }
                {/* <img className='img' src={imageurl} alt='cvIMG' /> */}
            </Container>
        </>
    )
}

export default Apply;