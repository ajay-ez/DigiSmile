const invalidMessage = (value: string) => `Invalid ${value} format`;

export const EMAIL_MESSAGE = invalidMessage("email");

export const REQUIRE_MESSAGE = "This field is required";

export const INCORRECT_SYMBOL_MESSAGE = "Invalid characters used";

export const WHITE_SPACE = "This field cannot contain whitespaces";

export const PASSWORD_MIN_LENGTH = "Password must be at least 8 characters";

export const PASSWORD_MAX_LENGTH = "Password can't be more than 20 characters";

export const PASSWORD_MISMATCH = "Password miss match";

export const PASSWORD_INVALID_FORMAT =
  "At least one uppercase letter, one lowercase letter, one number, and one special character.";

export const PASSWORD_SHORT_MESSAGE = (length: number) =>
  `Password must be at least ${length} characters`;
export const PASSWORD_LONG_MESSAGE = (length: number) =>
  `Password must not exceed ${length} characters`;
