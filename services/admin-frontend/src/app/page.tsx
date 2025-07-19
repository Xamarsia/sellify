"use client";

import AddAmountButton from "@sellify/admin-ui-components/AddAmountButton";
import Button from "@sellify/common-ui-components/buttons/Button";

import { useState } from "react";

export default function Home() {
  const [quantity, setQuantity] = useState<number>();

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
      <div className="flex m-16 gap-10">
        <AddAmountButton
          value={quantity}
          onChange={setQuantity}
          onSubmit={setQuantity}
        />
        <AddAmountButton
          value={quantity}
          onChange={setQuantity}
          onSubmit={setQuantity}
          disabled
        />
      </div>
    </div>
  );
}
