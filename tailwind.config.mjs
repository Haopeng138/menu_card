/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                // Custom theme colors
                light: {
                    background: "#F4F4F4",
                    text: "#333333",
                    primary: "#A3353E",
                    secondary: "#666666",
                },
                dark: {
                    background: "#1A1A1A",
                    text: "#E0E0E0",
                    primary: "#A3353E",
                    secondary: "#A0A0A0",
                },
            },
        },
    },
    plugins: [],
};
