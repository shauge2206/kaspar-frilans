import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BACKDROPS } from "@/components/backdrops";
import { BackdropSwitcher } from "@/components/backdrop-switcher";
import { HomeContent } from "@/components/home-content";

export function generateStaticParams() {
  return BACKDROPS.map((b) => ({ v: b.slug }));
}

type Props = { params: Promise<{ v: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { v } = await props.params;
  const variant = BACKDROPS.find((b) => b.slug === v);
  if (!variant) return {};
  return {
    title: `Bakgrunn ${variant.id}: ${variant.name}`,
    description: variant.description,
    robots: { index: false, follow: false },
  };
}

export default async function BakgrunnVariantPage(props: Props) {
  const { v } = await props.params;
  const variant = BACKDROPS.find((b) => b.slug === v);
  if (!variant) notFound();
  const Backdrop = variant.component;

  return (
    <>
      <Backdrop />
      <BackdropSwitcher activeId={variant.id} />
      <HomeContent />
    </>
  );
}
