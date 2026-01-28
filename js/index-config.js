// Tailwind CSS Configuration for Index Page
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#137fec",
                "accent-cyan": "#00f5ff",
                "accent-green": "#39ff14",
                "background-light": "#f6f7f8",
                "background-dark": "#0b0e14",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "mono": ["Fira Code", "monospace"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
}
