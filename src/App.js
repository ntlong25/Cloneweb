import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./route";

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Routes>
          {routes().map(({ path, element, children }, index) => {
            return (
              <Route key={index} path={path} element={element}>
                {children &&
                  children.map((child, childIndex) => {
                    return (
                      <Route
                        key={"route" + childIndex}
                        path={child.path}
                        element={child.element}
                      />
                    );
                  })}
              </Route>
            );
          })}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
