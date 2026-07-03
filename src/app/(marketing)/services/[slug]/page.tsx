import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/constants/services";
import { ServiceDetailContent } from "./_components/ServiceDetailContent";
import { CTA } from "@/components/sections/CTA";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceDetailContent slug={slug} />
      <CTA />
    </>
  );
}
