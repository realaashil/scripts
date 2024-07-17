// app/components/ThemeSwitcher.tsx
"use client";

import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <Switch
      defaultSelected={false}
      size="md"
      color="default"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onValueChange={(value) => { value ? setTheme("light") : setTheme("dark"); }}
    >
    </Switch >
  );
}

