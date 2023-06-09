import "@/app/globals.css";
import Provideres from "./providers";

export const metadata = {
  title: "Sample App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex min-h-full">
      <body className="flex min-h-full min-w-full bg-gray-100 dark:bg-gray-900">
        <Provideres>{children}</Provideres>
      </body>
    </html>
  );
}
