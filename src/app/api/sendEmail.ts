// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method === "POST") {
//     const { name, subject, message } = req.body;
//     console.log("subject", subject);
//     console.log("message", message);
//     console.log("name", name);

//     const body = encodeURIComponent(
//       `Hey Jay and Lucas,

// ${message}

// Best regards,
// ${name}`,
//     );
//     const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jay.gopal@healthclinicai.com,lucas.lieberman@healthclinicai.com&su=${subject}&body=${body}`;

//     // Send the URL back to the client
//     res.status(200).json({ url: gmailUrl });
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
