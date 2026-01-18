export const metadata = {
  title: "Bangkok O-Manchan",
  description: "Bangkok restaurant finder for Korean workers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
