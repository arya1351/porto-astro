import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_DoxMPt-R.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_hdCoMmOD.mjs';
import 'clsx';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$ProjectTripin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div class="flex flex-col justify-center mx-auto items-center"> <img src="../img/bg.png" alt="" class="rounded-2xl z-0 bg-cover min-h-24 object-scale-down transition-all ease-in delay-500"> <div class="text-nowrap flex-col lg:h-24 lg:w-24 w-16 h-16 rounded-2xl flex z-1 justify-center items-center gap-4 mt-2 sm:mt-4"> <img src="../img/project/project_tripin/logo_tripin.png" alt="" class="lg:p-4 md:p-0.5 p-0.5 bg-white dark:bg-blackone shadow-xl rounded-2xl"> <h1 class="font-bold text- md:text-start lg:text-3xl md:text-2xl text-center text-lg text-blackone dark:text-white">
Tripin
</h1> </div> </div> <div class="w-full min-h-max max-w-[768px] mx-auto max-[366px]:pt-4"> <div id="list" class="min-w-auto max-w-auto mx-12 my-0 md:my-12"> <div class="w-full  min-h-max max-w-[768px] mx-auto max-[366px]:pt-4"> <div class="min-w-auto max-w-auto my-12 md:my-12"> <div class="h-0.5 opacity-50 bg-younggray dark:bg-darkgray my-4"></div> <h1 class="text-md font-bold text-blue-950 dark:text-white my-2">
Overview
</h1> <h1 class="text-sm text-blackone dark:text-white">
TRIPIN is an international travel package booking platform designed to make it easier for users to search, select, and book trips to various world destinations. The application offers an intuitive user experience with a modern and responsive design, ensuring a faster and more convenient booking process. </h1> <div class="w-full flex flex-col md:py-4 py-2 gap-2 md:flex-row justify-start md:justify-between"> <div class="w-full"> <h1 class="text-md font-bold text-blackone dark:text-white">
Software and Tools
</h1> <h1 class="text-sm text-blackone dark:text-white">
Figma
</h1> </div> <div class="w-full"> <h1 class="text-md font-bold text-blackone dark:text-white">
Prototype Link
</h1> <h1 class="text-sm text-blackone dark:text-white">
...
</h1> </div> </div> </div> </div> </div> </div> <div id="img" class="py-2 pb-8"> <img src="../img/project/project_tripin/1.png" alt="thumbnail"> </div> </div>`;
}, "C:/astro/porto-app/src/layouts/Details/Project_tripin.astro", void 0);

const $$Projecttwo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectTwo", $$ProjectTripin, {})} ` })}`;
}, "C:/astro/porto-app/src/pages/project/projecttwo.astro", void 0);

const $$file = "C:/astro/porto-app/src/pages/project/projecttwo.astro";
const $$url = "/project/projecttwo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projecttwo,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
