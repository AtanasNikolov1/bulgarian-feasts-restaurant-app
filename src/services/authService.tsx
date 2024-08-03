import supabase from "../config/supabaseClient";

export const register = async ({
  firstName,
  lastName,
  email,
  password,
  rePassword,
}) => {
  if (!firstName || !lastName || !email || !password || !rePassword) {
    return { success: false, message: "Fill all fields" };
  }

  if (password !== rePassword) {
    return { success: false, message: "Passwords are not the same" };
  }

  // Sign up user with Supabase
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (signUpError) {
    return { success: false, message: signUpError.message };
  }

  const user = signUpData.user;

  // Insert user data into 'users' table
  const { data: insertData, error: insertError } = await supabase
    .from("users")
    .insert([
      {
        id: user.id,
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
    ]);

  if (insertError) {
    return { success: false, message: insertError.message };
  }

  return { success: true, message: "Registration successful!" };
};

export const login = async (email, password) => {
  if (!email || !password) {
    return { success: false, message: "Missing fields" };
  }

  const { data: signInData, error: signInError } =
    await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

  if (signInError) {
    return { success: false, message: signInError.message };
  }

  const user = signInData.user;

  return { success: true, user: user };
};

export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    localStorage.removeItem("userData");

    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false, message: error.message };
  }
};

export const isAuthenticated = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.error("Error getting session:", error.message);
    return false;
  }

  return !!session;
};
