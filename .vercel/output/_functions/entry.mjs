import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_BoD9uEDN.mjs';
import { manifest } from './manifest_DPPyHRze.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/certificate.astro.mjs');
const _page2 = () => import('./pages/project/projectone.astro.mjs');
const _page3 = () => import('./pages/project/projecttwo.astro.mjs');
const _page4 = () => import('./pages/project.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/certificate.astro", _page1],
    ["src/pages/project/projectone.astro", _page2],
    ["src/pages/project/projecttwo.astro", _page3],
    ["src/pages/project.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6569e06b-dcfd-408d-8fca-35b93c1dddff",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
