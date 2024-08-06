import supabase from "../config/supabaseClient";

export const addToCart = async (menuItemId, quantity, price) => {
  // Get user ID from local storage
  const userData = localStorage.getItem("userData");
  const { id, email } = JSON.parse(userData);

  if (!id) {
    console.error("User ID not found in local storage");
    return;
  }
  console.log("USER ID:", id);

  // Check if the item already exists in the user's cart
  const { data, error } = await supabase
    .from("cart")
    .select("id, quantity")
    .eq("userId", id)
    .eq("menuItemId", menuItemId);

  console.log("EXISTING ITEM DATA", data);

  if (error) {
    console.error("Error checking existing cart item:", error.message);
    return;
  }

  if (data.length !== 0) {
    // If the item exists, update the quantity
    const updatedQuantity = data[0].quantity + quantity;
    console.log("UPDATED QUANTITY", updatedQuantity);

    const { error } = await supabase
      .from("cart")
      .update({ quantity: updatedQuantity })
      .eq("id", data[0].id);

    if (error) {
      console.error("Error updating cart item:", error.message);
      return;
    }
    console.log("Cart item updated successfully");
  } else {
    // If the item does not exist, insert a new record
    const { error: insertError } = await supabase.from("cart").insert({
      userId: id,
      menuItemId: menuItemId,
      quantity: quantity,
      created_at: new Date().toISOString(),
      email: email,
      price: price,
    });

    if (insertError) {
      console.error("Error adding new cart item:", insertError.message);
      return;
    }
    console.log("New cart item added successfully");
  }
};

export const updateCartItem = async (id, quantity) => {
  const { error } = await supabase
    .from("cart")
    .update({ quantity })
    .eq("id", id);

  if (error) {
    console.error("Error updating cart item:", error.message);
    return false;
  }

  return true;
};

// Delete cart item
export const deleteCartItem = async (id) => {
  const { error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    console.error("Error deleting cart item:", error.message);
    return false;
  }

  return true;
};
