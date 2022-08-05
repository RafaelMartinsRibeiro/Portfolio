import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
      <link rel="shortcut icon" href="favicon.png" type="image/png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="bg-gradient-to-r from-purple-600 to-blue-500 dark:from-dark-200 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
