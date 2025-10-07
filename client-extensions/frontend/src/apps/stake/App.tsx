import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClayIconSpriteContext } from "@clayui/icon";

export default class App extends HTMLElement {
  connectedCallback() {
    createRoot(this).render(
      <BrowserRouter>
        <ClayIconSpriteContext.Provider value={Liferay.Icons.spritemap}>
          <div>aaaaabbb</div>
        </ClayIconSpriteContext.Provider>
      </BrowserRouter>
    );
  }
}
