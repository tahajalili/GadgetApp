import { Page, Text } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <Page
      title="About"
      divider
      backAction={{
        content: "Shop Information",
        onAction: () => navigate("/"),
      }}
    >
      <Text variant="bodyMd" as="p">
        Hello world
      </Text>
    </Page>
  );
};

export default AboutPage;
