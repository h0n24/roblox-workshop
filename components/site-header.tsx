"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LevelSelector } from "@/components/level-selector";
import { withLevelPath } from "@/lib/level-route";
import { useLevel } from "@/lib/use-level";

function NavLink({
  href,
  label,
  pathname,
  matchPrefix,
}: {
  href: string;
  label: string;
  pathname: string;
  matchPrefix?: string;
}) {
  const activePrefix = matchPrefix ?? href;
  const isActive = pathname === href || pathname === activePrefix || pathname.startsWith(`${activePrefix}/`);

  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        isActive
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-100"
      }`}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { level } = useLevel();
  const homeHref = withLevelPath("/", level);
  const checklistHref = withLevelPath("/checklist/1", level);
  const checklistPrefix = withLevelPath("/checklist", level);
  const kodyHref = withLevelPath("/kody", level);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Link href={homeHref} className="mr-2 text-base font-black text-slate-900">
            Roblox Workshop
          </Link>
          <NavLink href={checklistHref} label="Checklist" pathname={pathname} matchPrefix={checklistPrefix} />
          <NavLink href={kodyHref} label="Kódy" pathname={pathname} />
        </div>

        <LevelSelector showLabel={false} />
      </div>
    </header>
  );
}
