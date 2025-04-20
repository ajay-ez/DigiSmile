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

export const UpdateProfileAction = async (detail: any) => {
  detail.name = detail.first_name + " " + detail.last_name;
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/update_details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${detail.authToken}`
        },
        body: JSON.stringify({
          name: detail.name,
          email: detail.email,
          user_id: detail.userId,
          phone_number: detail.phone_number
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
        body: JSON.stringify(payload)
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 201) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
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
