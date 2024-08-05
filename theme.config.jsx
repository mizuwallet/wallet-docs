import { useRouter } from "next/router";
import { useConfig, useTheme } from "nextra-theme-docs";

import LogoColor from "./assets/mizu_logo_color.png";
import LogoWhiteColor from "./assets/mizu_logo_white.png";
import FaviconImage from "./assets/favicon.png";

const DescriptionContent =
  "MizuWallet - The Seamless Next-Gen Wallet on Aptos.";
const SocialImage = "https://assets.mz.xyz/static/images/mizu_icon.png";

export default {
  logo: () => {
    const theme = useTheme();
    return (
      <img
        src={
          theme.resolvedTheme === "light" ? LogoColor.src : LogoWhiteColor.src
        }
        style={{ width: "auto", height: "32px" }}
      />
    );
  },
  docsRepositoryBase: "https://github.com/mizuwallet/wallet-docs/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – MizuWallet",
      };
    }
  },
  head: () => {
    const { title } = useConfig();
    const { route } = useRouter();

    return (
      <>
        <meta name='msapplication-TileColor' content='#fff' />
        <meta name='theme-color' content='#fff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta name='description' content={DescriptionContent} />
        <meta name='og:description' content={DescriptionContent} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={SocialImage} />
        <meta name='twitter:site:domain' content='mizu.io' />
        <meta name='twitter:url' content='https://docs.mizu.io' />

        <meta
          name='og:title'
          content={title ? title + " – MizuWallet" : "MizuWallet"}
        />
        <meta name='og:image' content={SocialImage} />
        <meta name='apple-mobile-web-app-title' content='MizuWallet' />
        <link rel='icon' href={FaviconImage.src} type='image/png' />
      </>
    );
  },
  project: {
    link: "https://github.com/mizuwallet/wallet-docs",
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className='cursor-default'>{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className='flex w-full flex-col items-center sm:items-start'>
        <p className='mt-6 text-xs'>
          © {new Date().getFullYear()} Mizu. All Rights Reserved.
        </p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
};
