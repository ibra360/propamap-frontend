import React, { useState, useEffect } from 'react'
import { Button } from './../../html'
import './ProfileImage.scss';
import alert from "../../../utils/services/alert";

const ProfileImage = ({ onChangeProfileImage, profileImage, removeImage }) => {

  const [image, setImage] = useState('/images/avatar.png')

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // TODO: do something with -> this.state.file
  //   console.log(image)
  // }

  useEffect(() => {
    if (profileImage)
      setImage(profileImage)
  }, [profileImage])

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    if (!beforeUpload(file)) {
      return;
    }
    else {
      console.log(profileImage)
      onChangeProfileImage(file)
    }

    reader.onloadend = () => {
      setImage(reader.result);
    }
    reader.readAsDataURL(file)
  }

  const handleImageRemove = () => {
    setImage('/images/avatar.png');
    removeImage();
  }


  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      alert.error("You can only upload JPG / PNG file!");
    }
    return isJpgOrPng;
  };

  return (
    <div className="cmp-profile-img">
      <div className="profile-img">
        <div style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className="actions">
        <Button
          type='button'
          title='REMOVE'
          size='large'
          category='primary'
          onClick={handleImageRemove}
          disabled={image === '/images/avatar.png' || image === "https://res.cloudinary.com/n4beel/image/upload/v1595821864/avatar_st6rnc.png"}
        />
      </div>

      {/* <form onSubmit={handleSubmit}> */}
      <label className="custom-file-input">
        {image === '/images/avatar.png' ||
          image === "https://res.cloudinary.com/n4beel/image/upload/v1595821864/avatar_st6rnc.png"
          ? <span>
            UPLOAD
        </span>
          : <span>
            CHANGE
        </span>
        }
        <input type="file" onChange={handleImageChange} />
      </label>
      {/* <button type="submit">Submit</button> */}
      {/* </form> */}

    </div>
  )
}

export { ProfileImage }
