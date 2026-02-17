import { notFound } from "next/navigation";
import { PrefabCatalogClient } from "@/components/prefab-catalog-client";
import { isLevelRouteSlug } from "@/lib/level-route";

type LevelKodyPageProps = {
  params: {
    uroven: string;
  };
};

export function generateStaticParams() {
  return [{ uroven: "zacatecnik" }, { uroven: "pokrocily" }];
}

export default function LevelKodyPage({ params }: LevelKodyPageProps) {
  if (!isLevelRouteSlug(params.uroven)) {
    notFound();
  }

  return <PrefabCatalogClient />;
}
