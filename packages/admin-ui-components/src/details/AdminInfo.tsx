import { Admin } from "../types";

import AdminStatusComponent from "../statuses/AdminStatusComponent";

type AdminInfoProps = {
  admin: Admin;
};

export default function AdminInfo({ admin }: AdminInfoProps) {
  return (
    <>
      <div className="flex w-full gap-4">
        <p>{`Status:`}</p>
        <AdminStatusComponent status={admin.status} />
      </div>
      <p>{`Created On: ${admin.createdOn}`}</p>
    </>
  );
}
