import { Navigate } from "react-router-dom";
import { categories } from "../init/category";
export const routerCategories = () =>
  categories.map((item, index) => {
    return {
      key: index,
      name: item.name,
      path: `/${item.pathName}`,
      element: item.component,
      children:
        item?.children?.map((child, index) => {
          return {
            key: `child${index}`,
            name: child.name,
            path: child.pathName,
            element: child.component,
          };
        }) || null,
    };
  });
export const routerDefault = [
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/",
    element: <Navigate to="/trang-chu" replace />,
  },
];

export const routes = () => {
  const _routerCategories = routerCategories();
  const _routerDefault = routerDefault;
  return [..._routerCategories, ..._routerDefault];
};
