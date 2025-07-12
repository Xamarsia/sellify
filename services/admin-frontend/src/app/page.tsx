"use client";

import Button from "@sellify/common-ui-components/buttons/Button";


export default function Home() {
  return (
    <div className="flex-row gap-20">
      <div className="flex m-16 gap-10">
        <Button size="small">
          <p> Small Button</p>
        </Button>
        <Button size="small" variant="destructive">
          <p> Small Button</p>
        </Button>
        <Button size="small" variant="outline">
          <p> Small Button</p>
        </Button>
      </div>
    </div>
  );
}