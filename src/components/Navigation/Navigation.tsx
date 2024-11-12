"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsProps } from "reshaped";

const Navigation = () => {
  const pathname = usePathname();
  const [value, setValue] = useState(pathname);
  const router = useRouter();

  const handleChange: TabsProps["onChange"] = (args) => {
    router.push(args.value, { scroll: false });
    setValue(args.value);
  };

  return (
    <Tabs value={value} onChange={handleChange} variant="borderless">
      <Tabs.List>
        <Tabs.Item value="/">Projects</Tabs.Item>
        <Tabs.Item value="/experience">Experience</Tabs.Item>
        <Tabs.Item value="/public">Talks and articles</Tabs.Item>
      </Tabs.List>
    </Tabs>
  );
};

export default Navigation;
