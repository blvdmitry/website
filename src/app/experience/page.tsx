import Container from "@/components/Container";
import { View, Text } from "reshaped";

const Position = (props: {
  name: string;
  date: string;
  company: string;
  children: React.ReactNode;
}) => {
  return (
    <View gap={2}>
      <View direction="row" justify="space-between" gap={2} align="baseline">
        <Text variant="body-3" weight="medium">
          {props.name}
        </Text>
        <Text variant="caption-1" color="neutral-faded">
          {props.company}, {props.date}
        </Text>
      </View>
      <Text variant="body-3" color="neutral-faded" as="p">
        {props.children}
      </Text>
    </View>
  );
};

const ExperiencePage = () => {
  return (
    <Container>
      <View gap={16}>
        <Position
          name="Principal Front-end Engineer"
          company="Booking.com"
          date="2018 – now"
        >
          As one of the first engineers in the UX Foundations area, I&apos;ve
          been responsible for building and scaling our design system and tools
          for more than 600 engineers and designers using it in their day-to-day
          work. Over the years, I grew to also manage web platform related
          topics, handle the annual technical planning and define the overall
          front-end direction for the department.
          <br />
          <br />
          As a few examples of the hands-on work I do: I&apos;ve worked on the
          roll-out of the global navigation patterns across 5 of our verticals,
          built a mdx based documentation tool on top of Next.js, created a
          local development environment for components, implemented a React
          component library for email clients and more.
        </Position>

        {/* 
          TODO: Add case studies, examples:
          - Global nav: Header / Searchbox
          - Design System
          - Tooling ecosystem
          - Email library
        */}

        <Position
          name="Senior Front-end Engineer"
          company="SuperJob"
          date="2017 – 2018"
        >
          Before moving to Amsterdam, I&apos;ve joined a company redesigning
          their main product. During this year, I&apos;ve led the development of
          a React component library during the redesign, implemented a cv
          builder, and introduced unit and screenshot testing. With many people
          on the team just starting to learn React, I&apos;ve helped others
          learn common best-practices and contribute to the product
          architecture.
        </Position>
        <Position
          name="Senior Front-end Engineer"
          company="Avionero"
          date="2016 – 2017"
        >
          As a side job, I&apos;ve helped Avionero to launch their MVP for the
          flight tickets search engine. I was solely responsible for
          implementing the front-end application and it was my first experience
          of using React for production code. I built the first version of the
          application in 3 months working part-time and kept helping with the
          maintenance after that.
        </Position>

        <Position
          name="Front-end Engineer / Tech lead"
          company="Mail.ru"
          date="2012 – 2017"
        >
          While working in the media projects department, our front-end team
          maintained a lineup of 13 websites. Almost immediately after I joined,
          the company decided to unify their visual style, and I was responsible
          for implementing the first component library while simultaneously
          working on the product redesign. Over the next two years, I completed
          the migration of 10 mobile products and 3 of their desktop versions,
          while also maintaining the component library for the entire team and
          contributing to our internal JS framework.
          <br />
          <br />
          After a wave of redesign work, I primarily focused on 3 projects as a
          tech lead, managing a team of 3 other developers and assisting
          managers with sprint plannings.
        </Position>

        <Position
          name="Front-end Engineer"
          company="BigBuzzy"
          date="2011 – 2012"
        >
          First front-end position, which I landed while completing my last year
          at university. I was responsible for implementing unique designs for
          the offer pages our product provided. To speed up the process, I built
          a templating system that both I and other engineers on the team used,
          which increased our output from implementing approximately 4 designs
          per day to up to 12 designs.
        </Position>
      </View>
    </Container>
  );
};

export default ExperiencePage;
