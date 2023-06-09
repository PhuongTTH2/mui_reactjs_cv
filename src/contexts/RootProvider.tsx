import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import themes from "../themes";
import { MuiThemeProvider } from "@material-ui/core/styles";

interface RootProviderProps {
  children: ReactNode;
}

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <MuiThemeProvider theme={{ ...themes }}>{children}</MuiThemeProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default RootProvider;
