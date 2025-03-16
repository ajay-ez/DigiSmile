"use server";

export const changePasswordAction = async (passwords: any) => {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/change_password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${passwords.authToken}`
        },
        body: JSON.stringify({
          new_password: passwords.new_password,
          old_password: passwords.old_password
        })
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    console.log("error", error);
    return { success: false, error: error.message || error.msg };
  }
};

export const forgotPasswordAction = async (payload: any) => {
  console.log("email", payload);

  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/forget_password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: payload.email })
      }
    );
    console.log("jsonResponse", apiResponse);
    console.log("jsonResponse", apiResponse.ok);
    const jsonResponse = await apiResponse.json();
    console.log("jsonResponse", jsonResponse);

    if (apiResponse.status !== 200) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    console.log("error", error);
    return { success: false, error: error.message || error.msg };
  }
};

export const fetchUserDetails = async (authToken: any) => {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/get_user_details`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authToken}`
        }
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
