import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gray-700">{children}</main>
      <Footer />
    </div>
  );
}
