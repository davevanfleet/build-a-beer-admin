import { NextPage } from "next";
import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("@/admin/AdminApp"), { ssr: false });

const Admin: NextPage = () => (
  <>
    <AdminApp />
  </>
);

export default Admin;
