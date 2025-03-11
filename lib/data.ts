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
    title: "Copywriting",
    // banner: copywriting,
    description:
      "Whether it's landing page copy, website copy, email campaigns, or ad copy, I'll help you communicate your value proposition in a way that turns readers into customers.",
  },
  {
    title: "Marketing",
    // banner: marketing,
    description:
      "Boost your brand and grow your business with smart marketing that works. Strategies that'll grow your online presence and attract customers.",
  },
  {
    title: "Branding",
    // banner: branding,
    description:
      "Your brand is more than just a logo. It's the story you tell, the experience you create, and the relationships you build. Let's create a brand that resonates with your audience.",
  },
  {
    title: "Consulting",
    // banner: consulting,
    description:
      "Get expert advice on your marketing strategy, copywriting, and branding. I'll help you identify your goals, create a plan and guide you through the process.",
  },
  {
    title: "Brand Messaging",
    // banner: messaging,
    description:
      "Your brand messaging is the foundation of your marketing. I'll help you craft a message that resonates with your audience and sets you apart from the competition.",
  },
  {
    title: "The Copywriter's Mastermind",
    // banner: mastermind,
    description:
      "Unlock persuasive writing secrets to drive business success. Master customer psychology and craft irresistible offers.",
  },
];

export const resources: IResource[] = [
  {
    title: "Understanding Market Sophistication and Awareness Levels",
    // banner: copywriting,
    description:
      "Your marketing campaign will keep falling if you don't know this powerful information. And no matter how powerful your marketing is, this must be the bedrock.",
  },
  {
    title:
      "The Power of Personalization: Tailoring Your Message (With Infographics)",
    // banner: marketing,
    description:
      "A visually engaging guide explaining the impact of personalization in marketing and how to implement it effectively.",
  },
  {
    title: "The Direct-Response Copywriting Checklist (Downloadable Checklist)",
    // banner: branding,
    description:
      "A practical checklist for ensuring all essential elements are included in direct-response copy, from headline to call-to-action.",
  },
  {
    title: "Crafting Irresistible Headlines: A Step-by-Step Approach",
    // banner: consulting,
    description:
      "An easy-to-understand guide exploring key psychological triggers used in effective copywriting.",
  },
  {
    title:
      "Mastering Persuasion: Key Psychological Secrets That Fuel Consumer Action",
    // banner: messaging,
    description:
      "An easy-to-understand guide exploring key psychological triggers used in effective copywriting.",
  },
  {
    title: "Decoding Consumer Behavior: Insights for Marketers",
    // banner: mastermind,
    description:
      "A detailed guide discussing the latest trends in consumer behavior and how to leverage them in marketing strategies.",
  },
];
