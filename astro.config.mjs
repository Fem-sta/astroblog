// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    site: 'https://astro-blog-cip.netlify.app',
    integrations: [icon({
        include:{
            mdi:["*"],
        },
      
    }), mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'nord' }, 
    }), sitemap(), react(), partytown()],

    vite: {                            
    plugins: [tailwindcss()],
    },
});