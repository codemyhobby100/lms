import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "EduSupport - Begin your journey to success today",
        template: `%s | Astra`
    },
    description: "Get the support to overcome student life challenges. Thrive academically and personally. Begin your journey to success today.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "EduSupport - Begin your journey to success today",
        description: "Get the support to overcome student life challenges. Thrive academically and personally. Begin your journey to success today.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@cmh",
        title: "EduSupport - Begin your journey to success today",
        description: "Get the support to overcome student life challenges. Thrive academically and personally. Begin your journey to success today.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://astra-app.vercel.app"),
};
