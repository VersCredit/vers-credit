import aboutUs from "./about";
import { disclaimer } from "./disclaimer";
import blog from "./blog";
import blogAuthor from "./blogAuthor";
import blogCategory from "./blogCategory";
import { blogCategoryPage } from "./blogCategoryPage";
import { calculator } from "./calculator";
import { calculatorPage } from "./calculatorPage";
import { contactUs } from "./contact-us";
import home from "./home";
import { privacyPolicy } from "./privacyPolicy";
import { settings } from "./settings";
import { tAndC } from "./tAndC";

export const singletons = [
  settings,
  home,
  blogCategoryPage,
  contactUs,
  calculatorPage,
  aboutUs,
  privacyPolicy,
  tAndC,
  disclaimer,
];
export const multiTypes = [calculator, blogCategory, blogAuthor, blog];
export const documents = [...singletons, ...multiTypes];
