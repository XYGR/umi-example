export async function getInitialState() {
  const data = { isAdmin: false, hasRoutes: ['/', '/user', '/curriculum'] };
  return data;
}
