import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Nama gak boleh kosong"),
  hp: z.string().min(1, "Nomor HP gak boleh kosong"),
  email: z
    .string({ required_error: "Email gak boleh kosong" })
    .email({ message: "Email gak valid" }),
});
