import Image from "next/image";

const AuthLayout = ({
    children
}:  {
        children: React.ReactNode;
}) => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center space-y-6 bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20" // Adjust styles as needed
      >
        <source src="/LoginPageImage.mp4" type="video/mp4" />
        {/* Add fallback content for browsers that don't support video */}
        Your browser does not support HTML5 video.
      </video>
        <div className="flex flex-col items-center z-[50]">
          <Image src="/NavLogo.png" alt="Logo" height={100} width={100} />
          <h1 className="text-4xl md:text-6xl text-secondary font-sans font-bold">Jujutsu Stocks</h1>
        </div>
        {children}
    </div>
  )
}

export default AuthLayout