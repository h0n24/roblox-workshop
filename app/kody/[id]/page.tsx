import { redirect } from "next/navigation";

type LegacyKodyDetailPageProps = {
  params: {
    id: string;
  };
};

export default function LegacyKodyDetailPage({ params }: LegacyKodyDetailPageProps) {
  redirect(`/zacatecnik/kody/${params.id}`);
}
