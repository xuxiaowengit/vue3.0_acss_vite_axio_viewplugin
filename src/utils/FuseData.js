import path from 'path-browserify';
export const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
  let res = [];
  for (const route of routes) {
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle],
    };
    if (route.meta && route.meta.title) {
      data.title = [route.meta.title];
      res.push(data);
    }
    if (route.children) {
      const tempRoutes = generateRoutes(route.children, data.path, data.title);
      if (tempRoutes.length >= 1) {
        res = [...res, ...tempRoutes];
      }
    }
  }
  return res;
};
