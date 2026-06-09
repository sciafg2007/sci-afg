import type { Metadata } from "next";
import initTranslations from "../../i18n";

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { locale } = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t("Navigation:aboutmt"),
    description: t("Navigation:aboutmd"),
    applicationName: "Sci Hibiscus",
    twitter: {
      card: "summary_large_image",
    },
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

/**Translations */
const i18nNamespaces = [
  "Navigation",
  "HomePage",
  "ProjectsPage",
  "BuylandPage",
  "BlogPage",
  "ServicesPage",
  "PrivacyPage",
  "AboutPage",
  "CareerPage",
  "ContactPage",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
