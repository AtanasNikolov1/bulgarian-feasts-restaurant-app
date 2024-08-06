import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getReview, updateReview } from "../../../services/reviewService";
import { useForm } from "react-hook-form";

const initialState = {
  name: "",
  rating: "",
  review: "",
  loading: "",
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "SET_REVIEW":
      return { ...state, review: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_DEFAULT_VALUE":
      return {
        ...state,
        name: action.payload.name,
        rating: action.payload.rating,
        review: action.payload.review,
      };
    case "RESET":
      return initialState;
    default:
      break;
  }
};

const EditReviewForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id, reviewId } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: initialState,
  });

  useEffect(() => {
    const fetchReview = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      const { data, error } = await getReview(reviewId);
      if (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      } else {
        const { name, rating, review } = data;
        dispatch({
          type: "SET_DEFAULT_VALUE",
          payload: { name, rating, review },
        });
        setValue("name", name);
        setValue("rating", rating);
        setValue("review", review);
      }
      dispatch({ type: "SET_LOADING", payload: false });
    };
    fetchReview();
  }, [reviewId, setValue]);

  const onSubmit = async (data) => {
    const userData = localStorage.getItem("userData");
    const user = JSON.parse(userData);

    if (!user.id || !user.email) {
      alert("User not authenticated");
      return;
    }

    const reviewData = {
      id: reviewId,
      name: data.name,
      rating: data.rating,
      review: data.review,
    };

    const { data: responseData, error } = await updateReview(reviewData);

    if (error) {
      alert(error);
    } else {
      navigate(`/menu/${id}`);
    }
  };

  return (
    <div className="mx-auto my-8 mb-24 mt-48 max-w-xl rounded border border-gray-200 bg-white p-6">
      <h2 className="mb-6 text-center text-3xl font-bold text-customOrange">
        Edit a Review
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-base font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Z][a-zA-Z]*$/,
                message:
                  "Name must start with a capital letter and contain only letters",
              },
            })}
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
            className={`mt-1 block w-full rounded border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } p-2 focus:border-customOrange focus:outline-none`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700">
            Rating
          </label>
          <div className="mt-1 flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => {
                  dispatch({ type: "SET_RATING", payload: star });
                  setValue("rating", star, { shouldValidate: true });
                }}
                className={`text-2xl ${
                  star <= state.rating ? "text-customOrange" : "text-gray-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <input
            type="hidden"
            {...register("rating", {
              required: "Rating is required",
              validate: (value) => value > 0 || "Rating is required",
            })}
            value={state.rating}
          />
          {errors.rating && (
            <p className="mt-1 text-sm text-red-500">{errors.rating.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-base font-medium text-gray-700"
          >
            Review
          </label>
          <textarea
            id="message"
            {...register("review", {
              required: "Review is required",
              minLength: {
                value: 10,
                message: "Review must be at least 10 characters long",
              },
            })}
            value={state.review}
            onChange={(e) =>
              dispatch({ type: "SET_REVIEW", payload: e.target.value })
            }
            className={`mb-7 mt-1 block w-full rounded border ${
              errors.review ? "border-red-500" : "border-gray-300"
            } p-2`}
            rows={8}
          ></textarea>
          {errors.review && (
            <p className="mt-1 text-sm text-red-500">{errors.review.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded-xl border-2 border-customOrange bg-customOrange py-2.5 text-lg font-bold text-snow transition-colors duration-200 hover:bg-snow hover:text-customOrange"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default EditReviewForm;
