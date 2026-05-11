import type { SocialIconKey } from "@/types/social";

export default function SocialIcon({ iconKey }: { iconKey: SocialIconKey }) {
  switch (iconKey) {
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-1.92V15.3a5.3 5.3 0 1 1-4.58-5.24v2.73a2.59 2.59 0 1 0 1.86 2.48V2h2.72a4.84 4.84 0 0 0 3.77 4.7v-.01Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm8.5 1.8h-8.5A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95ZM12 7.6A4.4 4.4 0 1 1 7.6 12 4.4 4.4 0 0 1 12 7.6Zm0 1.8A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4Zm4.9-2.2a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.2H8v3h2.4v8h3.1Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.26L6.64 22H3.5l7.23-8.27L1 2h6.25l4.32 5.7L18.9 2Zm-1.07 18h1.69L6.33 3.9H4.52L17.83 20Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1A31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
        </svg>
      );
  }
}
