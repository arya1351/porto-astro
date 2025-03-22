import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_SXrB9bHr.mjs';
import { manifest } from './manifest_QUFqQJ9H.mjs';

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
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "913b3558-dfc2-4ae1-be0d-2fa54a27cc03",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
