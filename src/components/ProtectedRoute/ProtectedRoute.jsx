// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import App from "../App/App";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   // Replace this with your actual logged-in check
//   const loggedIn = true; // Replace with actual logic

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         loggedIn ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}

export default ProtectedRoute;
