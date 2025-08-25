"use server";

export type LoginResult = {
  success: boolean;
  message: string;
};

export async function login(
  prevState: LoginResult | null,
  formData: FormData
): Promise<LoginResult> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (email === "test@example.com" && password === "123") {
    return { success: true, message: "Login success!" };
  }

  return { success: false, message: "Invalid credentials" };
}
