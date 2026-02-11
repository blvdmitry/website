import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Button, Divider, Hidden, View, Text } from "reshaped";
import App from "@/components/App";
import Navigation from "@/components/Navigation";
import "./tailwind.css";
import Container from "@/components/Container";
import BlueskyIcon from "@/icons/Bluesky";
import XIcon from "@/icons/X";
import GithubIcon from "@/icons/Github";
import ExternalLinkIcon from "@/icons/ExternalLink";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dmitry Belyaev",
  description:
    "My passion lies in building user interfaces and design/developer tools, while making their complexity invisible through great developer and user experiences.",
  metadataBase: new URL("https://blvdmitry.me"),
  openGraph: {
    siteName: "Dmitry Belyaev",
    url: "https://blvdmitry.me",
    locale: "en-US",
    type: "website",
    images: "/img/share.png",
  },
  other: {
    "twitter:card": "summary_large_image",
    "twitter:url": "https://blvdmitry.me",
  },
};

export const viewport: Viewport = {
  themeColor: "#212121",
};

const About = () => (
  <View gap={3}>
    <Text variant="body-2" weight="medium" as="h1">
      Dmitry Belyaev
    </Text>
    <Text variant="body-3" color="neutral-faded" as="p" wrap="balance">
      I&apos;m a staff engineer based in Amsterdam, working on Sidekick at Shopify.
    </Text>
    <Text variant="body-3" color="neutral-faded" as="p" wrap="balance">
      My passion lies in building user interfaces and design/developer tools,
      while making their complexity invisible through great developer and user
      experiences.
    </Text>
  </View>
);

const Social = () => (
  <View gap={2} direction="row" align="center" wrap>
    <Button
      variant="outline"
      elevated
      icon={XIcon}
      href="https://x.com/blvdmitry"
      attributes={{ target: "_blank" }}
    >
      Twitter
    </Button>
    <Button
      variant="outline"
      elevated
      icon={GithubIcon}
      href="https://github.com/blvdmitry"
      attributes={{ target: "_blank" }}
    >
      GitHub
    </Button>
    {/* <Hidden hide={{ s: true, m: false }}>
      <View.Item grow>
        <Divider />
      </View.Item>
    </Hidden> */}
    {/* <Button
      variant="outline"
      elevated
      endIcon={ExternalLinkIcon}
      href="https://read.cv/blvdmitry/how-i-work"
      attributes={{ target: "_blank" }}
    >
      How I work
    </Button> */}
  </View>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-rs-theme="website"
      data-rs-color-mode="dark"
      suppressHydrationWarning
    >
      <body>
        <App>
          <View minHeight="100dvh" overflow="hidden">
            <Container>
              <View paddingTop={12} gap={10}>
                <About />
                <Social />
                <Navigation />
              </View>
            </Container>

            <View backgroundColor="page-faded" paddingBlock={12} grow as="main">
              {children}
            </View>
          </View>
        </App>
      </body>
    </html>
  );
}
