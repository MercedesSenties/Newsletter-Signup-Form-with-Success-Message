import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { email } = req.body;
    const isValidEmail = validateEmail(email);

    if (isValidEmail) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, error: "Invalid email" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "An error occurred" });
  }
}

//function to validate email address
function validateEmail(email: string): boolean {
  const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return emailPattern.test(email);
}
