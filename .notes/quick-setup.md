# One-liner to create everything

`mkdir chatflowai-svelte && cd chatflowai-svelte && mkdir -p {public,static/{images,fonts,icons},src/{components/{ui,layout,sections,widgets},stores,utils,styles,lib,test},.github/workflows,docs,scripts} && touch src/components/ui/{Button.svelte,Input.svelte,Badge.svelte,Card.svelte,Modal.svelte,Toast.svelte} && touch src/components/layout/{Header.svelte,Footer.svelte,Navigation.svelte,Layout.svelte} && touch src/components/sections/{Hero.svelte,Stats.svelte,Features.svelte,BonusStack.svelte,Guarantees.svelte,FinalCTA.svelte,Testimonials.svelte} && touch src/components/widgets/{SocialProof.svelte,UrgencyTimer.svelte,ValueCalculator.svelte,ParticleSystem.svelte,ScrollProgress.svelte} && touch src/stores/{ui.js,form.js,analytics.js,theme.js} && touch src/utils/{animations.js,formatters.js,constants.js,validation.js,api.js} && touch src/styles/{global.scss,variables.scss,mixins.scss,components.scss,animations.scss} && touch src/lib/{api.js,validation.js,analytics.js,storage.js} && touch src/test/{setup.js,helpers.js} && touch src/{App.svelte,main.js,app.html} && touch public/{index.html,favicon.ico,robots.txt,sitemap.xml,manifest.json} && touch {package.json,vite.config.js,svelte.config.js,tailwind.config.js,postcss.config.js,jsconfig.json,.env.example,.env.local,.gitignore,README.md,CHANGELOG.md,.eslintrc.js,.prettierrc,vitest.config.js,playwright.config.js} && echo "✅ Project structure created!"`


# Create the main project directory
mkdir chatflowai-svelte && cd chatflowai-svelte

# Create all directories in one command
mkdir -p {public,static/{images,fonts,icons},src/{components/{ui,layout,sections,widgets},stores,utils,styles,lib,test}}

# Create all component files
touch src/components/ui/{Button.svelte,Input.svelte,Badge.svelte,Card.svelte,Modal.svelte,Toast.svelte}

touch src/components/layout/{Header.svelte,Footer.svelte,Navigation.svelte,Layout.svelte}

touch src/components/sections/{Hero.svelte,Stats.svelte,Features.svelte,BonusStack.svelte,Guarantees.svelte,FinalCTA.svelte,Testimonials.svelte}

touch src/components/widgets/{SocialProof.svelte,UrgencyTimer.svelte,ValueCalculator.svelte,ParticleSystem.svelte,ScrollProgress.svelte}

# Create store files
touch src/stores/{ui.js,form.js,analytics.js,theme.js}

# Create utility files
touch src/utils/{animations.js,formatters.js,constants.js,validation.js,api.js}

# Create style files
touch src/styles/{global.scss,variables.scss,mixins.scss,components.scss,animations.scss}

# Create lib files
touch src/lib/{api.js,validation.js,analytics.js,storage.js}

# Create test files
touch src/test/{setup.js,helpers.js}

# Create main app files
touch src/{App.svelte,main.js,app.html}

# Create public files
touch public/{index.html,favicon.ico,robots.txt,sitemap.xml,manifest.json}

# Create static asset placeholder files
touch static/images/{logo.svg,hero-bg.jpg,feature-1.jpg,feature-2.jpg,feature-3.jpg}
touch static/fonts/{inter.woff2,inter-bold.woff2}
touch static/icons/{icon-192.png,icon-512.png}

# Create configuration files
touch {package.json,vite.config.js,svelte.config.js,tailwind.config.js,postcss.config.js,jsconfig.json}

# Create development and deployment files
touch {.env.example,.env.local,.gitignore,README.md,CHANGELOG.md}

# Create additional config files
touch {.eslintrc.js,.prettierrc,vitest.config.js,playwright.config.js}

# Create GitHub workflow directory and files (optional)
mkdir -p .github/workflows
touch .github/workflows/{ci.yml,deploy.yml}

# Create documentation directory
mkdir -p docs
touch docs/{SETUP.md,DEPLOYMENT.md,COMPONENTS.md,API.md}

# Make scripts directory for build/deployment scripts
mkdir -p scripts
touch scripts/{build.sh,deploy.sh,test.sh}

echo "✅ ChatFlowAI Svelte project structure created successfully!"
echo "📁 Total directories created: $(find . -type d | wc -l)"
echo "📄 Total files created: $(find . -type f | wc -l)"
echo ""
echo "🚀 Next steps:"
echo "1. cd chatflowai-svelte"
echo "2. npm init -y"
echo "3. npm install svelte @sveltejs/vite-plugin-svelte vite"
echo "4. Copy the package.json content and run: npm install"
echo "5. npm run dev"