import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Card as AntCard, Avatar } from "antd";

import "./styles/[id].scss";
import notification from "../../utils/services/alert";

import AppLayout from "../../layouts/AppLayout";

import {
  PropertyDetails,
  ContactDetailsCard,
} from "../../components/properties";
import { CardSlider, MapContainer } from "../../components/pagePartial";

import site from "../../core/config/sitemap";
import { useRouter } from "next/router";
import {
  GetPropertyByIdAction,
  GetDraftPropertyByIdAction,
  addFavouriteProperty,
  addFavourite,
  removeFavourite,
  removeFavouriteProperty,
} from "../../redux/actions/property";
import {
  createCommentAction,
  getCommentsAction,
  createReplyAction,
  getRepliesAction,
  editCommentAction,
} from "../../redux/actions/comment";
import { connect } from "react-redux";
import { createChatroom } from "../../redux/actions/chat";
import { redirect } from "../../utils/site";
import actionTypes from "../../redux/constants/actionTypes";

const { Title } = Typography;
const { Meta } = AntCard;

const DetailView = (props) => {
  const router = useRouter(props);

  const [property, setProperty] = useState(null);
  const [draft, setDraft] = useState(null);
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");
  const [edit, setEdit] = useState("");
  const [isChatLoading, setChatLoading] = useState(false);
  const [isFavLoading, setFavLoading] = useState(false);
  const [replyBox, setReplyBox] = useState("");
  const [editBox, setEditBox] = useState("");

  // Events

  useEffect(() => {
    const didUpdate = async () => {
      getProjectById();
      getDraftProjectById();
    };
    if (router.query.id) {
      didUpdate();
      props.getComments(router.query.id);
    }
  }, [router.query.id]);

  useEffect(() => {
    console.log("comments -->", props.comments);
  }, [props.comments]);

  // Utils

  const getProjectById = async () => {
    const res = await GetPropertyByIdAction(router.query.id);
    console.log("res ritik", res);
    if (res.result) {
      setProperty(res.body);
    }
  };
  const getDraftProjectById = async () => {
    const res = await GetDraftPropertyByIdAction(router.query.id);
    console.log("res bhai kia karen", res);
    if (res.result) {
      setDraft(res.body);
    }
  };

  const onReplyClick = (data) => {
    setEditBox("");
    setReplyBox(data);
  };

  const onEditClick = (i, data) => {
    setReplyBox("");
    setEdit(data);
    setEditBox(i);
  };

  const onSubmitComment = async () => {
    try {
      if (!props.user) {
        notification.error("Sign in to Continue");
        return;
      }
      const data = {
        comment: comment,
        propertyID: router.query.id,
      };
      const res = await createCommentAction(data);
      console.log("res of comment -->", res);

      res.userID = props.user;
      const commentArray = [res, ...props.comments];
      props.setNewComments(commentArray);
      setComment("");
      notification.success("comment successfully posted");
    } catch (e) {
      console.log("error", e);
      notification.success("comment successfully posted");

      // notification.error("failed in posting comment");
    }
  };

  const onCommentChange = (e) => {
    console.log("e.keyCode -->", e.which);
    if (e.which == 13 && comment) {
      console.log("chala");
      onSubmitComment();
    }
    const { value } = e.target;
    setComment(value);
  };

  const onEditChange = (e, obj) => {
    if (e.which == 13 && edit) {
      onEditSubmit(obj);
    }
    const { value } = e.target;
    setEdit(value);
  };

  const onSubmitReply = async (commentID) => {
    try {
      console.log("commentID -->", commentID);
      const data = {
        comment: reply,
        propertyID: router.query.id,
        commentID,
      };
      const res = await createReplyAction(data);
      console.log("res of reply -->", res);
      notification.success("reply successfully posted");
      setReply("");
      setReplyBox("");
    } catch (e) {
      console.log("error", e);
      notification.error("failed posting reply");
    }
  };

  const onEditSubmit = async (obj) => {
    try {
      console.log("commentID -->", obj);
      const { id, index } = obj;
      const data = {
        comment: edit,
        commentID: id,
      };
      const res = await editCommentAction(data.commentID, data.comment);
      console.log("res of edit -->", res);
      const commentArray = [...props.comments];
      commentArray[index].comment = edit;
      props.setNewComments(commentArray);
      notification.success("Comment successfully edited");
      setEdit("");
      setEditBox("");
    } catch (e) {
      console.log("error", e);
      notification.error("failed editing comment");
    }
  };

  const onReplyChange = (e, obj) => {
    if (e.which == 13 && reply) {
      onSubmitReply(obj);
    }
    const { value } = e.target;
    setReply(value);
  };

  const onCreateChatroom = async () => {
    try {
      setChatLoading(true);
      if (props.user) {
        const res = await createChatroom(property.agent._id, property._id);
        redirect(`/messages/${res._id}?tab=1`);
      } else {
        notification.error("Signin to continue");
      }
      setChatLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const onAddFav = async () => {
    try {
      setFavLoading(true);
      if (props.user) {
        const res = await addFavouriteProperty({ propertyId: property._id });
        props.addFavourite(property._id);
        notification.success("Property Added to favourites");
      } else {
        notification.error("Signin to continue");
      }
      setFavLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const onRemoveFav = async () => {
    try {
      setFavLoading(true);
      if (props.user) {
        const res = await removeFavouriteProperty({ propertyId: property._id });
        props.removeFavourite(property._id);
        notification.success("Property Removed Successfully");
      } else {
        notification.error("Signin to continue");
      }
      setFavLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  console.log("property --->", property, draft);
  return (
    <div className="page-detail-view">
      {property || draft ? (
        <Row gutter={[20, 12]}>
          <Col xl={18} md={18} sm={24}>
            <PropertyDetails
              property={property || draft}
              completeUrl={props.completeUrl}
              onSubmit={onSubmitComment}
              onEditSubmit={onEditSubmit}
              onCommentChange={onCommentChange}
              comments={props.comments}
              comment={comment}
              onSubmitReply={onSubmitReply}
              onReplyChange={onReplyChange}
              onEditChange={onEditChange}
              reply={reply}
              edit={edit}
              onReplyClick={onReplyClick}
              replyBox={replyBox}
              onEditClick={onEditClick}
              editBox={editBox}
            />
          </Col>
          <Col xl={6} md={6} sm={24}>
            <MapContainer
              {...property}
              defaultLocation={{
                lat: property
                  ? property.coord.lat
                  : "101" || draft
                  ? draft.coord.lat
                  : "101.68",
                lng: property
                  ? property.coord.lon
                  : "3.12" || draft
                  ? draft.coord.lon
                  : "3.12",
              }}
              defaultName={property ? property.title || draft.title : null}
              showSearch={false}
            />
            <div className="card-display">
              <ContactDetailsCard
                {...(property ? { ...property.agent } : null)}
                isChat={isChatLoading}
                onCreateChatroom={onCreateChatroom}
                onAddFav={onAddFav}
                onRemoveFav={onRemoveFav}
                isFav={isFavLoading}
                user={props.user}
              />
            </div>
          </Col>
        </Row>
      ) : null}
      <div className="trending-properties">
        <Title level={4}>Recommended for you</Title>
        <CardSlider
          addFavourite={() => props.addFavourite()}
          removeFavourite={() => props.removeFavourite()}
        />
      </div>
    </div>
  );
};

DetailView.getLayout = (page) => {
  return <AppLayout route={site.routes.viewProperty}>{page}</AppLayout>;
};

DetailView.getInitialProps = ({ req }) => {
  let completeUrl;
  if (req) {
    // Server side rendering
    let protocol = req.headers.host.includes("localhost") ? "http" : "https";
    completeUrl = protocol + "://" + req.headers.host;
  } else {
    // Client side rendering
    completeUrl =
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "");
  }
  return { completeUrl };
};

const mapStateToProps = ({ CommentReducer, UserReducer }) => ({
  comments: CommentReducer.comments,
  user: UserReducer.User,
});

const mapDispatchToProps = (dispatch) => ({
  getComments: (propertyID) => dispatch(getCommentsAction(propertyID)),
  setNewComments: (comments) =>
    dispatch({ type: actionTypes.COMMENTS, payload: comments }),
  addFavourite: (id) => dispatch(addFavourite(id)),
  removeFavourite: (id) => dispatch(removeFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
