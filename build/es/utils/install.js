function r(o) {
  const n = o;
  return n.install = (e) => {
    const t = o.name;
    if (!t)
      throw new Error("Component name must be provided!");
    e.component(t, n);
  }, n;
}
export {
  r as withInstall
};
