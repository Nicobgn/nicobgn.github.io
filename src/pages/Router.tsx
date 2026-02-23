import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";
import Home from "./Home";
import Contact from "./Contact";
import { Layout } from "./Layout";

export default () => {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Layout>
          <Router>
            <Route path="/" component={Home} />

            <Route path="/contact" component={Contact} />
          </Router>
        </Layout>
      </ErrorBoundary>
    </LocationProvider>
  )
};
