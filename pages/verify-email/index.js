import React, { useState } from "react";
import { Row, Col, Tabs } from "antd";
import { MobileView, BrowserView, isAndroid } from "react-device-detect";
import { Card, Button as Butt } from "reactstrap";
import site from "../../core/config/sitemap";
import AppLayout from "../../layouts/AppLayout";
import "./styles/Verify.scss";

const VerifyEmail = () => {
  return (
    <div>
      <Card className="m-1 p-3 cardd">
        <h3 className="mx-auto cong ">Congratulations!</h3>
        <h5 className="mx-auto text-center">Your email is now verified</h5>
      </Card>
      {isAndroid && (
        <MobileView>
          <div className="">
            <h6 className="mx-auto mb-1 mt-5 text-center">
              We are now also on Play Store
            </h6>

            <div className="center">
              <a href="https://propamap.page.link/app">
                <img
                  src="/images/google.png"
                  alt="ASAS"
                  width={150}
                  height={65}
                />
              </a>
            </div>
            <div className="center">
              <Butt size="sm" color="primary" classNam="btn btn-primary">
                <a
                  className="a"
                  href="https://propamap.page.link/app"
                >
                  Open in App
                </a>
              </Butt>{" "}
              <a>
                <Butt size="sm" color="secondary">
                  Continue in browser
                </Butt>
              </a>
            </div>
          </div>
        </MobileView>
      )}
    </div>
  );
};

VerifyEmail.getLayout = (page) => {
  return <AppLayout route={site.routes.Verify}>{page}</AppLayout>;
};

export default VerifyEmail;
