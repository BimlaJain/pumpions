import "./globals.css";

export const metadata = {
  title: "Pumpions",
  description: "Own, support & celebrate art.",
  openGraph: {
    title: "Pumpions",
    description: "Own, support & celebrate art. ",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` uppercase antialiased bg-[#28424F]`}
      >
        {children}
      </body>
    </html>
  );
}
