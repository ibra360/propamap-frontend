import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyArJOVVmBPjEuYiOyK6UtwvzA72uqghu5A&libraries=places"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://kit.fontawesome.com/6aca346687.js"></script>
      </html>
    );
  }
}
