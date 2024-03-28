import "./globals.css";

export const metadata = {
  title: "Plateforme ISTY",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
