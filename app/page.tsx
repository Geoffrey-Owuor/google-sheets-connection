import HomePage from "@/components/Layout/HomePage";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default page;
