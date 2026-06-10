import type { Metadata } from "next";
import {
  initServerI18next,
  getT,
  getResources,
  generateI18nStaticParams,
} from "next-i18next/server";

type Props = {
  params: Promise<{ lng: string }>;
};

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { lng } = await params;
  const { t } = await getT();

  return {
    title: t("common:homemetatitle"),
    description: t("common:metadesc"),
    applicationName: "SCI AFG",
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
