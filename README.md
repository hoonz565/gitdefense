# Git Defense 🛡️

Turn your GitHub & GitLab contributions into a formidable tower defense fortress.

Git Defense takes a username, scans **GitHub** or **GitLab** for your 365-day contribution history, and transforms your coding activity into a fully interactive, terminal-styled tower defense game. Defend your server base against incoming threats using the very code you wrote!

![Git Defense Demo](./public/demo.png)

## 🎮 Features

- **Gamified Activity:** Watch as your daily commits become defensive walls. Level 1-4 commits correspond to walls of increasing durability (from frail wooden fences to impenetrable titanium bunkers).
- **Multi-Platform Support:** Works seamlessly with both GitHub and GitLab.
- **Terminal Aesthetics:** Clean, minimalist, dark-mode UI inspired by hacker consoles and retro interfaces.
- **Physics Engine:** Powered by smooth animations (Framer Motion) to simulate enemy attacks and wall destruction.
- **Interactive Gameplay:** Watch the battle unfold. Will your coding streak be enough to stop the tank and save the base?
- **Share Your Fortress:** Generate a clean, shareable link (e.g., `gitdefense.com/username`) to challenge friends and see whose codebase is the strongest.

## 🚀 Usage

1. Enter a GitHub or GitLab username using the terminal prompt:
   ```bash
   $ gitdefense fetch <username>
   ```
2. Press Enter - the app will fetch your 52-week contribution data.

3. Watch the invasion begin!
Tip: Want to force a specific platform? Use the -p flag:
    ```bash
    $ gitdefense fetch username -p gitlab
    ```

## 🛠 Tech Stack
- **Frontend**: React (Vite), Tailwind CSS
- **Game Engine & Animations**: Framer Motion
- **Backend (Proxy API)**: Vercel Serverless Functions (cheerio for GitHub, native fetch for GitLab)
- **Icons**: Lucide React

## 📝 Deployment
```bash
# Install dependencies
npm install

# Run the development server (Uses Vercel CLI to run both React and Serverless functions locally)
vercel dev
```
## 📜 License
MIT License.
Core engine and UI architecture inspired by [GitMusic](https://github.com/niyamax/gitmusic.git).