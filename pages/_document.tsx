import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Nav />
        <Head></Head>
        <body className="bg-dark">
          <Main />
          <NextScript />
        </body>
        <Footer />
      </Html>
    );
  }
}

export default MyDocument;
