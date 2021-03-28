import React, { useState, useEffect, useRef } from "react";
import AppLayout from "../../layouts/AppLayout";
import site from "../../core/config/sitemap";
import { Col, Row, Tabs } from "antd";
import "./styles/Settings.scss";
import Title from "antd/lib/typography/Title";
import GeneralSettingsForm from "../../components/settings/generalSettingsForm/GeneralSettingsForm";
import PasswordSettingsForm from "../../components/settings/passwordSettingsForm/PasswordSettingsForm";
import UserFeedbackForm from "../../components/settings/userFeedbackForm/UserFeedbackForm";
import NotificationSettings from "../../components/settings/notificationSettings/NotificationSettings";
import cookies from "../../utils/services/cookie";
import { COOKIE_IDENTIFIER, COOKIE_ID } from "../../core/constants/auth";
import {
  updateProfileAction,
  getProfileAction,
  updatePasswordAction,
  getUserFeedback,
} from "../../redux/actions/settings";
import alert from "../../utils/services/alert";
import TermsConditions from "../../components/settings/termsConditions/TermsConditions";
import firebase from 'firebase/app';
import 'firebase/storage';
import { redirect } from "../../utils/site";


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Settings = () => {
  //profile states
  const [profileImage, setProfileImage] = useState("");
  const [loading, setLoading] = useState(false)
  const [firstName, setFirstName] = useState({
    value: "",
    original: ""
  });
  const [lastName, setLastName] = useState({
    value: "",
    original: ""
  });
  const [userName, setUserName] = useState({
    value: "",
    original: ""
  });
  const [email, setEmail] = useState({
    value: "",
    original: ""
  });
  const [phone, setPhone] = useState({
    value: "",
    original: ""
  });
  const [about, setAbout] = useState({
    value: "",
    original: ""
  });
  const [newImage, setNewImage] = useState("")

  //passowrd states
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const saveRef = useRef(null)
  //profile states
  const [fbAbout, setFbAbout] = useState("");

  const onChangeProfileImage = (e) => {
    const value = e;
    setNewImage(value);
  };

  const removeImage = () => {
    console.log("removing image")
    setNewImage("");
  }

  const onChangeFirstName = (e) => {
    const { value } = e.target;
    setFirstName({ ...firstName, value });
  };

  const onChangeLastName = (e) => {
    const { value } = e.target;
    setLastName({ ...lastName, value });
  };

  const onChangeUserName = (e) => {
    const { value } = e.target;
    setUserName({ ...userName, value });
  };

  const onChangeEmail = (e) => {
    const { value } = e.target;
    setEmail({ ...email, value });
  };

  const onChangePhone = (e) => {
    const { value } = e.target;
    setPhone({ ...phone, value });
  };

  const onChangeAbout = (e) => {
    const { value } = e.target;
    setAbout({ ...about, value });
  };

  const onChangeOldPassword = (e) => {
    const { value } = e.target;
    setOldPassword(value);
  };

  const onChangeNewPassword = (e) => {
    const { value } = e.target;
    setNewPassword(value);
  };

  const onChangeConfirmPassword = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };



  const onChangeFbAbout = (e) => {
    const { value } = e.target;
    setFbAbout(value);
  };

  const onProfileSubmit = async (e) => {
    try {
      e.preventDefault();
      let fileUrl;
      if (profileImage !== newImage)
        fileUrl = await uploadImage(newImage);
      if (profileImage !== newImage && !fileUrl) {
        fileUrl = "https://res.cloudinary.com/n4beel/image/upload/v1595821864/avatar_st6rnc.png"
      }
      console.log("file URL -->", fileUrl)
      console.log("profile Image -->", profileImage)

      const data = {
        profile_image: fileUrl,
        first_name: firstName.value,
        last_name: lastName.value,
        user_name: userName.value,
        email: email.value,
        mobile_number: phone.value,
        aboutMe: about.value,
        profile_picture: fileUrl ? fileUrl : profileImage
      };
      const res = await updateProfileAction(data);
      alert.success("profile successfully updated");
      // getProfile();
      redirect("/")


    } catch (e) {
      alert.error("failed updating the profile");
      console.log('error in updating -->', e)
    }
  };

  const onPasswordSubmit = async (e) => {
    e.preventDefault();

    if (confirmPassword !== newPassword) {
      alert.error("New Password and Confirm Passwords don't Match");
      return;
    }
    if (oldPassword === newPassword) {
      alert.error("New password should be different from old password.");
      return;
    }

    try {
      const data = {
        oldPassword,
        newPassword,
      };
      const res = await updatePasswordAction(data);
      console.log("password res -->", res);
      if (res.body === "password doesn't match") {
        throw new Error("old password is incorrect")
      }
      alert.success("password successfully updated");
      redirect("/")

    } catch (e) {
      //alert.error(e.message);
      alert.error("Old password is incorrect");
    }
  };

  const onFbSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await getUserFeedback({ feedback: fbAbout })
      if (res) {
        alert.success("Thanks for your valuable feedback");
      }
    }
    catch (e) {
      alert.error("Something went wrong");
    }
  }

  const uploadImage = async (file) => {
    console.log('img -->', file)
    const storage = firebase.storage();
    const fileRef = await storage
      .ref('/')
      .child(`content/attachments/${new Date().getTime()}`)
      .put(file, {
        contentType: file.type
      })
      .then((res) => {
        return res.ref.getDownloadURL().then((url) => url);
      })
      .catch((ex) => {
        console.log('ex', ex);
      });
    if (fileRef) {
      console.log(fileRef)
      return fileRef;
    } else {
      alert.error('Fail to upload image.');
      return 0;
    }
  }


  const getProfile = async () => {
    setLoading(true)
    try {
      const res = await getProfileAction();
      setLoading(false)
      setFirstName({ original: res.first_name, value: res.first_name });
      setLastName({ original: res.last_name, value: res.last_name });
      setUserName({ original: res.user_name, value: res.user_name });
      setEmail({ original: res.email, value: res.email });
      setPhone({ original: res.mobile_number, value: res.mobile_number });
      setAbout({ original: res.aboutMe, value: res.aboutMe });
      setProfileImage(res.profile_picture ? res.profile_picture : "https://res.cloudinary.com/n4beel/image/upload/v1595821864/avatar_st6rnc.png")
      setNewImage(res.profile_picture ? res.profile_picture : "https://res.cloudinary.com/n4beel/image/upload/v1595821864/avatar_st6rnc.png")
    } catch (e) {
      setLoading(false)
      console.log(e);
    }
  };

  useEffect(() => {
    getProfile();
    console.log("profile image -->", profileImage, "new image -->", newImage)
    window.addEventListener("beforeunload", (e) => {
      if (saveRef.current) {
        var confirmationMessage = "Are you sure to leave the page?";
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      }
    });

    return () => {
      window.removeEventListener("beforeunload", (e) => { });
    };
  }, []);

  useEffect(() => {
    saveRef.current = !(profileImage === newImage &&
      firstName.original === firstName.value &&
      lastName.original === lastName.value &&
      userName.original === userName.value &&
      email.original === email.value &&
      phone.original === phone.value &&
      about.original === about.value)
  }, [firstName.value, lastName.value, userName.value, email.value, phone.value, about.value, newImage])

  const mode = window.innerWidth <= 991 ? "top" : "left";

  const settingProps = {
    profileImage,
    newImage,
    firstName,
    lastName,
    userName,
    email,
    phone,
    about,
    onChangeProfileImage,
    removeImage,
    onChangeFirstName,
    onChangeLastName,
    onChangeUserName,
    onChangeEmail,
    onChangePhone,
    onChangeAbout,
    onProfileSubmit,
    loading
  };

  const passwordProps = {
    oldPassword,
    newPassword,
    confirmPassword,
    onChangeOldPassword,
    onChangeNewPassword,
    onChangeConfirmPassword,
    onPasswordSubmit,
  };

  const feedbackProps = {
    fbAbout,
    onChangeFbAbout,
    onFbSubmit,
  };

  return (
    <div className="settings-screen">
      <Row gutter={[24, 24]} justify="space-between" style={{ width: "100%" }}>
        <Col span={24}>
          <Title level={4}>Account Settings</Title>
        </Col>
        <Col span={24}>
          <Tabs
            defaultActiveKey="1"
            onChange={callback}
            tabPosition={mode}
            className="side-tabs"
          >
            <TabPane tab="General Settings" key="1">
              <GeneralSettingsForm {...settingProps} />
            </TabPane>
            <TabPane tab="Password Settings" key="2">
              <PasswordSettingsForm {...passwordProps} />
            </TabPane>
            <TabPane tab="Notification Settings" key="3">
              <NotificationSettings />
            </TabPane>
            <TabPane tab="Send User Feedback" key="4">
              <UserFeedbackForm {...feedbackProps} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

Settings.getLayout = (page) => {
  return <AppLayout route={site.routes.Settings}>{page}</AppLayout>;
};

export default Settings;
