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

