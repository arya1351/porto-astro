import { e as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_Dr9Eagc_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ProjectBwa, a as $$ProjectTripin } from '../chunks/Project_tripin_CM6u3OKS.mjs';
import { $ as $$Layout } from '../chunks/Layout_BQ-iGX-P.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div class="flex flex-col justify-center mx-auto items-center"> <img src="./img/bg.png" alt="" class="rounded-2xl z-0 bg-cover min-h-24 object-scale-down transition-all ease-in delay-500"> <div class="text-nowrap flex-col md:flex-row lg:h-24 lg:w-24 w-16 h-16 rounded-2xl flex z-1 justify-center items-center gap-4 mt-2 sm:mt-4"> <img src="./img/profile.jpeg" alt="" class="lg:p-1 md:p-0.5 p-0.5 bg-white shadow-xl rounded-2xl grayscale hover:grayscale-0 transition delay-100"> <div class="flex flex-col"> <h1 class="font-bold md:text-start lg:text-3xl md:text-2xl text-center text-xl text-blackone dark:text-white">
Arya Dwi Pradana
</h1> <h2 class="lg:text-xl text-start text-lg text-nowrap max-[420px]:text-wrap max-[420px]:text-center text-blackone dark:text-white">
Undergraduated Information System Student
</h2> </div> </div> </div> <div class="w-full container min-h-max max-w-[768px] mx-auto max-[420px]:pt-4"> <div id="list" class="min-w-auto max-w-auto mx-12 my-12 md:my-12"> <div class="h-0.5 opacity-50 bg-younggray dark:bg-darkgray my-4"></div> <p class="font-semibold text-sm md:text-md lg:text-lg  py-4 text-blackone dark:text-white">
Hi, My name is Arya Dwi Pradana, with 1+ year experience as a
              freelancer and a 3rd semester information system student. As a
              freelancer, I am required to have many skills and learn quickly in
              new things. I have a big vision for myself to always learn new
              things and never be afraid to learn from mistakes.
</p> <p class="font-regular text-sm md:text-md lg:text-lg text-darkgray dark:text-younggray">
Specialize in create website using PHP Laravel and now learn
              Javascript language using React framework. Has worked on various
              projects ranging from website creation, design to processing
              company data.
</p> <p class="font-semibold text-sm md:text-md lg:text-lg text-blackone dark:text-white pt-4">
Get in touch with me via
<a href="https://www.linkedin.com/in/arya-dwi-pradana-b80889318/"> <i class="underline decoration decoration-sky-700 hover:text-darkgray animate-pulse fa-brands fa-linkedin" style="color: #0077b5"></i></a>
or
<a href="mailto:aryadwiprad@gmail.com"><i class="underline text-blackone decoration-red-700 hover:text-darkgray animate-pulse fa-solid fa-envelope" style="color: #c5221f"></i></a>.
</p> <div class="h-0.5 opacity-50 bg-younggray dark:bg-darkgray my-4"></div> ${renderComponent($$result, "ProjectOne", $$ProjectBwa, {})} ${renderComponent($$result, "ProjectTwo", $$ProjectTripin, {})} </div> </div></div>`;
}, "C:/astro/porto-app/src/layouts/Home.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ` })}`;
}, "C:/astro/porto-app/src/pages/index.astro", void 0);

const $$file = "C:/astro/porto-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
