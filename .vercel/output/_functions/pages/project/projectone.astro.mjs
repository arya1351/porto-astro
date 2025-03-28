import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_DoxMPt-R.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_hdCoMmOD.mjs';
import 'clsx';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$ProjectBwa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div class="flex flex-col justify-center mx-auto items-center"> <img src="../img/bg.png" alt="" class="rounded-2xl z-0 bg-cover min-h-24 object-scale-down transition-all ease-in delay-500"> <div class="text-nowrap flex-col lg:h-24 lg:w-24 w-16 h-16 rounded-2xl flex z-1 justify-center items-center gap-4 mt-2 sm:mt-4"> <img src="../img/project/project_bwa/logo-bwa.svg" alt="" class="lg:p-4 md:p-0.5 p-0.5 bg-white dark:bg-blackone shadow-xl rounded-2xl"> <h1 class="font-bold text- md:text-start lg:text-3xl md:text-2xl text-center text-lg text-blackone dark:text-white">
Booking Travel Project App
</h1> </div> </div> <div class="w-full min-h-max max-w-[768px] mx-auto max-[366px]:pt-4"> <div id="list" class="min-w-auto max-w-auto mx-12 my-0 md:my-12"> <div class="w-full  min-h-max max-w-[768px] mx-auto max-[366px]:pt-4"> <div class="min-w-auto max-w-auto my-12 md:my-12"> <div class="h-0.5 opacity-50 bg-younggray dark:bg-darkgray my-4"></div> <h1 class="text-md font-bold text-blue-950 dark:text-white my-2">
Overview
</h1> <h1 class="text-sm text-blackone dark:text-white">
This Booking Travel App application is a tour package booking platform that makes it easy for users to search, select, and book travel packages according to their needs. This application is equipped with tour package management features for admins, package bookings for users, and a separate authentication system between admins and users. This project was built as part of developing web development skills with a focus on applying the Laravel framework and modern styling using Tailwind CSS.
</h1> <div class="w-full flex flex-col md:py-4 py-2 gap-2 md:flex-row justify-start md:justify-between"> <div class="w-full"> <h1 class="text-md font-bold text-blackone dark:text-white">
Software and Tools
</h1> <h1 class="text-sm text-blackone dark:text-white">
Laravel, Tailwind CSS, MySQL, Laravel Breeze, Figma, Whimsical
</h1> </div> <div class="w-full"> <h1 class="text-md font-bold text-blackone dark:text-white">
Scope
</h1> <h1 class="text-sm text-blackone dark:text-white">
Package management, reservations, user authentication
</h1> </div> </div> </div> </div> </div> </div> <div id="img" class="py-2 pb-8"> <img src="../img/project/project_bwa/1.png" alt="thumbnail"> <img src="../img/project/project_bwa/2.png" alt="thumbnail"> <img src="../img/project/project_bwa/3.png" alt="thumbnail"> <img src="../img/project/project_bwa/4.png" alt="thumbnail"> <img src="../img/project/project_bwa/5.png" alt="thumbnail"> </div> </div>`;
}, "C:/astro/porto-app/src/layouts/Details/Project_bwa.astro", void 0);

const $$Projectone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectOne", $$ProjectBwa, {})} ` })}`;
}, "C:/astro/porto-app/src/pages/project/projectone.astro", void 0);

const $$file = "C:/astro/porto-app/src/pages/project/projectone.astro";
const $$url = "/project/projectone";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projectone,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
