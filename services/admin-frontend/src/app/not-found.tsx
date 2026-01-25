import ShieldExclamationIcon from "@sellify/common-icons/shield-exclamation";
import AlertDialogIcon from "@sellify/common-ui-components/dialog/AlertDialogIcon";

export default function NotFound() {
  return (
    <div className="flex flex-col grow items-center justify-center gap-6 py-26">
      <AlertDialogIcon icon={<ShieldExclamationIcon />} />
      <div className="flex flex-col items-center gap-4">
        <h2>Page not found</h2>
        <p>The page you are looking for doesn't exist.</p>
      </div>
    </div>
  );
}
