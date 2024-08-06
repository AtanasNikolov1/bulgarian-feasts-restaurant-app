import supabase from "../config/supabaseClient";

export const addReview = async ({
  userId,
  menuItem,
  name,
  email,
  rating,
  review,
}) => {
  const { data, error } = await supabase.from("reviews").insert([
    {
      userId,
      menuItem,
      name,
      email,
      rating,
      review,
    },
  ]);

  if (error) {
    console.error("Error inserting review:", error);
    return { error };
  } else {
    console.log("Review inserted:", data);
    return { data };
  }
};

// REVIEWS
export const getReview = async (id) => {
  try {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error.message;
    }

    return { data, error: null };
  } catch (error) {
    console.error("Error updating review:", error);
    return {
      data: null,
      error: "Failed to load review data. Please try again later.",
    };
  }
};

export const updateReview = async ({ id, name, rating, review }) => {
  try {
    const { data, error } = await supabase
      .from("reviews")
      .update({ name: name, rating: rating, review: review })
      .eq("id", id);

    if (error) {
      throw error.message;
    }

    return { data, error: null };
  } catch (error) {
    console.error("Error updating review:", error);
    return {
      data: null,
      error: "Failed to update review",
    };
  }
};
