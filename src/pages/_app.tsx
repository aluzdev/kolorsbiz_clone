import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-cream px-2.5 pt-11">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
