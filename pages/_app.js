import react, { useEffect } from "react";
import firebase from "firebase/app";
import { Provider } from "react-redux";
import App from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store/createStore";
import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/scss/styles.scss";

class MyApp extends App {
  componentDidMount = async () => {
    var firebaseConfig = {
      apiKey: "AIzaSyAq3713cl7KqUxzVfxZaAKiOQEWSSjKAwo",
      authDomain: "propamap-1.firebaseapp.com",
      databaseURL: "https://propamap-1.firebaseio.com",
      projectId: "propamap-1",
      storageBucket: "propamap-1.appspot.com",
      messagingSenderId: "397928373675",
      appId: "1:397928373675:web:a7d719f0c932bc0bb006ee",
      measurementId: "G-Z3BJ2YBH7D",
    };
    // Initialize Firebase
    await firebase.initializeApp(firebaseConfig);
  };
  render() {
    const { Component, pageProps } = this.props;

    const withLayout = Component.getLayout || ((page) => page);

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {withLayout(<Component {...pageProps} />)}
        </PersistGate>
      </Provider>
    );
  }
}

export default MyApp;
