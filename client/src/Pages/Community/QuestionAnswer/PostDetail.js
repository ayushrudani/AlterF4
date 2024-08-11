import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePost } from "../../../Context/PostContext";
import Loader from "../../../Constant/Loader";
import { useUser } from "../../../Context/UserContext";

const PostDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    getpostById,
    postLoading,
    singlePost,
    createCommnet,
    getAllComments,
    commentsData,
    commentLoading,
    addLikeInComment,
  } = usePost();

  const { getUserByToken, user, userLoading } = useUser();

  const [comment, setComment] = React.useState("");

  useEffect(() => {
    getpostById(id);
    getUserByToken();
    getAllComments(id);
  }, [id]);
  return (
    <>
      {postLoading || userLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-y-[20px] w-full h-full">
          {/* Title */}
          <div className="flex flex-row justify-between w-full h-full  my-10">
            <h1 className="text-3xl font-bold text-gray-900">Query </h1>
          </div>
          {/* Posted by */}
          <p className="text-lg font-semibold text-gray-900">
            Posted by: {user.name}{" "}
          </p>
          {/* Image */}
          {singlePost.image && (
            <div className="w-full h-[400px] bg-white p-4 rounded-[24px] justify-between mt-10">
              <img
                src={singlePost.image}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          )}

          {/* Description */}
          <div className="w-full h-full mt-10">
            <h1 className="text-2xl font-semibold text-gray-900">
              So, the problem is:{" "}
            </h1>
            <p
              className="mb-3 font-normal text-gray-700 flex"
              dangerouslySetInnerHTML={{
                __html: singlePost.problem,
              }}
            ></p>
          </div>

          {/* Comments */}
          {commentLoading ? (
            <></>
          ) : (
            <div className="w-full h-full mt-10">
              <h1 className="text-2xl font-semibold text-gray-900">
                Comments:{" "}
              </h1>

              {/* Comment Box */}
              <>
                {/* component */}
                {/* comment form */}

                <form
                  className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    createCommnet(comment);
                    setComment("");
                    getpostById(singlePost._id);
                  }}
                >
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                      Add a new comment
                    </h2>
                    <div className="w-full md:w-full px-3 mb-2 mt-2">
                      <textarea
                        className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        name="body"
                        placeholder="Type Your Comment"
                        required=""
                        defaultValue={""}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-full flex items-start px-3">
                      <div></div>
                      <div className="-mr-1">
                        <button
                          type="submit"
                          className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                        >
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </>

              {/* Comments */}
              {commentsData.map((comment) => (
                <div
                  key={comment._id}
                  className="flex-col ms-2 w-full py-4 mt-3 bg-white border-gray-200 sm:px-4 sm:py-4 md:px-4"
                >
                  <div className="flex flex-row md-10">
                    <img
                      className="w-12 h-12 border-2 border-gray-300 rounded-full"
                      alt="Anonymous's avatar"
                      src="/2.svg"
                    />
                    <div className="flex-col mt-1">
                      <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                        Anonymous
                        <span className="ml-2 text-xs font-normal text-gray-500">
                          {new Date(comment.createdAt).toDateString()}
                        </span>
                      </div>
                      <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                        {comment.commentMsg}
                      </div>

                      <button
                        className="inline-flex ms-3 items-center px-1 -ml-1 flex-column"
                        onClick={() => {
                          addLikeInComment(comment._id);
                        }}
                      >
                        {/* <span>{comment.like.length}</span> */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="w-full h-full mt-10 flex flex-col gap-y-2">
                {commentsData.map((comment) => (
                  <div
                    key={comment._id}
                    className="w-full h-full bg-white p-2  rounded-lg"
                    style={{
                      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <p
                      className="mb-3 font-normal text-gray-700 flex"
                      dangerouslySetInnerHTML={{
                        __html: comment.commentMsg,
                      }}
                    ></p>
                  </div>
                ))}
              </div> */}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PostDetail;
