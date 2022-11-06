import "../styles/globals.css";
import React from "react";
// import '../assets/mdb.dark.min.css';
// import '../assets/mdb.dark.rtl.min.css';
// import '../assets/mdb.min.css';
// import '../assets/mdb.rtl.min.css';

function MyApp({ Component, pageProps }) {
  const [credentials, setCredentials] = React.useState({});

  return (
    <Component cred={credentials} setCred={setCredentials} {...pageProps} />
  );
}

export default MyApp;
