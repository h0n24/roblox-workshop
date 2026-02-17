import { redirect } from "next/navigation";

type LegacyChecklistTaskPageProps = {
  params: {
    task: string;
  };
};

export default function LegacyChecklistTaskPage({
  params,
}: LegacyChecklistTaskPageProps) {
  redirect(`/zacatecnik/checklist/${params.task}`);
}
