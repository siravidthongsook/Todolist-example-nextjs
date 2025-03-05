export default function usernameValidate(username: string): { isValid: boolean; errors?: string[] } {
  const errors: string[] = [];

  // Check minimum length (4 characters)
  if (username.length < 4) {
    errors.push("Username must be at least 4 characters long");
  }

  // Check maximum length (14 characters)
  if (username.length > 14) {
    errors.push("Username cannot exceed 14 characters");
  }

  // Check if all lowercase
  if (username !== username.toLowerCase()) {
    errors.push("Username must be all lowercase");
  }

  // Check for allowed characters (letters, numbers, underscore only)
  const regex = /^[a-z0-9_]+$/;
  if (!regex.test(username)) {
    errors.push("Username can only contain lowercase letters, numbers, and underscores");
  }

  // Return result: isValid is true only if there are no errors
  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}
