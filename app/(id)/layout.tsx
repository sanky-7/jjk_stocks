import Navbar from "@/app/(browse)/_components/navbar";

const CharacterStocksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default CharacterStocksLayout;