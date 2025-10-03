import ProfileLayout from "components/ProfileLayout";

export default function EditProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProfileLayout>{children}</ProfileLayout>;
}
