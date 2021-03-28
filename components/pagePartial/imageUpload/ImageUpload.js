import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/storage";
import { Icon, Upload, message, Spin, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import "./ImageUpload.scss";
import notification from "../../../utils/services/alert";

const ImageUpload = ({ saveUrl, url, user }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(url);
  }, [url]);

  // const getBase64 = (img, callback) => {
  //   const reader = new FileReader();
  //   reader.addEventListener("load", () => callback(reader.result));
  //   reader.readAsDataURL(img);
  // };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    return isJpgOrPng;
  };

  // const uploadButton = (
  //   <div>
  //     <Icon type="plus" />
  //   </div>
  // );

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  let getBase64 = (file) => {
    console.log(file);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  let handleCancel = () => setPreviewVisible(false);

  let handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
    // setState({
    //   previewImage: file.url || file.preview,
    //   previewVisible: true,
    //   previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    // });
  };

  let handleChange = async ({ fileList }) => {
    console.log("sddd===", fileList);
    setFileList(fileList);
    if (!user) {
      notification.error("Please login to upload images!");
    } else {
      setLoading(true);
      const storage = firebase.storage();
      if (fileList.length > 0) {
        const fileRef = await storage
          .ref("/")
          .child(`content/attachments/${new Date().getTime()}`)
          .put(fileList[0].originFileObj, {
            contentType: fileList[0].originFileObj.type,
          })
          .then((res) => {
            return res.ref.getDownloadURL().then((url) => url);
          })
          .catch((ex) => {
            console.log("ex", ex);
          });

        if (fileRef) {
          saveUrl(fileRef);
          setImageUrl(fileRef);
        } else {
          notification.error("Fail to upload image.");
        }
        setLoading(false);
      }
    }
  };

  // const { previewVisible, previewImage, fileList, previewTitle } = state;
  // const uploadButton = (
  //   <div>
  //     <PlusOutlined />
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </div>
  // );
  const _handleChange = async (info) => {
    console.log("ssss===", info);
    // if (!user) {
    //   notification.error("Please login to upload images!");
    // } else {
    //   setLoading(true);
    //   const storage = firebase.storage();
    //   const fileRef = await storage
    //     .ref("/")
    //     .child(`content/attachments/${new Date().getTime()}`)
    //     .put(info.file, {
    //       contentType: info.file.type,
    //     })
    //     .then((res) => {
    //       return res.ref.getDownloadURL().then((url) => url);
    //     })
    //     .catch((ex) => {
    //       console.log("ex", ex);
    //     });
    //   if (fileRef) {
    //     saveUrl(fileRef);
    //     setImageUrl(fileRef);
    //   } else {
    //     notification.error("Fail to upload image.");
    //   }
    //   setLoading(false);
    // }
  };

  // const handleChange = (e) => {
  //   console.log(e);
  // };

  // const handlePreview = (e) => {
  //   console.log(e);
  // };

  return (
    <div className="cmp-image-upload">
      {/* <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
       
        beforeUpload={beforeUpload}
        customRequest={_handleChange}
        onPreview={handlePreview}
        onChange={handleChange}
        disabled={imageUrl ? true : false}
      >
        {loading ? (
          <Spin />
        ) : imageUrl ? (
          <img src={imageUrl} alt="avatar" />
        ) : (
          uploadButton
        )}
      </Upload> */}
      <Upload
        action=""
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        // customRequest={_handleChange}
        // showUploadList={false}
      >
        {uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};
const mapStateToProps = ({ UserReducer }) => ({
  user: UserReducer.User,
});

const connectedComponent = connect(mapStateToProps, null)(ImageUpload);

export { connectedComponent as ImageUpload };
