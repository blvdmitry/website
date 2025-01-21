import { View, Text, Button } from "reshaped";
import Container from "@/components/Container";
import ReshapedDemo from "@/components/ReshapedDemo";
import ExternalLinkIcon from "@/icons/ExternalLink";

const Project = (props: {
  name: string;
  acquiredYear?: number;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <View gap={2}>
      <View direction="row" justify="space-between" gap={4} align="center">
        <View gap={2} align="baseline" direction="row">
          <Text variant="body-3" weight="medium">
            {props.name}
          </Text>
          {props.acquiredYear && (
            <Text variant="caption-1" color="neutral-faded" as="span">
              Acquired in {props.acquiredYear}
            </Text>
          )}
        </View>
        <Button.Aligner>
          <Button
            size="small"
            variant="ghost"
            color="primary"
            href={props.href}
            attributes={{ target: "_blank" }}
            endIcon={ExternalLinkIcon}
          >
            Visit website
          </Button>
        </Button.Aligner>
      </View>
      <Text variant="body-3" color="neutral-faded" as="p">
        {props.children}
      </Text>
    </View>
  );
};

export default function Home() {
  return (
    <Container>
      <View gap={8}>
        <Project name="Reshaped" href="https://reshaped.so">
          In my free time, I work on my own design system for React and Figma,
          where I handle both development and design. It provides complete
          alignment between code and design, supports flexible theming and
          composition features and uses the latest React and Figma capabilities.
          Here are a few component examples from it:
        </Project>
        <ReshapedDemo />

        <Project
          name="Design System Checklist"
          href="https://designsystemchecklist.com"
        >
          An open-source checklist to help you plan, build and grow your design
          system. Design System Checklist is well recognised by the design and
          development communities, was featured many times by the domain experts
          and is translated to 3 other languages through open-source
          contributions.
        </Project>

        <Project
          name="Frontloops"
          acquiredYear={2019}
          href="https://frontloops.io"
        >
          A collection of front-end UI challenges for those learning HMTL, CSS
          and JS delivered right to your email inbox. Each challenge includes a
          solution with additional hints helping to learn front-end engineering
          techniques.
        </Project>
      </View>
    </Container>
  );
}
