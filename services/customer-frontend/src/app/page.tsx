import Button from "@sellify/common-ui-components/buttons/Button";

export default function Home() {
  return (
    <div className="flex m-16 gap-10 bg-amber-950">
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
  );
}