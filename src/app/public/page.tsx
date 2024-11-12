import React from "react";
import NextLink from "next/link";
import Container from "@/components/Container";
import { View, Text, Divider, Link } from "reshaped";

const Post = (props: { href: string; name: string; side: string }) => {
  return (
    <View
      direction={{ s: "column", m: "row" }}
      gap={{ s: 0, m: 2 }}
      align={{ s: "start", m: "center" }}
    >
      <NextLink href={props.href} legacyBehavior passHref>
        <Link variant="plain" color="inherit" attributes={{ target: "_blank" }}>
          {props.name}
        </Link>
      </NextLink>
      <View.Item grow>
        <Divider />
      </View.Item>
      <Text color="neutral-faded">{props.side}</Text>
    </View>
  );
};

const PublicPage = () => {
  return (
    <Container>
      <View gap={{ s: 8, m: 4 }}>
        <Post
          name="Building durable component APIs"
          side="Article, 2023"
          href="https://www.supernova.io/blog/building-durable-component-apis-for-design-systems"
        />
        <Post
          name="You might not need css-in-js"
          side="Conference talk, 2023"
          href="https://slideslive.com/39000535/you-might-not-need-cssinjs"
        />
        <Post
          name="The different types of design systems"
          side="Article, 2021"
          href="https://maecapozzi.com/newsletter/46"
        />
        <Post
          name="What they don't tell you about design systems"
          side="Meetup talk, 2020"
          href="https://www.youtube.com/watch?v=G4mui3OCMVA&t=1133s"
        />
      </View>
    </Container>
  );
};

export default PublicPage;
