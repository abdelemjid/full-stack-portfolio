import { requireAdmin } from "@/lib/auth";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}

async function AuthGate({ children }: Props) {
  await requireAdmin();
  return <>{children}</>;
}

export default function ProtectedLayout({ children }: Props) {
  return (
    <Suspense fallback={null}>
      <AuthGate>{children}</AuthGate>
    </Suspense>
  );
}
