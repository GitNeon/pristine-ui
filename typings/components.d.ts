declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PriButton: (typeof import("../packages/index"))["PriButton"];
  }
}
