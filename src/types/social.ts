export type SocialIconKey =
  | "tiktok"
  | "instagram"
  | "facebook"
  | "twitter"
  | "youtube";

export interface SocialLink {
  key: SocialIconKey;
  label: string;
  href: string;
  variantClass: string;
}
