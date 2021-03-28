import React, { useEffect, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import site from "../../core/config/sitemap";
import { Col, Row, Divider, Icon, Radio } from "antd";
import "./styles/MyAdvertisements.scss";
import Title from "antd/lib/typography/Title";
import { HorizontalCard } from "../../components/favourites/horizontalCard/HorizontalCard";
// import { HorizontalCardForDraft } from "../../components/favourites/horizontalCard/HorizontalCardForDraft";
import {
  getMyAdvertisement,
  getMyDraft,
  deleteMyDrafts,
  deleteMyAdvertisements,
} from "../../redux/actions/property";
import { connect } from "react-redux";
import notification from "../../utils/services/alert";
import swal from "sweetalert";
const { Group, Button: RadioButton } = Radio;

const MyAdvertisements = (props) => {
  const [loading, setLoading] = useState(false);
  const [advertisements, setAdvertisements] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [boolean, setBoolean] = useState(true);
  useEffect(() => {
    getMyAdvertisements();
    // getMyDrafts();
  }, []);

  const getMyAdvertisements = async () => {
    setLoading(true);
    try {
      console.log("Advertisement Chal gaya", advertisements);

      const res = await getMyAdvertisement(props.user._id);
      console.log("Advertisement Chal gaya resssssssssssssssssss", res);
      setBoolean(true);
      setLoading(false);
      setAdvertisements(res.properties);
    } catch (e) {
      setLoading(false);
      console.log("Error fetch plans", e);
    }
  };
  // for drafts list
  const getMyDrafts = async () => {
    setLoading(true);
    try {
      console.log("Draft Chal gaya", drafts);
      const res = await getMyDraft(props.user._id);
      console.log("Draft Chal gaya resssssssssssssssssss", res);
      setBoolean(false);
      setLoading(false);

      setDrafts(res.draft);
    } catch (e) {
      setLoading(false);
      console.log("Error fetch drafts", e);
    }
  };
  const confirmdelete = async (id) => {
    try {
      if (props.user) {
        const res = await deleteMyAdvertisements(id);
        notification.success("Property removed successfully");
        let array = [...advertisements];
        let newArray = array.filter((item) => item._id !== id);
        setAdvertisements(newArray);
      } else {
        notification.error("Signin to continue");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const confirmdraft = async (id) => {
    try {
      if (props.user) {
        const res = await deleteMyDrafts(id);
        notification.success("Draft removed successfully");
        let array = [...drafts];
        let newArray = array.filter((item) => item._id !== id);
        setDrafts(newArray);
      } else {
        notification.error("Signin to continue");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const deleteMyAdvertisement = async (id) => {
    swal({
      title: "Are you sure? You want to delete your Property",
      icon: "warning",
      buttons: {
        cancel: "No",
        dangerMode: "Yes",
      },
    }).then((willDelete) => {
      if (willDelete) {
        confirmdelete(id);
      } else {
      }
    });
  };
  const deleteMyDraft = async (id) => {
    swal({
      title: "Are you sure? You want to delete your Draft",
      icon: "warning",
      buttons: {
        cancel: "No",
        dangerMode: "Yes",
      },
    }).then((willDelete) => {
      if (willDelete) {
        confirmdraft(id);
      } else {
      }
    });
  };
  return (
    <div className="favourites page-search-index">
      {/* <Row
           gutter={[24, 24]}
           justify="space-between"
           style={{ width: "100%" }}
        > */}
      <>
        {/* <Col xl={18} lg={18} md={24} sm={24}> */}
        <div className="search-list">
          <div className="search-list-filter list-view mt-4 mb-3">
            <Group defaultValue="a" buttonStyle="solid">
              <RadioButton
                className="search-list-filter-item"
                value="a"
                onClick={() => {
                  getMyAdvertisements();
                }}
              >
                My Advertisements
              </RadioButton>
              <RadioButton
                className="search-list-filter-item"
                value="b"
                onClick={() => {
                  getMyDrafts();
                }}
              >
                My Drafts
              </RadioButton>
            </Group>
          </div>
        </div>{" "}
        {/* </Col> */}
        <Col xl={24} md={24} sm={24}>
          {boolean ? (
            <Title level={4}>
              My Advertisements{" "}
              <span className="comments-count">({advertisements.length})</span>
            </Title>
          ) : (
            <Title level={4}>
              My Drafts{" "}
              <span className="comments-count">({drafts.length})</span>
            </Title>
          )}
          <Divider />
          {/* {!loading ? (
            boolean &&
            advertisements &&
            advertisements.map((item) => (
              <>
                <HorizontalCard
                  {...item}
                  color="#e34c6b"
                  hideFavButton={true}
                  deleteMyAdvertisement={deleteMyAdvertisement}
                />
                <Divider />
              </>
            ))
            {
              !boolean &&
                drafts &&
                drafts.map((item) => (
                  <>
                    <HorizontalCard
                      {...item}
                      color="#e34c6b"
                      hideFavButton={true}
                      deleteMyAdvertisement={deleteMyAdvertisement}
                    />
                    <Divider />
                  </>
                ))
            }
          ) : (
            <div style={{ textAlign: "center" }}>
              <Icon type="loading" style={{ fontSize: 32 }} />
            </div>
          )} */}

          {!loading && boolean ? (
            advertisements &&
            advertisements.map((item) => (
              <>
                <HorizontalCard
                  {...item}
                  color="#e34c6b"
                  hideFavButton={true}
                  deleteMyAdvertisement={deleteMyAdvertisement}
                />
                <Divider />
              </>
            ))
          ) : !loading && !boolean ? (
            drafts &&
            drafts.map((item) => (
              <>
                <HorizontalCard
                  {...item}
                  color="#e34c6b"
                  hideFavButton={true}
                  deleteMyDraft={deleteMyDraft}
                />
                <Divider />
              </>
            ))
          ) : (
            <div style={{ textAlign: "center" }}>
              <Icon type="loading" style={{ fontSize: 32 }} />
            </div>
          )}
        </Col>
      </>
    </div>
  );
};

MyAdvertisements.getLayout = (page) => {
  return <AppLayout route={site.routes.MyAdvertisements}>{page}</AppLayout>;
};

const mapStateToProps = ({ UserReducer }) => ({
  user: UserReducer.User,
});

export default connect(mapStateToProps, null)(MyAdvertisements);
