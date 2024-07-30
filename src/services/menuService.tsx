import supabase from "../config/supabaseClient";

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
