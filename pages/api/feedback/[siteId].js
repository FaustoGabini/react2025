import { getAllFeedback } from "../../../lib/db-admin";

export default async (req, res) => {
  const siteId = req.query.siteId;
  const { result } = await getAllFeedback(siteId);

  if (result.error) {
    res.status(500).json({ error: result.error });
  }

  res.status(200).json({ feedback: result.feedback });
};
