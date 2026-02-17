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

type KodyDetailPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return prefabs.map((prefab) => ({ id: prefab.id }));
}

export default function KodyDetailPage({ params }: KodyDetailPageProps) {
  const prefab = getPrefabById(params.id);

  if (!prefab) {
    notFound();
  }

  const code = getPrefabCodeById(prefab.id);
  const steps = getPrefabStepsById(prefab.id);

  return (
    <div className="space-y-4">
      <Link
        href="/kody"
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
