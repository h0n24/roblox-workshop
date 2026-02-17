import { ChecklistPageClient } from "@/components/checklist-page-client";
import { isLevelRouteSlug } from "@/lib/level-route";
import { notFound } from "next/navigation";

const taskMap = {
  "1": "task1",
  "2": "task2",
} as const;

type TaskRouteParam = keyof typeof taskMap;

type LevelChecklistTaskPageProps = {
  params: {
    uroven: string;
    task: string;
  };
};

export function generateStaticParams() {
  return [
    { uroven: "zacatecnik", task: "1" },
    { uroven: "zacatecnik", task: "2" },
    { uroven: "pokrocily", task: "1" },
    { uroven: "pokrocily", task: "2" },
  ];
}

export default function LevelChecklistTaskPage({
  params,
}: LevelChecklistTaskPageProps) {
  if (!isLevelRouteSlug(params.uroven)) {
    notFound();
  }

  const taskKey = taskMap[params.task as TaskRouteParam];
  if (!taskKey) {
    notFound();
  }

  return <ChecklistPageClient taskKey={taskKey} />;
}
