import supabase from "../config/supabaseClient";

export const fetchMenuItems = async () => {
  try {
    const { data, error } = await supabase.from("menu").select("*");

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: "Failed to menu items. Please try again later.",
    };
  }
};

export const fetchFilteredMenuItems = async (category, price, rating) => {
  let query = supabase.from("menu").select("*");

  if (category && category.value !== null) {
    query = query.eq("category", category.value);
  }

  if (price && price.value !== null) {
    query = query.order("price", { ascending: price.value === "asc" });
  }

  if (rating && rating.value !== null) {
    const ratingMin = rating.value;
    const ratingMax = rating.value + 0.9;
    query = query.gte("rating", ratingMin).lte("rating", ratingMax);
  }

  try {
    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.log(error.message);
    return {
      data: null,
      error: "Failed to filter the menu items. Please try again later.",
    };
  }
};

export const fetchPopularItems = async () => {
  try {
    const { data, error } = await supabase
      .from("menu")
      .select("id,name,imageUrl,price")
      .order("salesCount", { ascending: false })
      .limit(5);

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: "Failed to fetch popular items. Please try again later.",
    };
  }
};
