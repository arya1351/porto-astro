import { c as createComponent, m as maybeRenderHead, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_DoxMPt-R.mjs';
import 'kleur/colors';
import { $ as $$ProjectBwa, a as $$ProjectTripin } from '../chunks/Project_tripin_C9CT0yMr.mjs';
import { $ as $$Layout } from '../chunks/Layout_hdCoMmOD.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Project$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div class="flex flex-col justify-center mx-auto items-center"> <img src="../img/bg.png" alt="" class="rounded-2xl z-0 bg-cover min-h-24 object-scale-down transition-all ease-in delay-500"> <div class="text-nowrap flex-col md:flex-row lg:h-24 lg:w-24 w-16 h-16 rounded-2xl flex z-1 justify-center items-center gap-4 mt-2 sm:mt-4"> <div class="lg:p-6 md:p-6 p-4 bg-white dark:bg-blackone shadow-younggray dark:shadow-black shadow-md rounded-2xl"> <i class="text-blackone dark:text-white fa-solid fa-list-check fa-2xl"></i> </div> <div class="flex flex-col"> <h1 class="font-bold md:text-start text-nowrap lg:text-3xl md:text-2xl text-center text-xl text-blackone dark:text-white">
Project
</h1> <h2 class="lg:text-xl text-center md:text-start text-lg text-nowrap max-[311px]:text-wrap text-blackone dark:text-white">
My Featured Project
</h2> </div> </div> </div> <div class="w-full container min-h-max max-w-[768px] mx-auto max-[366px]:pt-4"> <div id="list" class="min-w-auto max-w-auto mx-12 my-12 md:my-12"> <div class="h-0.5 opacity-50 bg-younggray dark:bg-darkgray my-4"></div> ${renderComponent($$result, "ProjectOne", $$ProjectBwa, {})} ${renderComponent($$result, "ProjectTwo", $$ProjectTripin, {})} </div> </div> </div>`;
}, "C:/astro/porto-app/src/layouts/Project.astro", void 0);

const $$Project = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Projects", $$Project$1, {})} ` })}`;
}, "C:/astro/porto-app/src/pages/project.astro", void 0);

const $$file = "C:/astro/porto-app/src/pages/project.astro";
const $$url = "/project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Project,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
