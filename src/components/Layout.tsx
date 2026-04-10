import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1 pt-20">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
