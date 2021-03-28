import React, { useState, useEffect } from "react";
import { Row, Col, Avatar } from "antd";
import "./comment.scss";
import { CommentInput as Input } from "../../chat/messageInput";
import {
  getRepliesAction,
  deleteCommentAction,
} from "../../../redux/actions/comment";
import { COOKIE_ID } from "../../../core/constants/auth";
import cookie from "../../../utils/services/cookie";
import moment from "moment";
import { connect } from "react-redux";
import actionTypes from "../../../redux/constants/actionTypes";
import notification from "../../../utils/services/alert";

const Comment = (props) => {
  const [showReply, setShowReply] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (comments.length !== props.comments.length) {
      setComments(props.comments);
    }
  }, [props.comments]);

  const viewMoreReplies = async (i, id, replies) => {
    try {
      console.log("reples array before shift-->", replies);
      // replies.pop();
      // console.log("reples array after shift-->", replies);
      const ids = [...replies];
      const res = await getRepliesAction(ids);
      console.log("resss -->", res);
      const updatedComments = [...comments];
      updatedComments[i].replies = [...res];
      delete updatedComments[i].last_reply;
      const validateShowReply = { ...showReply };
      validateShowReply[id] = true;
      setComments(updatedComments);
      props.setNewComments(updatedComments);
      setShowReply(validateShowReply);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteComment = async (i, commentID, reply = "", last = false) => {
    try {
      const res = await deleteCommentAction(commentID);
      const updatedComments = [...comments];
      if (reply) {
        updatedComments[i].replies.splice(reply, 1);
      } else if (last) {
        delete updatedComments[i].last_reply;
      } else {
        updatedComments.splice(i, 1);
      }
      setComments(updatedComments);
      props.setNewComments(updatedComments);
      notification.success("Comment Successfully Deleted");
    } catch (e) {
      console.log(e);
      notification.error("Failed Deleting the comment");
    }
  };

  console.log("props -->", props);
  return (
    <>
      {console.log("comments -->", comments)}
      {!!comments.length &&
        comments.map((item, i) => {
          return (
            <>
              <Row>
                <div className="comments">
                  <Col xl={2} lg={3} md={4} sm={4}>
                    <Avatar size={54} icon="user" />
                  </Col>
                  <Col
                    xl={22}
                    lg={21}
                    md={20}
                    sm={20}
                    className="comments-body"
                  >
                    <Row>
                      <h6 className="comment-user-name">
                        {item && item.userID && item.userID.user_name}&nbsp;
                        <span>{moment(item.createdAt).fromNow()}</span>
                      </h6>
                    </Row>
                    {item.isDeleted ? (
                      <div className="deleted-comment">
                        <img src="/images/trash.svg" height="20px" />
                        <div className="deleted-comment-text">
                          Comment deleted
                        </div>
                      </div>
                    ) : (
                      <p className="comment-message">{item.comment}</p>
                    )}
                    {!item.isDeleted && (
                      <div>
                        <p
                          onClick={() => props.onReplyClick(item._id)}
                          style={{ cursor: "pointer" }}
                        >
                          Reply
                        </p>
                        {props.user && item.userID._id === props.user._id ? (
                          <>
                            <p
                              onClick={() =>
                                props.onEditClick(item._id, item.comment)
                              }
                              style={{ cursor: "pointer" }}
                            >
                              Edit
                            </p>
                            <p
                              onClick={() => deleteComment(i, item._id)}
                              style={{ cursor: "pointer" }}
                            >
                              Delete
                            </p>
                          </>
                        ) : null}
                      </div>
                    )}
                    {props.showReplyBox === item._id ? (
                      <div className="reply-contain">
                        <Input
                          placeholder="Type your reply here ..."
                          onChange={props.onReplyChange}
                          onClick={props.onSubmit}
                          valueToPass={item._id}
                          value={props.reply}
                          buttonTitle="REPLY"
                        />
                      </div>
                    ) : null}
                    {props.showEditBox === item._id ? (
                      <div className="reply-contain">
                        <Input
                          placeholder="Edit your comment here ..."
                          onChange={props.onEditChange}
                          onClick={props.onEditSubmit}
                          valueToPass={{ id: item._id, index: i }}
                          value={props.edit}
                          buttonTitle="UPDATE"
                        />
                      </div>
                    ) : null}
                  </Col>
                </div>
              </Row>
              {item.last_reply && item.last_reply.comment && (
                <>
                  <Row className="comments">
                    <Col xl={1} lg={1} md={1} sm={1}>
                      <div className="reply-left-border"></div>
                    </Col>
                    <Col xl={2} lg={3} md={4} sm={4}>
                      <Avatar size={54} icon="user" />
                    </Col>
                    <Col
                      xl={21}
                      lg={20}
                      md={19}
                      sm={19}
                      className="comments-body"
                    >
                      <Row>
                        <h6 className="comment-user-name">
                          {item.last_reply.userID.user_name}&nbsp;
                          <span>
                            {moment(item.last_reply.createdAt).fromNow()}
                          </span>
                        </h6>
                      </Row>
                      {item.last_reply.isDeleted ? (
                        <div className="deleted-comment">
                          <img src="/images/trash.svg" height="20px" />
                          <div className="deleted-comment-text">
                            Comment deleted
                          </div>
                        </div>
                      ) : (
                        <p className="comment-message">
                          {item.last_reply.comment}
                        </p>
                      )}
                      {!item.last_reply.isDeleted &&
                      props.user &&
                      item.last_reply.userID._id === props.user._id ? (
                        <div>
                          <p>Edit</p>
                          <p
                            onClick={() =>
                              deleteComment(i, item.last_reply._id, "", true)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            Delete
                          </p>
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                </>
              )}
              {!showReply[item._id] && item.replies.length > 1 ? (
                <Row>
                  <Col>
                    <p
                      onClick={() => viewMoreReplies(i, item._id, item.replies)}
                      style={{ cursor: "pointer" }}
                    >
                      View more replies ..
                    </p>
                  </Col>
                </Row>
              ) : null}
              <>
                {console.log("replies -->", showReply[item._id], item.replies)}
                {showReply[item._id] &&
                  !!item.replies.length &&
                  item.replies[0].comment &&
                  item.replies.map((elem, j) => {
                    return (
                      <>
                        <Row className="comments">
                          <Col xl={1} lg={1} md={1} sm={1}>
                            <div className="reply-left-border"></div>
                          </Col>
                          <Col xl={2} lg={3} md={4} sm={4}>
                            <Avatar size={54} icon="user" />
                          </Col>
                          <Col
                            xl={21}
                            lg={20}
                            md={19}
                            sm={19}
                            className="comments-body"
                          >
                            <Row>
                              <h6 className="comment-user-name">
                                {elem.userID.user_name}&nbsp;
                                <span>{moment(elem.createdAt).fromNow()}</span>
                              </h6>
                            </Row>
                            {elem.isDeleted ? (
                              <div className="deleted-comment">
                                <img src="/images/trash.svg" height="20px" />
                                <div className="deleted-comment-text">
                                  Comment deleted
                                </div>
                              </div>
                            ) : (
                              <p className="comment-message">{elem.comment}</p>
                            )}
                            {!elem.isDeleted &&
                            props.user &&
                            elem.userID._id === props.user._id ? (
                              <div>
                                <p>Edit</p>
                                <p
                                  onClick={() => deleteComment(i, item._id, j)}
                                  style={{ cursor: "pointer" }}
                                >
                                  Delete
                                </p>
                              </div>
                            ) : null}
                          </Col>
                        </Row>
                      </>
                    );
                  })}
              </>
            </>
          );
        })}
    </>
    // </>
  );
};

const mapStateToProps = ({ UserReducer }) => ({
  user: UserReducer.User,
});

const mapDispatchToProps = (dispatch) => ({
  setNewComments: (comments) =>
    dispatch({ type: actionTypes.COMMENTS, payload: comments }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
