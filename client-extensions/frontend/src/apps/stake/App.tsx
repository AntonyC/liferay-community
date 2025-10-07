import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClayIconSpriteContext } from "@clayui/icon";
import { Header } from "../components";

export default class App extends HTMLElement {
  connectedCallback() {
    createRoot(this).render(
      <BrowserRouter>
        <ClayIconSpriteContext.Provider value={Liferay.Icons.spritemap}>
          <div>aaaaabbb</div>
          <Header />
        </ClayIconSpriteContext.Provider>
      </BrowserRouter>
    );
  }
}
