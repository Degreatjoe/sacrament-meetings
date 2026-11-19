import Header from "@/components/Header";
import NavLinks from "@/components/NavLinks";
import Footer from "@/components/Footer";

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <NavLinks />
      <main className="site-main">{children}</main>
      <Footer />
    </>
  );
}
