import { Typography } from "@mui/material";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: 'Build-a-Beer Data Rquest',
  description: 'Submit a request regarding your personal data.',
};

const Help: NextPage = () => (
  <>
    <Typography variant="h3" gutterBottom>Data Request</Typography>
  </>
);

export default Help;