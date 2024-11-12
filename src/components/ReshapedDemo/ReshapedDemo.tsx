"use client";

import { ReactNode, useState } from "react";
import {
  useToast,
  useToggle,
  View,
  Text,
  Button,
  DropdownMenu,
  Modal,
  Dismissible,
  Actionable,
  Theme,
  Badge,
  Calendar,
} from "reshaped";
import { getThemeCSS, generateThemeColors } from "reshaped/themes";

let counter = 0;

const DemoBlock = (props: {
  children: ReactNode;
  title: string;
  fill?: boolean;
}) => {
  return (
    <View
      backgroundColor="neutral-faded"
      padding={props.fill ? 0 : 20}
      paddingInline={props.fill ? 0 : 10}
      borderRadius="medium"
      align={props.fill ? undefined : "center"}
      justify={props.fill ? undefined : "center"}
    >
      <View position="absolute" insetTop={2} insetStart={2}>
        <Text variant="caption-1" color="neutral-faded">
          {props.title}
        </Text>
      </View>
      {props.children}
    </View>
  );
};

const ToastDemo = () => {
  const toast = useToast();

  return (
    <DemoBlock title="Toast with stacking">
      <Button
        onClick={() => {
          counter += 1;
          toast.show({
            text:
              counter % 2
                ? "You've clicked a button. Wanna do it again?"
                : "Notifications can take multiple lines and stacking will still work just fine.",
            color: "inverted",
          });
        }}
      >
        Show notification
      </Button>
    </DemoBlock>
  );
};

const FocusDemo = () => {
  const modalToggle = useToggle();

  return (
    <DemoBlock title="Focus management">
      <DropdownMenu position="bottom-end">
        <DropdownMenu.Trigger>
          {(attributes) => (
            <Button attributes={attributes}>Open dropdown</Button>
          )}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item onClick={modalToggle.activate}>
            Open dialog
          </DropdownMenu.Item>
          <DropdownMenu.Item>Close dropdown</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
      <Modal
        size="500px"
        onClose={modalToggle.deactivate}
        active={modalToggle.active}
        padding={6}
      >
        <View gap={4}>
          <View gap={2}>
            <Dismissible
              onClose={modalToggle.deactivate}
              closeAriaLabel="Close dialog"
              align="center"
            >
              <Modal.Title>Focus management center</Modal.Title>
            </Dismissible>
            <Modal.Subtitle>
              Clicking outside the active dropdown here won&apos;t close the
              modal and closing the modal will move the focus back to the
              original button even though dropdown menu is already closed.
            </Modal.Subtitle>
          </View>

          <View.Item>
            <DropdownMenu position="bottom-end">
              <DropdownMenu.Trigger>
                {(attributes) => (
                  <Button attributes={attributes}>Open nested dropdown</Button>
                )}
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Close dropdown</DropdownMenu.Item>
                <DropdownMenu.Item>Also close dropdown</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </View.Item>
        </View>
      </Modal>
    </DemoBlock>
  );
};

const ThemeDemo = () => {
  const [customThemeValues, setCustomThemeValues] =
    useState<Record<"primary", string>>();
  const customThemeCSS =
    customThemeValues &&
    getThemeCSS("custom", {
      color: generateThemeColors({
        primary: customThemeValues.primary,
      }),
    });

  return (
    <DemoBlock title="Theme generation" fill>
      {customThemeCSS && <style>{customThemeCSS}</style>}

      <View grow direction={{ s: "column", m: "row" }} divided align="stretch">
        <View
          grow
          align="center"
          justify="center"
          padding={20}
          paddingInline={2}
          direction="row"
          gap={2}
          height="100%"
          width="100%"
        >
          {["#2563eb", "#00738f", "#34d399", "#facc15", "#be185d"].map(
            (color) => (
              <Actionable
                key={color}
                borderRadius="inherit"
                attributes={{
                  "aria-label": `Switch to ${color} color`,
                }}
                onClick={() =>
                  setCustomThemeValues(() => ({
                    primary: color,
                  }))
                }
              >
                <View
                  width={5}
                  height={5}
                  borderRadius="circular"
                  attributes={{
                    style: {
                      transition: `box-shadow var(--rs-duration-fast) var(--rs-easing-standard)`,
                      background: color,
                      boxShadow:
                        color === customThemeValues?.primary
                          ? `0 0 0 3px var(--rs-color-background-elevation-base), 0 0 0 5px ${color}`
                          : undefined,
                    },
                  }}
                />
              </Actionable>
            )
          )}
        </View>
        <View
          grow
          align="center"
          justify="center"
          padding={20}
          paddingInline={4}
        >
          <Theme name="custom">
            <View direction="row" gap={2} align="center" justify="center">
              <Button color="primary" onClick={() => {}}>
                Primary button
              </Button>
              <Badge color="primary" variant="faded">
                Faded badge
              </Badge>
            </View>
          </Theme>
        </View>
      </View>
    </DemoBlock>
  );
};

const ReshapedDemo = () => {
  return (
    <View direction="row" gap={4}>
      <View.Item columns={{ s: 12, m: 6 }}>
        <ToastDemo />
      </View.Item>
      <View.Item columns={{ s: 12, m: 6 }}>
        <FocusDemo />
      </View.Item>
      <View.Item columns={12}>
        <ThemeDemo />
      </View.Item>
      <View.Item columns={12}>
        <DemoBlock title="Calendar with keyboard navigation">
          <View maxWidth="320px">
            <Calendar range />
          </View>
        </DemoBlock>
      </View.Item>
    </View>
  );
};

export default ReshapedDemo;
