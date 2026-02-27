import { LangProvider } from "./contexts/lang";
import Home from "./pages/Home";
import { Layout } from "./pages/Layout";

export const App = () => {
  return (
    <LangProvider>
      <Layout>
        <Home />
      </Layout>
    </LangProvider>
  )
};