type SideMenuItemProps = {
  text: string;
  href: string;
  selected?: boolean;
};

/**
 * Renders a navigation link for use inside a side menu.
 *
 * Selected items use active link styling.
 *
 * @param text - Link text displayed to the user
 * @param href - Link destination
 * @param selected - Whether the link represents the current destination
 */
export default function SideMenuItem({
  text,
  href,
  selected,
}: SideMenuItemProps) {
  return (
    <a
      href={href}
      className={`flex items-center h-10 bg-white underline-offset-4
        hover:underline hover:text-black enabled:cursor-pointer body
        ${selected ? `underline text-black` : `text-secondary`}
      `}
    >
      {text}
    </a>
  );
}
