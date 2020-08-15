import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../styles/index.css";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(faGithub, faTwitter);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
