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
    return { success: false, error: error.message || error.msg };
  }
};

export const forgotPasswordAction = async (payload: any) => {
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
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
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
