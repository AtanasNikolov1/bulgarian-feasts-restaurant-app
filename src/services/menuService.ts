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

