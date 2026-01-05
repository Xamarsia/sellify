"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

export default function PageTitle() {
  const pathname: string = usePathname();

  const currentTitle = useMemo<string | undefined>(() => {
    switch (pathname) {
      case "/profile":
        return "Personal Information";
      case "/profile/orders":
        return "Orders";
      case "/profile/security":
        return "Security Settings";
    }
  }, [pathname]);

  return <h1>{currentTitle}</h1>;
}
