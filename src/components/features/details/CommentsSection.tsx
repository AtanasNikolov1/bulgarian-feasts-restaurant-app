import { Link, useParams } from "react-router-dom";
import supabase from "../../../config/supabaseClient";
import { useEffect, useState } from "react";
import Loader from "../../common/loader/Loader";
import ErrorMessage from "../../common/errorMessage/ErrorMessage";

const CommentsSection = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select("*")
          .eq("menuItem", id);

        if (error) {
          throw new Error(error.message);
        }

        setComments(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <>
        <h2 className="b-8 mt-32 text-center text-5xl font-bold text-lightBlack">
          Reviews
        </h2>
        <ErrorMessage message={error} />;
      </>
    );
  }

  if (comments.length === 0) {
    return (
      <>
        <h2 className="mt-32 text-center text-5xl font-bold text-lightBlack">
          Reviews
        </h2>
        <h3 className="py-8 text-center text-4xl font-bold text-customOrange">
          No Reviews
        </h3>
        ;
        <Link
          to={`/menu/${id}/add/review`}
          className="m-auto block w-36 rounded-2xl border-2 border-lightBlack bg-lightBlack py-2.5 text-center text-lg font-bold text-snow transition-colors duration-200 hover:bg-snow hover:text-lightBlack"
        >
          Add Review
        </Link>
      </>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const handleDelete = async (reviewId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?",
    );
    if (!confirmDelete) return;

    try {
      const { error } = await supabase
        .from("reviews")
        .delete()
        .eq("id", reviewId);

      if (error) {
        throw new Error(error.message);
      }

      // Remove the deleted review from the state
      setComments(comments.filter((comment) => comment.id !== reviewId));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h2 className="mt-32 text-center text-5xl font-bold text-lightBlack">
        Reviews
      </h2>
      <div className="mx-auto mb-8 mt-16 max-w-4xl rounded border border-gray-200 bg-white p-6">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="mb-6 flex items-start justify-stretch rounded bg-gray-50 p-4 shadow"
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="user profile image"
              className="mr-4 h-12 w-12 rounded-full"
            />
            <div className="flex-grow">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-bold text-customOrange">
                  {comment.name}
                </h3>
                <span className="text-sm text-gray-600">
                  {formatDate(comment["created_at"])}
                </span>
              </div>
              <div className="mb-2 flex items-center">
                <p className="text-lg text-yellow-500">
                  {"★".repeat(comment.rating)}
                </p>
              </div>
              <p className="text-gray-700">{comment.review}</p>
              <div className="mb-4 mt-6 flex justify-around">
                {comment.userId === user?.id && (
                  <>
                    <Link
                      to={`/menu/${id}/reviews/edit/${comment.id}`}
                      className="w-36 rounded-2xl border-2 border-customOrange bg-customOrange py-2.5 text-center text-lg font-bold text-snow transition-colors duration-200 hover:bg-snow hover:text-customOrange"
                    >
                      Edit
                    </Link>
                    <button
                      className="rounded-2xl border-2 border-customOrange bg-customOrange px-9 py-2.5 text-lg font-bold text-snow transition-colors duration-200 hover:bg-snow hover:text-customOrange"
                      onClick={() => handleDelete(comment.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {user && (
        <Link
          to={`/menu/${id}/reviews/add`}
          className="m-auto block w-36 rounded-2xl border-2 border-lightBlack bg-lightBlack py-2.5 text-center text-lg font-bold text-snow transition-colors duration-200 hover:bg-snow hover:text-lightBlack"
        >
          Add Review
        </Link>
      )}
    </>
  );
};

export default CommentsSection;
