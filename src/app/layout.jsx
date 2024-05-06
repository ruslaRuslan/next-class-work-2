export const metadata = {
  title: "Esas title",
  description: "Bu esas proyektir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>bu navbardir</div>
        {children}
        <div>bu footerdir</div>
      </body>
    </html>
  );
}
