import { ChecklistPageClient } from "@/components/checklist-page-client";
import { notFound } from "next/navigation";

const taskMap = {
  "1": "task1",
  "2": "task2",
} as const;

type TaskRouteParam = keyof typeof taskMap;

type ChecklistTaskPageProps = {
  params: {
    task: string;
  };
};

export function generateStaticParams() {
  return [{ task: "1" }, { task: "2" }];
}

export default function ChecklistTaskPage({ params }: ChecklistTaskPageProps) {
  const taskKey = taskMap[params.task as TaskRouteParam];

  if (!taskKey) {
    notFound();
  }

  return <ChecklistPageClient taskKey={taskKey} />;
}
