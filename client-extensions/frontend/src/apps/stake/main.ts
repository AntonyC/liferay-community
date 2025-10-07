import App from "./App";
import "./style.css";

const ELEMENT_ID = "apps-stake";

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, App);
}
