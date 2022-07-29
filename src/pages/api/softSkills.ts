import { NextApiRequest, NextApiResponse } from "next";

import { softSkills } from "../../../data";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ softSkills });
};
