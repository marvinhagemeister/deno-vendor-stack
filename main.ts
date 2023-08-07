import { h } from "preact";
import { renderToString } from "preact-render-to-string";

const invalid = {} as any;
renderToString(h(invalid, null));
