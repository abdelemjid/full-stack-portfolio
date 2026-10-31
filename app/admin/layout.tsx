import React, { Suspense } from "react";
import AdminLayout from "../components/layouts/adminLayout";

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <Suspense fallback={null}>
      <AdminLayout>{children}</AdminLayout>
    </Suspense>
  );
}
