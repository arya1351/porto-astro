import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_DoxMPt-R.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BEEfixyN.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/astro/porto-app/","cacheDir":"file:///C:/astro/porto-app/node_modules/.astro/","outDir":"file:///C:/astro/porto-app/dist/","srcDir":"file:///C:/astro/porto-app/src/","publicDir":"file:///C:/astro/porto-app/public/","buildClientDir":"file:///C:/astro/porto-app/dist/client/","buildServerDir":"file:///C:/astro/porto-app/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificate.BFJZM0G5.css"}],"routeData":{"route":"/certificate","isIndex":false,"type":"page","pattern":"^\\/certificate\\/?$","segments":[[{"content":"certificate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificate.astro","pathname":"/certificate","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificate.BFJZM0G5.css"}],"routeData":{"route":"/project/projectone","isIndex":false,"type":"page","pattern":"^\\/project\\/projectone\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}],[{"content":"projectone","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/project/projectone.astro","pathname":"/project/projectone","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificate.BFJZM0G5.css"}],"routeData":{"route":"/project/projecttwo","isIndex":false,"type":"page","pattern":"^\\/project\\/projecttwo\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}],[{"content":"projecttwo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/project/projecttwo.astro","pathname":"/project/projecttwo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificate.BFJZM0G5.css"}],"routeData":{"route":"/project","isIndex":false,"type":"page","pattern":"^\\/project\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/project.astro","pathname":"/project","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificate.BFJZM0G5.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/astro/porto-app/src/pages/certificate.astro",{"propagation":"none","containsHead":true}],["C:/astro/porto-app/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/astro/porto-app/src/pages/project.astro",{"propagation":"none","containsHead":true}],["C:/astro/porto-app/src/pages/project/projectone.astro",{"propagation":"none","containsHead":true}],["C:/astro/porto-app/src/pages/project/projecttwo.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/certificate@_@astro":"pages/certificate.astro.mjs","\u0000@astro-page:src/pages/project/projectone@_@astro":"pages/project/projectone.astro.mjs","\u0000@astro-page:src/pages/project/projecttwo@_@astro":"pages/project/projecttwo.astro.mjs","\u0000@astro-page:src/pages/project@_@astro":"pages/project.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/astro/porto-app/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CBcacgZB.mjs","\u0000@astrojs-manifest":"manifest_DPPyHRze.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/certificate.BFJZM0G5.css","/favicon.svg","/logo-white.png","/logo.png","/img/bg.png","/img/logo-white.png","/img/logo2.png","/img/profile.jpeg","/img/sertif.png","/js/app.js","/js/darkmode.js","/img/certificate/bwauiux.jpg","/img/certificate/G2Academy.jpg","/img/certificate/msobasic.jpg","/img/certificate/msointer.jpg","/img/project/project_bwa/1.png","/img/project/project_bwa/2.png","/img/project/project_bwa/3.png","/img/project/project_bwa/4.png","/img/project/project_bwa/5.png","/img/project/project_bwa/logo-bwa.svg","/img/project/project_tripin/1.png","/img/project/project_tripin/logo_tripin.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"l+GhGx7y2XceVqJGmDWo4pS4LbFWXzpufZPp/jP3o84="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
