import { type PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { ClayIconSpriteContext } from "@clayui/icon";

interface Props {
  name?: string;
}

export const CxContainer = ({
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <div {...rest}>
      <BrowserRouter>
        <ClayIconSpriteContext.Provider value={Liferay.Icons.spritemap}>
          {children}
        </ClayIconSpriteContext.Provider>
      </BrowserRouter>
    </div>
  );
};
