import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex min-h-screen flex-col place-items-center gap-8 bg-[#FAFAFF] bg-cream p-20 px-2.5">
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
