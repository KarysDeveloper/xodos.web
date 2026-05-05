/* ═══════════════════════════════════════════════════════════════
XoDos Landing Page — GitHub API Module
Karys Developer (KD) — Dynamic data from xodiosx/XoDos repo
═══════════════════════════════════════════════════════════════ */

const XoDosAPI = {
  REPO: 'xodiosx/XoDos',
  API_BASE: 'https://api.github.com',
  CACHE_KEY: 'xodos_github_cache',
  CACHE_TTL: 3600000, // 1 hora en ms

  // ── KNOWN CONTRIBUTORS (manual — no aparecen en la API de contributors del repo) ──
  // Estos contributors trabajan en otros repos, Telegram, diseño, etc.
  KNOWN_CONTRIBUTORS: [
    {
      login: 'DesarrolladorPrimary',
      avatarUrl: 'https://avatars.githubusercontent.com/DesarrolladorPrimary',
      contributions: 100,
      htmlUrl: 'https://github.com/DesarrolladorPrimary',
    },
    {
      login: 'Mondo67244',
      avatarUrl: 'https://avatars.githubusercontent.com/Mondo67244',
      contributions: 50,
      htmlUrl: 'https://github.com/Mondo67244',
    },
    {
      login: 'jiaxinchen-max',
      avatarUrl: 'https://avatars.githubusercontent.com/jiaxinchen-max',
      contributions: 30,
      htmlUrl: 'https://github.com/jiaxinchen-max',
    },
    {
      login: 'Snap888',
      avatarUrl: 'https://avatars.githubusercontent.com/Snap888',
      contributions: 15,
      htmlUrl: 'https://github.com/Snap888',
    },
  ],

  // ── BOT ACCOUNTS (se filtran de la API de contributors) ──
  BOT_ACCOUNTS: ['dependabot[bot]', 'github-actions[bot]', 'renovate[bot]'],

  // ── COUNTRY MAP (manual, para contributors conocidos) ──
  COUNTRY_MAP: {
    'xodiosx': '🇾🇪 Yemen',
    'DesarrolladorPrimary': '🇨🇴 Colombia',
    'Mondo67244': '🇲🇫 France',
    'jiaxinchen-max': '🇨🇳 China',
    'Snap888': '🇷🇺 Russia',
  },

  // ── SOCIAL LINKS (manual, para contributors conocidos) ──
  SOCIAL_MAP: {
    'xodiosx': [
      { url: 'https://github.com/xodiosx', icon: 'fab fa-github' },
      { url: 'https://x.com/XAleiwi', icon: 'fab fa-x-twitter' },
      { url: 'https://youtube.com/@xodmods5082', icon: 'fab fa-youtube' },
    ],
    'DesarrolladorPrimary': [
      { url: 'https://github.com/DesarrolladorPrimary', icon: 'fab fa-github' },
    ],
    'Mondo67244': [
      { url: 'https://github.com/Mondo67244', icon: 'fab fa-github' },
    ],
    'jiaxinchen-max': [
      { url: 'https://github.com/jiaxinchen-max', icon: 'fab fa-github' },
    ],
    'Snap888': [
      { url: 'https://github.com/Snap888', icon: 'fab fa-github' },
    ],
  },

  // ── ROLE MAP (manual, para contributors conocidos) ──
  ROLE_MAP: {
    'xodiosx': '👑 Lead',
    'DesarrolladorPrimary': '⚔️ Dev',
    'Mondo67244': '⚔️ Dev',
    'jiaxinchen-max': '⚔️ Dev',
    'Snap888': '⚔️ Dev',
  },

  // ── STATIC CONTRIBUTORS (sin cuenta de GitHub verificable en el repo) ──
  STATIC_CONTRIBUTORS: [
    { name: 'Aurora0y', initial: 'A', role: '⚔️ Dev', flag: '🇧🇷 Brazil', note: 'Telegram' },
    { name: 'Chest1902', initial: 'C', role: '⚔️ Dev', flag: '🇧🇩 Bangladesh', note: 'Telegram' },
    { name: 'xl_v6 / ashen', initial: '✦', role: '🎨 Art', flag: '🇮🇶 Iraq', note: 'Logo Designer' },
  ],

  // ── FALLBACK DATA (si la API falla) ──
  FALLBACK: {
    stars: 645,
    forks: 52,
    downloads: 267851,
    releases: [
      {
        tagName: '1.0.3-link',
        name: 'XoDos – Rebirth Edition',
        date: '2025-12-08T00:00:00Z',
        body: 'Happy Holidays & Happy Birthday XoDos! 🎂 The rebirth of XoDos with a completely new architecture.',
        htmlUrl: 'https://github.com/xodiosx/XoDos/releases/tag/1.0.3-link',
        downloads: 0,
        isLatest: true,
        isPrerelease: true,
      },
      {
        tagName: 'v6.0.0+c050ebd',
        name: 'Release v6.0.0_Final',
        date: '2025-11-09T00:00:00Z',
        body: 'Last update before development pause. Complete stable release with all features working.',
        htmlUrl: 'https://github.com/xodiosx/XoDos/releases/tag/v6.0.0%2Bc050ebd',
        downloads: 14096,
        isLatest: false,
        isPrerelease: true,
      },
      {
        tagName: 'v6.0.0',
        name: 'XoDos v6.0.0',
        date: '2025-10-28T00:00:00Z',
        body: 'Massive update packed with fixes, optimizations, and incredible new features. The definitive XoDos experience.',
        htmlUrl: 'https://github.com/xodiosx/XoDos/releases/tag/v6.0.0',
        downloads: 153823,
        isLatest: false,
        isPrerelease: false,
      },
      {
        tagName: '5.9.0',
        name: 'XoDos 5.9.0',
        date: '2025-09-07T00:00:00Z',
        body: 'Polished UI, powerful new under-the-hood improvements. Major update for the emulator core.',
        htmlUrl: 'https://github.com/xodiosx/XoDos/releases/tag/5.9.0',
        downloads: 96757,
        isLatest: false,
        isPrerelease: false,
      },
    ],
    contributors: [
      { login: 'xodiosx', avatarUrl: 'https://avatars.githubusercontent.com/u/59384112?v=4', contributions: 284, htmlUrl: 'https://github.com/xodiosx' },
      { login: 'DesarrolladorPrimary', avatarUrl: 'https://avatars.githubusercontent.com/DesarrolladorPrimary', contributions: 100, htmlUrl: 'https://github.com/DesarrolladorPrimary' },
      { login: 'Mondo67244', avatarUrl: 'https://avatars.githubusercontent.com/Mondo67244', contributions: 50, htmlUrl: 'https://github.com/Mondo67244' },
      { login: 'jiaxinchen-max', avatarUrl: 'https://avatars.githubusercontent.com/jiaxinchen-max', contributions: 30, htmlUrl: 'https://github.com/jiaxinchen-max' },
      { login: 'Snap888', avatarUrl: 'https://avatars.githubusercontent.com/Snap888', contributions: 15, htmlUrl: 'https://github.com/Snap888' },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MAIN INIT
  // ══════════════════════════════════════════════════════════
  async init() {
    // 1. Intentar leer cache
    const cached = this.getCachedData();
    if (cached) {
      console.log('[XoDosAPI] Using cached data');
      return cached;
    }

    // 2. Fetch desde GitHub API
    try {
      console.log('[XoDosAPI] Fetching from GitHub API...');
      const [repoData, releases, apiContributors] = await Promise.all([
        this.fetchRepoData(),
        this.fetchReleases(),
        this.fetchContributors(),
      ]);

      // Merge API contributors with known manual contributors
      const contributors = this.mergeContributors(apiContributors);

      const totalDownloads = this.getTotalDownloads(releases);

      const data = {
        stars: repoData.stars,
        forks: repoData.forks,
        downloads: totalDownloads,
        releases: releases,
        contributors: contributors,
      };

      // 3. Guardar en cache
      this.setCachedData(data);
      console.log('[XoDosAPI] Data fetched and cached successfully');
      return data;
    } catch (err) {
      console.warn('[XoDosAPI] API fetch failed, using fallback:', err.message);
      return this.FALLBACK;
    }
  },

  // ══════════════════════════════════════════════════════════
  // FETCH METHODS
  // ══════════════════════════════════════════════════════════
  async fetchRepoData() {
    const res = await fetch(`${this.API_BASE}/repos/${this.REPO}`);
    if (!res.ok) throw new Error(`Repo API: ${res.status} ${res.statusText}`);
    const data = await res.json();
    return {
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      watchers: data.subscribers_count || 0,
      openIssues: data.open_issues_count || 0,
    };
  },

  async fetchReleases() {
    // Fetch up to 10 releases para calcular downloads totales con precision
    const res = await fetch(`${this.API_BASE}/repos/${this.REPO}/releases?per_page=10`);
    if (!res.ok) throw new Error(`Releases API: ${res.status} ${res.statusText}`);
    const data = await res.json();

    return data.map((release, index) => {
      const downloads = (release.assets || []).reduce((sum, asset) => sum + (asset.download_count || 0), 0);
      return {
        tagName: release.tag_name || '',
        name: release.name || release.tag_name || 'Unknown',
        date: release.published_at || release.created_at || '',
        body: (release.body || '').substring(0, 200), // Truncar a 200 chars
        htmlUrl: release.html_url || '',
        downloads: downloads,
        isLatest: index === 0,
        isPrerelease: release.prerelease || false,
      };
    });
  },

  async fetchContributors() {
    const res = await fetch(`${this.API_BASE}/repos/${this.REPO}/contributors?per_page=30`);
    if (!res.ok) throw new Error(`Contributors API: ${res.status} ${res.statusText}`);
    const data = await res.json();

    // Filtrar bots
    return data
      .filter(c => !this.BOT_ACCOUNTS.includes(c.login))
      .map(c => ({
        login: c.login || '',
        avatarUrl: c.avatar_url || '',
        contributions: c.contributions || 0,
        htmlUrl: c.html_url || `https://github.com/${c.login}`,
      }));
  },

  // ══════════════════════════════════════════════════════════
  // MERGE CONTRIBUTORS (API + known manual)
  // ══════════════════════════════════════════════════════════
  mergeContributors(apiContributors) {
    const merged = [...apiContributors];
    const existingLogins = new Set(merged.map(c => c.login.toLowerCase()));

    // Agregar contributors conocidos que no estan en la API
    for (const known of this.KNOWN_CONTRIBUTORS) {
      if (!existingLogins.has(known.login.toLowerCase())) {
        merged.push(known);
      }
    }

    // Ordenar: lead primero, luego por contributions
    merged.sort((a, b) => {
      if (a.login === 'xodiosx') return -1;
      if (b.login === 'xodiosx') return 1;
      return (b.contributions || 0) - (a.contributions || 0);
    });

    return merged;
  },

  // ══════════════════════════════════════════════════════════
  // HELPERS
  // ══════════════════════════════════════════════════════════
  getTotalDownloads(releases) {
    return releases.reduce((sum, r) => sum + (r.downloads || 0), 0);
  },

  getRole(login, contributions) {
    if (this.ROLE_MAP[login]) return this.ROLE_MAP[login];
    if (contributions > 50) return '⚔️ Core Dev';
    if (contributions > 10) return '⚔️ Dev';
    return '⚔️ Contributor';
  },

  getCountry(login) {
    return this.COUNTRY_MAP[login] || '🌍 Earth';
  },

  getSocialLinks(login) {
    return this.SOCIAL_MAP[login] || [
      { url: `https://github.com/${login}`, icon: 'fab fa-github' },
    ];
  },

  // ══════════════════════════════════════════════════════════
  // CACHE METHODS
  // ══════════════════════════════════════════════════════════
  getCachedData() {
    try {
      const raw = localStorage.getItem(this.CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed.timestamp || !parsed.data) return null;
      if (Date.now() - parsed.timestamp > this.CACHE_TTL) {
        localStorage.removeItem(this.CACHE_KEY);
        return null;
      }
      return parsed.data;
    } catch (e) {
      return null;
    }
  },

  setCachedData(data) {
    try {
      localStorage.setItem(this.CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data: data,
      }));
    } catch (e) {
      // localStorage lleno o no disponible — no cacheamos
      console.warn('[XoDosAPI] Could not save cache:', e.message);
    }
  },
};
