import { z } from "zod";
const phoneNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Your name should not be that short!" })
    .max(25),
  lastName: z
    .string()
    .min(2, { message: "Your name should not be that short!" })
    .max(25),
  email: z.string().email(),
  phone: z.string().refine((value) => phoneNumberRegex.test(value), {
    message: "Invalid phone number format. Use the format: 000-000-0000.",
  }),
  serviceInterested: z.array(
    z.string().min(2, { message: "Please provide a valid service." })
  ),

  message: z.optional(z.string()), // Making the 'message' field optional
});
