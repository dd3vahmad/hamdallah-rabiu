import {
  branding,
  consulting,
  copywriting,
  marketing,
  mastermind,
  messaging,
} from "@/assets";
import { IResource } from "@/components/resource";
import { IService } from "@/components/service";

export const services: IService[] = [
  {
    title: "Direct-Response Copywriting",
    banner: copywriting,
    description:
      "Words should do more than just sit on a page—they should sell. I write high-converting copy that grabs attention, builds trust, and drives action. Whether it’s a sales page, email sequence, ad copy, or website content, I’ll craft persuasive messaging that turns visitors into loyal customers.",
  },
  {
    title: "Sales Funnel Strategy & Optimization",
    banner: consulting,
    description:
      "A great product won’t sell itself—you need a strategic funnel that guides customers from interest to purchase. I help businesses map, build, and optimize sales funnels that attract leads, nurture them, and increase conversions. If your funnel isn’t converting, let’s fix that.",
  },
  {
    title: "Website & Landing Page Conversion Optimization",
    description:
      "Your website shouldn’t just look good—it should make you money. I audit and optimize your landing pages and website copy to ensure your message is clear, persuasive, and designed to convert. Small tweaks can lead to big results, and I’ll help you make the right ones.",
  },
  {
    title: "Email Marketing & Customer Retention",
    banner: messaging,
    description:
      "Email isn’t dead—it’s one of the most profitable marketing channels when done right. I create email campaigns that engage, nurture, and sell, turning one-time buyers into repeat customers. From welcome sequences to re-engagement campaigns, I’ll help you keep your audience hooked.",
  },
  {
    title: "Brand Messaging & Positioning Consulting",
    banner: branding,
    description:
      "Struggling to stand out? I help businesses craft a unique brand voice and messaging strategy that connects with the right audience. Whether you're launching a new brand or refining your positioning, I’ll help you develop messaging that resonates and sells.",
  },
  {
    title: "Social Media Ad Copy & Campaign Strategy",
    banner: marketing,
    description:
      "Stop wasting ad spend on copy that doesn’t convert. I’ll help you create high-converting social media ads that grab attention, engage your audience, and drive sales. From ad copywriting to campaign strategy, I’ll ensure your ads are optimized for maximum ROI.",
  },
  {
    title: "Lead Magnet & Content Strategy",
    banner: mastermind,
    description:
      "Attract the right leads with compelling lead magnets that convert. Whether it’s a free guide, checklist, or ebook, I’ll help you create content that offers real value, builds trust, and nurtures prospects into customers. From strategy to execution, I’ll help you create a content funnel that works.",
  },
];

export const resources: IResource[] = [
  {
    title: "The Ultimate Email Sequence Blueprint",
    description:
      "Struggling to turn subscribers into loyal customers? This step-by-step blueprint will show you how to craft email sequences that nurture leads, boost engagement, and increase sales. Get ready-to-use templates for welcome emails, abandoned cart sequences, and re-engagement campaigns.",
  },
  {
    title: "Customer Avatar Worksheet",
    description:
      "Want to sell more without guessing what your customers want? This easy-to-use worksheet will help you define your ideal customer’s pain points, desires, and buying triggers—so your messaging speaks directly to them. Download it and start attracting the right audience today!",
  },
  {
    title: "Social Media Ad Copy Cheat Sheet",
    description:
      "Stop wasting money on ads that don’t convert! This cheat sheet gives you proven ad copy formulas for Facebook, Instagram, and Google Ads—so you can write scroll-stopping ads that drive clicks and sales. Perfect for business owners who want results fast!",
  },
  {
    title: "Website Copy Audit Checklist",
    description:
      "Is your website copy costing you sales? Use this quick self-audit checklist to uncover weak spots in your headlines, calls-to-action, and messaging—so you can fix them fast and boost conversions. A must-have for any business owner!",
  },
  {
    title: "The Psychology of Persuasion in Copywriting (Mini eBook)",
    description:
      "What makes people say *yes*? This mini eBook breaks down the science of persuasion and how you can use it to influence buying decisions. Learn the psychology behind powerful copywriting and apply it to your business today!",
  },
];
