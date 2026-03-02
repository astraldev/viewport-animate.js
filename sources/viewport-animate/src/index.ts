import { ViewportAnimate } from "./viewport-animate";
export * from "./animation-properties";
export * from "./viewport-animate";

export default ViewportAnimate;

declare global {
  interface Window {
    ViewportAnimate: typeof ViewportAnimate;
  }
}
