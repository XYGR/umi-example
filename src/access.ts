export default function (initialState:any = {}) {
    const { isAdmin, hasRoutes = []}:{isAdmin:boolean,hasRoutes:Array<any>} = initialState;
    console.log(isAdmin,hasRoutes)
    return {
      // ...
      adminRouteFilter: () => isAdmin, // 只有管理员可访问
      normalRouteFilter: ({path}:{path:string}) => hasRoutes.includes(path), // initialState 中包含了的路由才有权限访问
    };
  }