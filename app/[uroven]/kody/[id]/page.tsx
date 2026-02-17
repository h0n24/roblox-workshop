import Link from "next/link";
import { notFound } from "next/navigation";
import { PrefabDetailClient } from "@/components/prefab-detail-client";
import {
  getPrefabById,
  getPrefabCodeById,
  getPrefabStepsById,
  prefabs,
  tooltips,
} from "@/lib/data";
import { isLevelRouteSlug } from "@/lib/level-route";

type LevelKodyDetailPageProps = {
  params: {
    uroven: string;
    id: string;
  };
};

export function generateStaticParams() {
  return ["zacatecnik", "pokrocily"].flatMap((uroven) =>
    prefabs.map((prefab) => ({ uroven, id: prefab.id })),
  );
}

export default function LevelKodyDetailPage({ params }: LevelKodyDetailPageProps) {
  if (!isLevelRouteSlug(params.uroven)) {
    notFound();
  }

  const prefab = getPrefabById(params.id);
  if (!prefab) {
    notFound();
  }

  const code = getPrefabCodeById(prefab.id);
  const steps = getPrefabStepsById(prefab.id);

  return (
    <div className="space-y-4">
      <Link
        href={`/${params.uroven}/kody`}
        className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
      >
        ⟵ Zpět na všechny kódy
      </Link>

      <PrefabDetailClient
        prefab={prefab}
        code={code}
        steps={steps}
        tooltips={tooltips}
      />
    </div>
  );
}
