import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className=" flex min-h-screen flex-col place-items-center gap-8 bg-cream p-20 px-2.5">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
