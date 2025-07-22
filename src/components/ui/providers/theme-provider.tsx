import React from "react"
// components/providers/theme-provider.tsx
import { Theme, type ThemeProps } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

interface AppThemeProviderProps extends ThemeProps {
  children: React.ReactNode;
}

export function AppThemeProvider({ children, ...props }: AppThemeProviderProps) {
  return (
    <Theme
      appearance="dark"         // 💡 Default: always dark
      accentColor="violet"      // 🎨 Change this to match your brand
      grayColor="mauve"
      radius="large"
      scaling="100%"
      {...props}
    >
      {children}
    </Theme>
  );
}