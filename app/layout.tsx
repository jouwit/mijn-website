import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jouwit.nl"),
  title: {
    default: "Jouw IT | Websitebeheer, Computerhulp & IT-Advies in Twente",
    template: "%s | Jouw IT",
  },
  description:
    "Persoonlijke computerhulp aan huis, websitebeheer en zakelijk IT-advies (Microsoft 365) in Almelo, Enschede en Twente. Ook 's avonds en in het weekend.",
  openGraph: {
    title: "Jouw IT | Websitebeheer, Computerhulp & IT-Advies in Twente",
    description:
      "Persoonlijke computerhulp aan huis (€ 45/uur, no cure no pay), websitebeheer en zakelijke Microsoft 365-ondersteuning in Twente.",
    url: "https://jouwit.nl",
    siteName: "Jouw IT",
    locale: "nl_NL",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://jouwit.nl/#organization",
  name: "Jouw IT",
  url: "https://jouwit.nl",
  logo: "https://jouwit.nl/logo-jouw-it.png",
  description:
    "Lokale IT-dienstverlener voor computerhulp aan huis, laptop service, technisch websitebeheer, onafhankelijk IT-advies en Microsoft 365 ondersteuning in Almelo, Enschede en Twente.",
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Almelo" },
    { "@type": "City", name: "Enschede" },
    { "@type": "City", name: "Hengelo" },
    { "@type": "AdministrativeArea", name: "Twente" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "18:00",
      closes: "23:59",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  knowsAbout: [
    "Computerhulp aan huis",
    "Laptop opschonen",
    "Websitebeheer en onderhoud",
    "Microsoft 365 beheer",
    "IT-advies",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}