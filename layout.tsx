import "./style.css";
export const metadata = { title: "LMG MARKETS", description: "Educational market insights and member portal" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
