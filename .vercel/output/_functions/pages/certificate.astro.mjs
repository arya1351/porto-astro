import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_m3KSG7no.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_Bvs3HE9G.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Certificate$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div class="flex flex-col justify-center mx-auto items-center"> <img src="./img/bg.png" alt="" class="rounded-2xl z-0 bg-cover min-h-24 object-scale-down transition-all ease-in delay-500"> <div class="text-nowrap flex-col md:flex-row lg:h-24 lg:w-24 w-16 h-16 rounded-2xl flex z-1 justify-center items-center gap-4 mt-2 sm:mt-4"> <div class="lg:p-6 md:p-6 p-4 bg-white dark:bg-blackone shadow-younggray dark:shadow-black shadow-md rounded-2xl"> <i class="text-blackone dark:text-white fa-solid fa-certificate fa-2xl"></i> </div> <div class="flex flex-col"> <h1 class="font-bold md:text-start text-nowrap lg:text-3xl md:text-2xl text-center text-xl text-blackone dark:text-white">
Certificate
</h1> <h2 class="lg:text-xl text-start text-lg text-nowrap max-[311px]:text-wrap text-blackone dark:text-white">
My Certificate
</h2> </div> </div> </div> <div class="w-full container min-h-max max-w-[768px] mx-auto max-[366px]:pt-4"> <div id="list" class="min-w-auto max-w-auto mx-12 my-12 md:my-12"> <div class="h-0.5 opacity-50 bg-younggray dark:bg-darkgray my-4"></div> <div id="projects-1" class="py-6 transition duration-800"> <img src="/img/certificate/bwauiux.jpg" alt="Buildwithangga Certificate" class="rounded-xl w-full"> <div class="px-2 py-2"> <h1 class="font-bold text-xl md:text-2xl text-blackone dark:text-white py-2">
"Certificate completition Learn UI/UX Design &
              Laravel11 : Website Booking Travel Online"
</h1> <p class="text-wrap text-darkgray dark:text-younggray">
Tech Stack : <i class="fa-brands fa-figma text-darkgray dark:text-younggray"></i> Figma | <i class="fa-brands fa-laravel text-darkgray dark:text-younggray"></i> Laravel | <i class="fa-solid fa-database text-darkgray dark:text-younggray"></i> MySQL
</p> <h1 class="text-2xl font-bold text-blackone dark:text-younggray"></h1> </div> </div> <div id="projects-2" class="py-6 transition duration-800"> <img src="/img/certificate/G2Academy.jpg" alt="G2 Academy ETL Certificate" class="rounded-xl w-full"> <div class="px-2 py-2"> <h1 class="font-bold text-xl md:text-2xl text-blackone dark:text-white py-2">
"Certificate competency of database transformation"
</h1> <p class="text-wrap text-darkgray dark:text-younggray">
Tech Stack : <i class="fa-brands fa-python text-darkgray dark:text-younggray"></i> Python | <i class="fa-solid fa-database text-darkgray dark:text-younggray"></i> PostgreSQL
</p> <h1 class="text-2xl font-bold text-blackone dark:text-younggray"></h1> </div> </div> <div id="projects-3" class="py-6 transition duration-800"> <img src="/img/certificate/msointer.jpg" alt="Microsoft Office Intermediate" class="rounded-xl w-full"> <div class="px-2 py-2"> <h1 class="font-bold text-xl md:text-2xl text-blackone dark:text-white py-2">
"Certificate completition Learn Intermediate Microsoft Office"
</h1> <p class="text-wrap text-darkgray dark:text-younggray">
Software : <i class="fa-brands fa-microsoft text-darkgray dark:text-younggray"></i> Excel
</p> <h1 class="text-2xl font-bold text-blackone dark:text-younggray"></h1> </div> </div> <div id="projects-4" class="py-6 transition duration-800"> <img src="/img/certificate/msobasic.jpg" alt="Microsoft Office basic" class="rounded-xl w-full"> <div class="px-2 py-2"> <h1 class="font-bold text-xl md:text-2xl text-blackone dark:text-white py-2">
"Certificate completition Learn Basic Microsoft Office"
</h1> <p class="text-wrap text-darkgray dark:text-younggray">
Software : <i class="fa-brands fa-microsoft text-darkgray dark:text-younggray"></i> Excel
</p> <h1 class="text-2xl font-bold text-blackone dark:text-younggray"></h1> </div> </div> </div> </div> </div>`;
}, "C:/astro/porto-app/src/layouts/Certificate.astro", void 0);

const $$Certificate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Certificate", $$Certificate$1, {})} ` })}`;
}, "C:/astro/porto-app/src/pages/certificate.astro", void 0);

const $$file = "C:/astro/porto-app/src/pages/certificate.astro";
const $$url = "/certificate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Certificate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
