'use-client'

import { List, Typography, Link } from "@mui/material";
import { Metadata, NextPage } from "next";
import { HelpListItem } from "./components/HelpListItem";

export const metadata: Metadata = {
  title: 'Build-a-Beer Help',
  description: 'Support for the Build-a-Beer platform.',
};

type HelpTopic = {
  label: string;
  content: string;
}

const IOS_HELP_TOPICS: HelpTopic[] = [
  {
    label: "How do I save my recipes?",
    content: "We currently do not support saving recipes. This feature will be added in an upcoming release. In the meantime, continue to enjoy playing around in the recipe playground!" 
  },
  {
    label: "An ingredient is missing, how can I add it?",
    content: "We have done our best to keep our app as simple as possible, and therefore we don't currently support freely adding ingredients to recipes. Future releases may include special opt-in modes for advanced brewers to create more complicated, customized recipes, but our focus will always be on keeping the app easy to use for the broader brewing community. If you feel that a commonly used ingredient is missing from our database, feel free to contact us and we will look into adding it!"
  },
  {
    label: "A picture of a beer style looks wrong to me. Can you fix it?",
    content: "Yes! please feel free to contact us and tell us what seems wrong. We will be happy to hear the feedback and update the image."
  }
] 

const Help: NextPage = () => (
  <>
    <Typography variant="h3" gutterBottom>Help</Typography>
    <Typography variant="h6">iOS app help</Typography>
    <List>
      {IOS_HELP_TOPICS.map(helpTopic => (
        <HelpListItem key={helpTopic.label} label={helpTopic.label} content={helpTopic.content} />
      ))}
    </List>
    <Typography variant="h6">Other Questions</Typography>
    <Typography>If you don&apos;t see your question listed above, please <Link href="mailto:help@buildabeer.app">Contact Us</Link> and we&apos;ll do what we can to help!</Typography>
  </>
);

export default Help;