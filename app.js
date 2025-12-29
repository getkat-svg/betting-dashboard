// Sportsbook deep link URLs (these open directly to the sportsbook)
const bookLinks = {
    'FanDuel': 'https://sportsbook.fanduel.com/',
    'DraftKings': 'https://sportsbook.draftkings.com/',
    'BetMGM': 'https://sports.betmgm.com/',
    'Caesars': 'https://www.caesars.com/sportsbook-and-casino/',
    'BetRivers': 'https://www.betrivers.com/',
    'PointsBet': 'https://pointsbet.com/'
};

// Bet categories for filtering
const betCategories = {
    'game': ['Moneyline', 'Spread', 'Total', 'Run Line'],
    'player_prop': ['Player Prop', 'Passing Yards', 'Rushing Yards', 'Points', 'Rebounds', 'Strikeouts', 'Hits'],
    'derivative': ['F5 Innings', '1st Half', '1st Quarter', 'Alt Line', 'Team Total'],
    'future': ['Future', 'Championship', 'MVP', 'Win Total'],
    'live': ['Live Spread', 'Live Total', 'Live ML', 'Next Score']
};

// Sample value bets data (simulating Sharp vs Soft book comparison)
// Includes game outcomes, player props, derivatives, futures, and live bets
const valueBets = [
    // === GAME OUTCOMES ===
    {
        sport: 'mlb',
        sportName: 'MLB',
        event: 'Yankees vs Red Sox',
        betType: 'Moneyline',
        category: 'game',
        selection: 'Red Sox +145',
        odds: 145,
        sharpOdds: 125,
        softBook: 'FanDuel',
        sharpBook: 'Pinnacle',
        trueProb: 0.44,
        ev: 8.3,
        confidence: 85,
        isLive: false
    },
    {
        sport: 'ncaab',
        sportName: 'NCAAB',
        event: 'Duke vs UNC',
        betType: 'Spread',
        category: 'game',
        selection: 'UNC +3.5',
        odds: -105,
        sharpOdds: -118,
        softBook: 'DraftKings',
        sharpBook: 'Circa',
        trueProb: 0.55,
        ev: 6.8,
        confidence: 78,
        isLive: false
    },
    {
        sport: 'nba',
        sportName: 'NBA',
        event: 'Warriors vs Suns',
        betType: 'Moneyline',
        category: 'game',
        selection: 'Suns +125',
        odds: 125,
        sharpOdds: 108,
        softBook: 'FanDuel',
        sharpBook: 'Pinnacle',
        trueProb: 0.48,
        ev: 7.2,
        confidence: 80,
        isLive: false
    },

    // === PLAYER PROPS (High Value!) ===
    {
        sport: 'nba',
        sportName: 'NBA',
        event: 'Lakers vs Celtics',
        betType: 'Player Prop',
        category: 'player_prop',
        selection: 'LeBron O25.5 pts',
        odds: -110,
        sharpOdds: -125,
        softBook: 'BetMGM',
        sharpBook: 'Pinnacle',
        trueProb: 0.58,
        ev: 5.4,
        confidence: 82,
        isLive: false
    },
    {
        sport: 'nba',
        sportName: 'NBA',
        event: 'Bucks vs Heat',
        betType: 'Player Prop',
        category: 'player_prop',
        selection: 'Giannis O12.5 reb',
        odds: +105,
        sharpOdds: -108,
        softBook: 'DraftKings',
        sharpBook: 'Pinnacle',
        trueProb: 0.52,
        ev: 9.5,
        confidence: 76,
        isLive: false
    },
    {
        sport: 'nfl',
        sportName: 'NFL',
        event: 'Eagles vs Cowboys',
        betType: 'Rushing Yards',
        category: 'player_prop',
        selection: 'Hurts O45.5 rush yds',
        odds: -115,
        sharpOdds: -130,
        softBook: 'FanDuel',
        sharpBook: 'Pinnacle',
        trueProb: 0.57,
        ev: 4.5,
        confidence: 81,
        isLive: false
    },
    {
        sport: 'mlb',
        sportName: 'MLB',
        event: 'Dodgers vs Padres',
        betType: 'Strikeouts',
        category: 'player_prop',
        selection: 'Yamamoto O6.5 K',
        odds: +115,
        sharpOdds: -102,
        softBook: 'Caesars',
        sharpBook: 'Pinnacle',
        trueProb: 0.51,
        ev: 12.3,
        confidence: 74,
        isLive: false
    },
    {
        sport: 'nfl',
        sportName: 'NFL',
        event: 'Chiefs vs Ravens',
        betType: 'Passing Yards',
        category: 'player_prop',
        selection: 'Mahomes O285.5 yds',
        odds: -105,
        sharpOdds: -120,
        softBook: 'BetMGM',
        sharpBook: 'Circa',
        trueProb: 0.56,
        ev: 6.1,
        confidence: 79,
        isLive: false
    },

    // === DERIVATIVES (1st Half, Alt Lines, etc.) ===
    {
        sport: 'mlb',
        sportName: 'MLB',
        event: 'Astros vs Rangers',
        betType: 'F5 Innings',
        category: 'derivative',
        selection: 'Rangers +0.5',
        odds: +120,
        sharpOdds: +102,
        softBook: 'BetMGM',
        sharpBook: 'Pinnacle',
        trueProb: 0.49,
        ev: 7.6,
        confidence: 79,
        isLive: false
    },
    {
        sport: 'nba',
        sportName: 'NBA',
        event: 'Celtics vs 76ers',
        betType: '1st Half',
        category: 'derivative',
        selection: 'Celtics -3.5 1H',
        odds: -108,
        sharpOdds: -118,
        softBook: 'DraftKings',
        sharpBook: 'Pinnacle',
        trueProb: 0.55,
        ev: 4.8,
        confidence: 77,
        isLive: false
    },
    {
        sport: 'nfl',
        sportName: 'NFL',
        event: 'Bills vs Dolphins',
        betType: 'Alt Line',
        category: 'derivative',
        selection: 'Bills -3.5 (alt)',
        odds: +135,
        sharpOdds: +115,
        softBook: 'Caesars',
        sharpBook: 'Circa',
        trueProb: 0.47,
        ev: 8.9,
        confidence: 73,
        isLive: false
    },
    {
        sport: 'mlb',
        sportName: 'MLB',
        event: 'Braves vs Mets',
        betType: 'Team Total',
        category: 'derivative',
        selection: 'Braves O4.5 runs',
        odds: +102,
        sharpOdds: -112,
        softBook: 'FanDuel',
        sharpBook: 'Bookmaker',
        trueProb: 0.53,
        ev: 7.2,
        confidence: 75,
        isLive: false
    },

    // === FUTURES ===
    {
        sport: 'nba',
        sportName: 'NBA',
        event: '2024-25 Season',
        betType: 'Championship',
        category: 'future',
        selection: 'Thunder to win title',
        odds: +850,
        sharpOdds: +720,
        softBook: 'DraftKings',
        sharpBook: 'Circa',
        trueProb: 0.12,
        ev: 14.2,
        confidence: 68,
        isLive: false
    },
    {
        sport: 'nfl',
        sportName: 'NFL',
        event: '2024 Season',
        betType: 'MVP',
        category: 'future',
        selection: 'Josh Allen MVP',
        odds: +450,
        sharpOdds: +380,
        softBook: 'BetMGM',
        sharpBook: 'Pinnacle',
        trueProb: 0.20,
        ev: 9.8,
        confidence: 65,
        isLive: false
    },
    {
        sport: 'mlb',
        sportName: 'MLB',
        event: '2025 Season',
        betType: 'Win Total',
        category: 'future',
        selection: 'Orioles O92.5 wins',
        odds: -105,
        sharpOdds: -118,
        softBook: 'Caesars',
        sharpBook: 'Bookmaker',
        trueProb: 0.55,
        ev: 5.6,
        confidence: 71,
        isLive: false
    },

    // === LIVE BETTING ===
    {
        sport: 'nba',
        sportName: 'NBA',
        event: 'Nuggets vs Lakers',
        betType: 'Live Spread',
        category: 'live',
        selection: 'Lakers +8.5 (Q3)',
        odds: -108,
        sharpOdds: -120,
        softBook: 'FanDuel',
        sharpBook: 'Pinnacle',
        trueProb: 0.56,
        ev: 5.8,
        confidence: 82,
        isLive: true,
        gameTime: '3rd Quarter - 8:42'
    },
    {
        sport: 'mlb',
        sportName: 'MLB',
        event: 'Dodgers vs Giants',
        betType: 'Live Total',
        category: 'live',
        selection: 'Over 6.5 (5th inn)',
        odds: +105,
        sharpOdds: -108,
        softBook: 'DraftKings',
        sharpBook: 'Pinnacle',
        trueProb: 0.52,
        ev: 8.4,
        confidence: 78,
        isLive: true,
        gameTime: 'Top 5th - 2-1'
    },
    {
        sport: 'nfl',
        sportName: 'NFL',
        event: 'Chiefs vs Bills',
        betType: 'Live ML',
        category: 'live',
        selection: 'Bills +165 (2H)',
        odds: +165,
        sharpOdds: +140,
        softBook: 'BetMGM',
        sharpBook: 'Circa',
        trueProb: 0.42,
        ev: 10.1,
        confidence: 75,
        isLive: true,
        gameTime: 'Halftime - 17-14 KC'
    }
];

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Calculate profit from American odds
function calculateProfit(odds, stake = 100) {
    if (odds > 0) {
        return (odds / 100) * stake;
    } else {
        return (100 / Math.abs(odds)) * stake;
    }
}

// Convert American odds to implied probability
function americanToProb(odds) {
    if (odds > 0) {
        return 100 / (odds + 100);
    } else {
        return Math.abs(odds) / (Math.abs(odds) + 100);
    }
}

// Convert American odds to decimal
function americanToDecimal(odds) {
    if (odds > 0) {
        return (odds / 100) + 1;
    } else {
        return (100 / Math.abs(odds)) + 1;
    }
}

// Calculate Kelly Criterion bet size
// Returns { fraction, amount, capped }
// Uses fractional Kelly (25%) for safety
function calculateKellyBetSize(odds, trueProb, bankroll) {
    const decimalOdds = americanToDecimal(odds);
    const b = decimalOdds - 1; // Net odds (what you win per $1 bet)
    const p = trueProb;
    const q = 1 - p;

    // Full Kelly formula: f* = (bp - q) / b
    const fullKelly = Math.max(0, (b * p - q) / b);

    // Use quarter Kelly for safety (industry standard for variance reduction)
    const quarterKelly = fullKelly * 0.25;

    // Cap at 5% of bankroll max (never bet more than 5%)
    const cappedFraction = Math.min(quarterKelly, 0.05);
    const amount = bankroll * cappedFraction;

    return {
        fraction: cappedFraction,
        fullKellyFraction: fullKelly,
        amount: amount,
        capped: cappedFraction < quarterKelly // Was it capped at 5%?
    };
}

// Get current bankroll from input
function getBankroll() {
    const input = document.getElementById('mainBankroll');
    return parseFloat(input?.value) || 1000;
}

// Update all bet sizes when bankroll changes
function updateBetSizes() {
    const filtered = getFilteredBets();
    renderBets(filtered);
}

// Store current displayed bets for modal reference
let currentDisplayedBets = [];

// Render bets table with detailed odds comparison and place bet buttons
function renderBets(bets) {
    const tbody = document.getElementById('betsTableBody');
    tbody.innerHTML = '';

    // Get sort preference
    const sortBy = document.getElementById('sortBy')?.value || 'ev';

    // Sort bets based on selection
    const sortedBets = [...bets].sort((a, b) => {
        switch(sortBy) {
            case 'ev':
                return b.ev - a.ev;
            case 'profit':
                return calculateProfit(b.odds, 100) - calculateProfit(a.odds, 100);
            case 'confidence':
                return b.confidence - a.confidence;
            case 'edge':
                const edgeA = americanToProb(a.sharpOdds) - americanToProb(a.odds);
                const edgeB = americanToProb(b.sharpOdds) - americanToProb(b.odds);
                return edgeB - edgeA;
            default:
                return b.ev - a.ev;
        }
    });

    // Store for modal reference
    currentDisplayedBets = sortedBets;

    const bankroll = getBankroll();

    sortedBets.forEach((bet, index) => {
        // Calculate Kelly bet size
        const kelly = calculateKellyBetSize(bet.odds, bet.trueProb, bankroll);
        const expectedProfit = kelly.amount * (bet.ev / 100);

        const sharpOddsStr = bet.sharpOdds > 0 ? `+${bet.sharpOdds}` : bet.sharpOdds;
        const softOddsStr = bet.odds > 0 ? `+${bet.odds}` : bet.odds;
        const edge = ((americanToProb(bet.sharpOdds) - americanToProb(bet.odds)) * 100).toFixed(1);
        const bookUrl = bookLinks[bet.softBook] || '#';

        // Category badge
        const categoryLabels = {
            'game': 'Game',
            'player_prop': 'Prop',
            'derivative': 'Deriv',
            'future': 'Future',
            'live': 'LIVE'
        };

        const row = document.createElement('tr');
        row.className = bet.isLive ? 'live-bet-row' : '';
        row.innerHTML = `
            <td>
                <span class="sport-badge ${bet.sport}">${bet.sportName}</span>
                <span class="category-badge ${bet.category}">${categoryLabels[bet.category]}</span>
                ${bet.isLive ? `<span class="live-indicator">LIVE</span>` : ''}
            </td>
            <td>
                <div class="event-info">
                    <strong>${bet.event}</strong>
                    <span class="bet-type">${bet.betType}</span>
                    ${bet.gameTime ? `<span class="game-time">${bet.gameTime}</span>` : ''}
                </div>
            </td>
            <td><strong class="selection">${bet.selection}</strong></td>
            <td>
                <div class="odds-comparison" onclick="showOddsDetail(${index})">
                    <div class="odds-row soft">
                        <span class="book-name">${bet.softBook}</span>
                        <span class="odds-value">${softOddsStr}</span>
                    </div>
                    <div class="odds-row sharp">
                        <span class="book-name">${bet.sharpBook}</span>
                        <span class="odds-value dim">${sharpOddsStr}</span>
                    </div>
                    <span class="view-all">View all books</span>
                </div>
            </td>
            <td class="edge-value">+${edge}%</td>
            <td class="${bet.ev > 0 ? 'ev-positive' : 'ev-negative'}">+${bet.ev.toFixed(1)}%</td>
            <td>
                <div class="kelly-bet">
                    <span class="kelly-amount">$${kelly.amount.toFixed(0)}</span>
                    <span class="kelly-percent">${(kelly.fraction * 100).toFixed(1)}% of bank</span>
                </div>
            </td>
            <td class="profit-value">+$${expectedProfit.toFixed(2)}</td>
            <td>
                <a href="${bookUrl}" target="_blank" class="place-bet-btn">
                    Place Bet
                </a>
            </td>
        `;
        tbody.appendChild(row);
    });

    updateStats(bets);
}

// Show detailed odds comparison modal
function showOddsDetail(betIndex) {
    const bet = currentDisplayedBets[betIndex];
    const modal = document.getElementById('oddsModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.textContent = `${bet.event} - ${bet.selection}`;

    // Generate mock odds from multiple books for demonstration
    const allBooks = generateMultiBookOdds(bet);

    body.innerHTML = `
        <div class="odds-detail">
            <div class="odds-summary">
                <p><strong>Best Odds:</strong> <span class="highlight">${bet.softBook} ${bet.odds > 0 ? '+' : ''}${bet.odds}</span></p>
                <p><strong>Sharp Line:</strong> ${bet.sharpBook} ${bet.sharpOdds > 0 ? '+' : ''}${bet.sharpOdds}</p>
                <p><strong>Your Edge:</strong> <span class="ev-positive">+${bet.ev.toFixed(1)}% EV</span></p>
            </div>
            <h4>All Sportsbook Odds</h4>
            <div class="all-books-table">
                ${allBooks.map(book => `
                    <div class="book-odds-row ${book.isBest ? 'best-odds' : ''} ${book.isSharp ? 'sharp-book' : ''}">
                        <span class="book-name">${book.name}</span>
                        <span class="book-odds ${book.isBest ? 'highlight' : ''}">${book.odds > 0 ? '+' : ''}${book.odds}</span>
                        <span class="book-type">${book.isSharp ? 'Sharp' : 'Soft'}</span>
                        ${book.isBest ? '<a href="' + (bookLinks[book.name] || '#') + '" target="_blank" class="place-bet-btn small">Bet Here</a>' : ''}
                    </div>
                `).join('')}
            </div>
            <div class="odds-explanation">
                <h4>Why This Is Value</h4>
                <p>The sharp line at <strong>${bet.sharpBook}</strong> implies a ${(americanToProb(bet.sharpOdds) * 100).toFixed(1)}% probability.
                But <strong>${bet.softBook}</strong> is offering odds that imply only ${(americanToProb(bet.odds) * 100).toFixed(1)}% probability.</p>
                <p>This ${((americanToProb(bet.sharpOdds) - americanToProb(bet.odds)) * 100).toFixed(1)}% discrepancy is your edge.</p>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

// Generate mock odds from multiple books for demo
function generateMultiBookOdds(bet) {
    const sharpBooks = ['Pinnacle', 'Circa', 'Bookmaker'];
    const softBooks = ['FanDuel', 'DraftKings', 'BetMGM', 'Caesars', 'BetRivers', 'PointsBet'];

    const books = [];

    // Add the actual best odds
    books.push({
        name: bet.softBook,
        odds: bet.odds,
        isBest: true,
        isSharp: false
    });

    // Add sharp book
    books.push({
        name: bet.sharpBook,
        odds: bet.sharpOdds,
        isBest: false,
        isSharp: true
    });

    // Add other soft books with slightly worse odds
    softBooks.filter(b => b !== bet.softBook).forEach(book => {
        const variance = Math.floor(Math.random() * 15) + 5;
        let adjustedOdds;
        if (bet.odds > 0) {
            adjustedOdds = bet.odds - variance;
        } else {
            adjustedOdds = bet.odds - variance;
        }
        books.push({
            name: book,
            odds: adjustedOdds,
            isBest: false,
            isSharp: false
        });
    });

    // Add other sharp books
    sharpBooks.filter(b => b !== bet.sharpBook).forEach(book => {
        const variance = Math.floor(Math.random() * 5) - 2;
        books.push({
            name: book,
            odds: bet.sharpOdds + variance,
            isBest: false,
            isSharp: true
        });
    });

    // Sort by odds (best first)
    return books.sort((a, b) => {
        const aVal = a.odds > 0 ? a.odds : (100 / Math.abs(a.odds)) * 100;
        const bVal = b.odds > 0 ? b.odds : (100 / Math.abs(b.odds)) * 100;
        return bVal - aVal;
    });
}

function closeModal() {
    document.getElementById('oddsModal').style.display = 'none';
}

// API Modal functions
function showApiModal() {
    document.getElementById('apiModal').style.display = 'flex';
}

function closeApiModal() {
    document.getElementById('apiModal').style.display = 'none';
}

// Connect to The Odds API
let apiKey = localStorage.getItem('oddsApiKey') || '';

async function connectApi() {
    const keyInput = document.getElementById('apiKeyInput');
    const inputValue = keyInput.value.trim();

    // Check if user pasted JSON data directly
    if (inputValue.startsWith('[') || inputValue.startsWith('{')) {
        try {
            const data = JSON.parse(inputValue);
            const dataArray = Array.isArray(data) ? data : [data];
            closeApiModal();
            processLiveOdds(dataArray);
            document.getElementById('apiStatus').innerHTML = `
                <span class="status-dot connected"></span>
                <span>Loaded ${dataArray.length} games from pasted data</span>
            `;
            updateTimestamp();
            return;
        } catch (e) {
            alert('Invalid JSON data. Please check the format.');
            return;
        }
    }

    // Otherwise treat as API key
    apiKey = inputValue;

    if (!apiKey) {
        alert('Please enter an API key');
        return;
    }

    // Validate API key format (should be alphanumeric, typically 32 chars)
    if (apiKey.length < 20 || !/^[a-zA-Z0-9]+$/.test(apiKey)) {
        alert('Invalid API key format. Please check your key.');
        return;
    }

    localStorage.setItem('oddsApiKey', apiKey);
    closeApiModal();

    // Show loading state immediately
    document.getElementById('apiStatus').innerHTML = `
        <span class="status-dot loading"></span>
        <span>Connecting...</span>
    `;

    await fetchLiveOdds();
}

// Fetch live odds from The Odds API
async function fetchLiveOdds() {
    if (!apiKey) return;

    const statusEl = document.getElementById('apiStatus');
    statusEl.innerHTML = `
        <span class="status-dot loading"></span>
        <span>Fetching live odds...</span>
    `;

    // Sports to fetch - US leagues only (better data, more exploitable lines)
    const sportsToFetch = [
        'americanfootball_nfl',
        'americanfootball_ncaaf',
        'basketball_nba',
        'basketball_ncaab',
        'icehockey_nhl',
        'baseball_mlb'
    ];

    // Player prop markets by sport - where 70% of +EV value exists!
    const propMarkets = {
        'basketball_nba': 'player_points,player_rebounds,player_assists,player_threes',
        'basketball_ncaab': 'player_points,player_rebounds,player_assists',
        'americanfootball_nfl': 'player_pass_yds,player_rush_yds,player_reception_yds,player_receptions,player_pass_tds,player_anytime_td',
        'americanfootball_ncaaf': 'player_pass_yds,player_rush_yds,player_reception_yds',
        'baseball_mlb': 'pitcher_strikeouts,batter_hits,batter_total_bases,batter_rbis,batter_runs_scored',
        'icehockey_nhl': 'player_points,player_shots_on_goal'
    };

    let allData = [];
    let remaining = null;
    let lastError = null;
    let successfulFetches = 0;

    try {
        // Fetch from each sport - both h2h and player props
        for (const sport of sportsToFetch) {
            // Fetch game lines (h2h)
            try {
                const response = await fetch(
                    `https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${apiKey}&regions=us,us2&markets=h2h&oddsFormat=american&bookmakers=pinnacle,circa,fanduel,draftkings,betmgm,caesars,pointsbetus,betrivers,bovada`
                );

                // Get remaining requests from headers regardless of status
                const reqRemaining = response.headers.get('x-requests-remaining');
                if (reqRemaining) remaining = reqRemaining;

                if (response.ok) {
                    const data = await response.json();
                    data.forEach(g => g._marketType = 'h2h');
                    allData = allData.concat(data);
                    successfulFetches++;
                    console.log(`Fetched ${data.length} games (h2h) from ${sport}`);
                } else {
                    // Capture the error for better messaging
                    const errorData = await response.json().catch(() => ({}));
                    lastError = {
                        status: response.status,
                        message: errorData.message || response.statusText
                    };
                    console.log(`API error for ${sport}: ${response.status} - ${lastError.message}`);

                    // If unauthorized or forbidden, stop trying
                    if (response.status === 401 || response.status === 403) {
                        throw new Error(`API Key Invalid: ${lastError.message}`);
                    }
                    // If rate limited, stop trying
                    if (response.status === 429) {
                        throw new Error('Rate limit exceeded. Try again later.');
                    }
                }
            } catch (e) {
                if (e.message.includes('API Key') || e.message.includes('Rate limit')) {
                    throw e; // Re-throw critical errors
                }
                console.log(`Skipping ${sport} h2h: ${e.message}`);
            }

            // Fetch player props (where most value is!)
            // Only skip if we know we're low on requests
            const shouldFetchProps = propMarkets[sport] &&
                (remaining === null || parseInt(remaining) > 20);

            if (shouldFetchProps) {
                try {
                    const response = await fetch(
                        `https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${apiKey}&regions=us,us2&markets=${propMarkets[sport]}&oddsFormat=american&bookmakers=pinnacle,fanduel,draftkings,betmgm,caesars,pointsbetus,betrivers`
                    );

                    const reqRemaining = response.headers.get('x-requests-remaining');
                    if (reqRemaining) remaining = reqRemaining;

                    if (response.ok) {
                        const data = await response.json();
                        data.forEach(g => g._marketType = 'player_prop');
                        allData = allData.concat(data);
                        successfulFetches++;
                        console.log(`Fetched ${data.length} games (props) from ${sport}`);
                    }
                } catch (e) {
                    console.log(`Skipping ${sport} props: ${e.message}`);
                }
            }

            // Stop if we're running low on API calls
            if (remaining && parseInt(remaining) < 10) {
                console.log('Low on API requests, stopping fetch');
                break;
            }
        }

        console.log(`Total: ${allData.length} game records, ${remaining} API requests remaining`);

        // If we had successful fetches but no data, that's okay (no games right now)
        if (successfulFetches === 0 && lastError) {
            throw new Error(lastError.message || 'Failed to fetch data');
        }

        if (allData.length === 0) {
            // No error, just no games available right now
            statusEl.innerHTML = `
                <span class="status-dot connected"></span>
                <span>Connected - No games available</span>
                <button class="icon-btn" onclick="fetchLiveOdds()" title="Refresh">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
                </button>
            `;
            return;
        }

        // Process and display live odds
        processLiveOdds(allData);

        // Update status
        statusEl.innerHTML = `
            <span class="status-dot connected"></span>
            <span>Live - ${remaining || '?'} requests left</span>
            <button class="icon-btn" onclick="fetchLiveOdds()" title="Refresh">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
            </button>
        `;

    } catch (error) {
        console.error('API Error:', error);

        // Provide specific error messages
        let errorMsg = 'Error - check API key';
        if (error.message.includes('API Key')) {
            errorMsg = 'Invalid API key';
        } else if (error.message.includes('Rate limit')) {
            errorMsg = 'Rate limit exceeded';
        } else if (error.message.includes('Failed to fetch')) {
            errorMsg = 'Network error';
        }

        statusEl.innerHTML = `
            <span class="status-dot error"></span>
            <span>${errorMsg}</span>
            <button class="icon-btn" onclick="showApiModal()" title="Reconnect">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </button>
        `;
    }
}

// Process live odds data from API
function processLiveOdds(data) {
    if (!data || data.length === 0) return;

    const liveValueBets = [];

    // Sport key mapping - comprehensive list
    const sportMap = {
        // American Football
        'americanfootball_nfl': { key: 'nfl', name: 'NFL' },
        'americanfootball_ncaaf': { key: 'ncaaf', name: 'NCAAF' },
        // Basketball
        'basketball_nba': { key: 'nba', name: 'NBA' },
        'basketball_ncaab': { key: 'ncaab', name: 'NCAAB' },
        'basketball_euroleague': { key: 'nba', name: 'EuroLeague' },
        // Baseball
        'baseball_mlb': { key: 'mlb', name: 'MLB' },
        // Hockey
        'icehockey_nhl': { key: 'nhl', name: 'NHL' },
        'icehockey_sweden_hockey_league': { key: 'nhl', name: 'SHL' },
        // Soccer
        'soccer_epl': { key: 'soccer', name: 'EPL' },
        'soccer_italy_serie_a': { key: 'soccer', name: 'Serie A' },
        'soccer_australia_aleague': { key: 'soccer', name: 'A-League' },
        'soccer_spain_la_liga': { key: 'soccer', name: 'La Liga' },
        'soccer_germany_bundesliga': { key: 'soccer', name: 'Bundesliga' },
        'soccer_france_ligue_one': { key: 'soccer', name: 'Ligue 1' },
        'soccer_uefa_champs_league': { key: 'soccer', name: 'UCL' },
        'soccer_usa_mls': { key: 'soccer', name: 'MLS' },
        'soccer_africa_cup_of_nations': { key: 'soccer', name: 'AFCON' },
        // Cricket - skip these (different betting format)
        'cricket_big_bash': { key: 'skip', name: 'Cricket' },
        'cricket_international_t20': { key: 'skip', name: 'Cricket' }
    };

    // Player prop market display names
    const propMarketNames = {
        'player_points': 'Points',
        'player_rebounds': 'Rebounds',
        'player_assists': 'Assists',
        'player_threes': '3-Pointers',
        'player_pass_yds': 'Pass Yds',
        'player_rush_yds': 'Rush Yds',
        'player_reception_yds': 'Rec Yds',
        'player_receptions': 'Receptions',
        'player_pass_tds': 'Pass TDs',
        'player_anytime_td': 'Anytime TD',
        'pitcher_strikeouts': 'Strikeouts',
        'batter_hits': 'Hits',
        'batter_total_bases': 'Total Bases',
        'batter_rbis': 'RBIs',
        'batter_runs_scored': 'Runs',
        'player_shots_on_goal': 'Shots'
    };

    // SHARP BOOKS - Use as the "true odds" benchmark
    const sharpBookOrder = [
        'pinnacle',     // #1 - The gold standard
        'circa',        // #2 - Sharpest US book
        'bookmaker'     // #3 - Sharp offshore book
    ];

    // SOFT BOOKS - Where value exists
    const softBookKeys = [
        'fanduel',
        'draftkings',
        'betmgm',
        'caesars',
        'pointsbetus',
        'betrivers',
        'bovada'
    ];

    const now = new Date();

    data.forEach(game => {
        const bookmakers = game.bookmakers;
        if (!bookmakers || bookmakers.length < 2) return;

        // Check if game is in the future (not started yet)
        const gameTime = new Date(game.commence_time);
        const hoursUntilGame = (gameTime - now) / (1000 * 60 * 60);

        // Skip games that have already started or are too far out
        if (hoursUntilGame < -0.5 || hoursUntilGame > 168) return;

        // Get sport info
        const sportInfo = sportMap[game.sport_key] || { key: 'other', name: game.sport_title };
        if (sportInfo.key === 'skip') return;

        // Find the sharpest available book
        let sharpBook = null;
        for (const key of sharpBookOrder) {
            sharpBook = bookmakers.find(b => b.key === key);
            if (sharpBook) break;
        }

        if (!sharpBook && bookmakers.length >= 2) {
            sharpBook = bookmakers[0];
        }

        if (!sharpBook) return;

        const softBooks = bookmakers.filter(b =>
            softBookKeys.includes(b.key) && b.key !== sharpBook.key
        );

        if (softBooks.length === 0) return;

        // Format game time for display
        const gameTimeStr = gameTime.toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });

        // Get all markets from sharp book
        const sharpMarkets = sharpBook.markets || [];

        // Process each market (h2h and player props)
        sharpMarkets.forEach(sharpMarket => {
            const marketKey = sharpMarket.key;
            const isPlayerProp = marketKey.startsWith('player_') ||
                                 marketKey.startsWith('pitcher_') ||
                                 marketKey.startsWith('batter_');

            softBooks.forEach(softBook => {
                const softMarket = softBook.markets?.find(m => m.key === marketKey);
                if (!softMarket) return;

                softMarket.outcomes.forEach(outcome => {
                    // Skip draw outcomes
                    if (outcome.name === 'Draw') return;

                    // For player props, match by description (player name + line)
                    let sharpOutcome;
                    if (isPlayerProp) {
                        sharpOutcome = sharpMarket.outcomes.find(o =>
                            o.description === outcome.description &&
                            o.name === outcome.name
                        );
                    } else {
                        sharpOutcome = sharpMarket.outcomes.find(o => o.name === outcome.name);
                    }

                    if (!sharpOutcome) return;

                    const softOdds = outcome.price;
                    const sharpOdds = sharpOutcome.price;

                    // Calculate value
                    const softProb = americanToProb(softOdds);
                    const sharpProb = americanToProb(sharpOdds);
                    const edge = (sharpProb - softProb) * 100;

                    // Only show if 2%+ edge and odds are reasonable
                    if (edge > 2 && Math.abs(softOdds) < 5000) {
                        const ev = edge;

                        // Build selection string
                        let selection, betType, category;
                        if (isPlayerProp) {
                            // Player prop: "LeBron James O25.5 pts +105"
                            const playerName = outcome.description?.split(' ').slice(0, 2).join(' ') || 'Player';
                            const line = outcome.point !== undefined ? outcome.point : '';
                            const overUnder = outcome.name === 'Over' ? 'O' : 'U';
                            selection = `${playerName} ${overUnder}${line} ${softOdds > 0 ? '+' : ''}${softOdds}`;
                            betType = propMarketNames[marketKey] || 'Player Prop';
                            category = 'player_prop';
                        } else {
                            // Game line: "Team Name +105"
                            selection = `${outcome.name} ${softOdds > 0 ? '+' : ''}${softOdds}`;
                            betType = 'Moneyline';
                            category = 'game';
                        }

                        liveValueBets.push({
                            sport: sportInfo.key,
                            sportName: sportInfo.name,
                            event: `${game.away_team} @ ${game.home_team}`,
                            betType: betType,
                            category: category,
                            selection: selection,
                            odds: softOdds,
                            sharpOdds: sharpOdds,
                            softBook: formatBookName(softBook.key),
                            sharpBook: formatBookName(sharpBook.key),
                            trueProb: sharpProb,
                            ev: ev,
                            confidence: Math.min(95, 60 + edge * 3),
                            isLive: false,
                            gameTime: gameTimeStr
                        });
                    }
                });
            });
        });
    });

    // Sort by EV descending
    liveValueBets.sort((a, b) => b.ev - a.ev);

    // Always clear demo data when processing live odds
    valueBets.length = 0;

    if (liveValueBets.length > 0) {
        valueBets.push(...liveValueBets);
        renderBets(valueBets);
        updateTimestamp();

        // Update status
        document.getElementById('apiStatus').innerHTML = `
            <span class="status-dot connected"></span>
            <span>Live - ${liveValueBets.length} value bets found</span>
            <button class="icon-btn" onclick="fetchLiveOdds()" title="Refresh">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
            </button>
        `;
    } else {
        // No value bets found - show empty state
        document.getElementById('betsTableBody').innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
                    <div style="font-size: 2rem; margin-bottom: 12px;">📊</div>
                    <div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 8px;">No Value Bets Right Now</div>
                    <div style="font-size: 0.85rem;">Sharp and soft books are aligned. Check back later for opportunities.</div>
                </td>
            </tr>
        `;
        updateStats([]);
        document.getElementById('apiStatus').innerHTML = `
            <span class="status-dot connected"></span>
            <span>Live - No value bets</span>
            <button class="icon-btn" onclick="fetchLiveOdds()" title="Refresh">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
            </button>
        `;
        updateTimestamp();
    }
}

function formatBookName(key) {
    const names = {
        // US Legal
        'fanduel': 'FanDuel',
        'draftkings': 'DraftKings',
        'betmgm': 'BetMGM',
        'caesars': 'Caesars',
        'pointsbetus': 'PointsBet',
        'betrivers': 'BetRivers',
        'unibet_us': 'Unibet',
        'williamhill_us': 'William Hill',
        'wynnbet': 'WynnBet',
        'superbook': 'SuperBook',
        'betfred': 'Betfred',
        'twinspires': 'TwinSpires',
        'foxbet': 'FOX Bet',
        // Sharp Books
        'pinnacle': 'Pinnacle',
        'circa': 'Circa',
        'bookmaker': 'Bookmaker',
        'betonlineag': 'BetOnline',
        'lowvig': 'LowVig',
        // Offshore
        'bovada': 'Bovada',
        'mybookieag': 'MyBookie',
        'betus': 'BetUS',
        'gtbets': 'GTBets',
        'intertops': 'Intertops',
        // International
        'bet365': 'Bet365',
        'betfair': 'Betfair',
        'unibet': 'Unibet',
        'ladbrokes': 'Ladbrokes',
        'williamhill': 'William Hill',
        'paddypower': 'Paddy Power',
        'betsson': 'Betsson',
        '888sport': '888sport',
        'betway': 'Betway',
        'sportsbet': 'Sportsbet',
        'neds': 'Neds',
        'pointsbet': 'PointsBet AU',
        'tab': 'TAB'
    };
    return names[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

// Helper to get current filtered bets
function getFilteredBets() {
    const sportFilter = document.getElementById('sportFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const evFilter = document.getElementById('evFilter').value;

    let filtered = [...valueBets];

    if (sportFilter !== 'all') {
        filtered = filtered.filter(bet => bet.sport === sportFilter);
    }

    if (categoryFilter !== 'all') {
        filtered = filtered.filter(bet => bet.category === categoryFilter);
    }

    if (evFilter === 'high') {
        filtered = filtered.filter(bet => bet.ev >= 5);
    } else if (evFilter === 'medium') {
        filtered = filtered.filter(bet => bet.ev >= 2 && bet.ev < 5);
    }

    return filtered;
}

function getConfidenceClass(confidence) {
    if (confidence >= 80) return 'confidence-high';
    if (confidence >= 60) return 'confidence-medium';
    return 'confidence-low';
}

// Update stats
function updateStats(bets) {
    document.getElementById('totalBets').textContent = bets.length;

    const avgEV = bets.length > 0
        ? bets.reduce((sum, bet) => sum + bet.ev, 0) / bets.length
        : 0;
    document.getElementById('avgEV').textContent = `+${avgEV.toFixed(1)}%`;

    // Calculate total expected profit based on Kelly bet sizes
    const bankroll = getBankroll();
    const totalExpectedProfit = bets.reduce((sum, bet) => {
        const kelly = calculateKellyBetSize(bet.odds, bet.trueProb, bankroll);
        return sum + (kelly.amount * (bet.ev / 100));
    }, 0);
    document.getElementById('potentialProfit').textContent = `$${totalExpectedProfit.toFixed(0)}`;
}

// Filter bets
function filterBets() {
    const filtered = getFilteredBets();
    renderBets(filtered);
    updateActiveFiltersCount();
}

// Reset all filters to default
function resetFilters() {
    document.getElementById('sportFilter').value = 'all';
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('evFilter').value = 'all';
    document.getElementById('sortBy').value = 'ev';
    filterBets();
}

// Show/hide reset button based on active filters
function updateActiveFiltersCount() {
    const sport = document.getElementById('sportFilter').value;
    const category = document.getElementById('categoryFilter').value;
    const ev = document.getElementById('evFilter').value;

    let activeCount = 0;
    if (sport !== 'all') activeCount++;
    if (category !== 'all') activeCount++;
    if (ev !== 'all') activeCount++;

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.style.display = activeCount > 0 ? 'flex' : 'none';
    }
}

// Add filter event listeners
document.getElementById('sportFilter').addEventListener('change', filterBets);
document.getElementById('categoryFilter').addEventListener('change', filterBets);
document.getElementById('evFilter').addEventListener('change', filterBets);
document.getElementById('sortBy').addEventListener('change', filterBets);

// Update timestamp
function updateTimestamp() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const timestampEl = document.getElementById('lastUpdated');
    if (timestampEl) {
        timestampEl.textContent = `Last updated: ${dateStr} at ${timeStr}`;
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const oddsModal = document.getElementById('oddsModal');
    const apiModal = document.getElementById('apiModal');
    if (event.target === oddsModal) {
        oddsModal.style.display = 'none';
    }
    if (event.target === apiModal) {
        apiModal.style.display = 'none';
    }
}

// Check for saved API key on load
function checkSavedApiKey() {
    const savedKey = localStorage.getItem('oddsApiKey');
    if (savedKey) {
        apiKey = savedKey;
        document.getElementById('apiStatus').innerHTML = `
            <span class="status-dot connected"></span>
            <span>API Ready</span>
            <button class="icon-btn" onclick="fetchLiveOdds()" title="Fetch Live Odds">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
            </button>
        `;
    }
}

// EV Calculator
function calculateEV() {
    const oddsInput = document.getElementById('evOdds').value;
    const odds = parseFloat(oddsInput.replace('+', ''));
    const trueProb = parseFloat(document.getElementById('evProb').value) / 100;
    const stake = parseFloat(document.getElementById('evStake').value);

    const impliedProb = americanToProb(odds);
    const potentialWin = calculateProfit(odds, stake);
    const ev = (trueProb * potentialWin) - ((1 - trueProb) * stake);
    const edge = (trueProb - impliedProb) * 100;

    document.getElementById('impliedProb').textContent = `${(impliedProb * 100).toFixed(1)}%`;
    document.getElementById('evValue').textContent = `$${ev.toFixed(2)}`;
    document.getElementById('evValue').style.color = ev > 0 ? 'var(--profit)' : 'var(--loss)';
    document.getElementById('evEdge').textContent = `${edge > 0 ? '+' : ''}${edge.toFixed(2)}%`;
    document.getElementById('evEdge').style.color = edge > 0 ? 'var(--profit)' : 'var(--loss)';

    const verdict = ev > 0 ? 'VALUE BET - Place it!' : 'NO VALUE - Skip';
    document.getElementById('evVerdict').textContent = verdict;
    document.getElementById('evVerdict').style.color = ev > 0 ? 'var(--gold-400)' : 'var(--loss)';
}

// Kelly Criterion Calculator
function calculateKelly() {
    const oddsInput = document.getElementById('kellyOdds').value;
    const odds = parseFloat(oddsInput.replace('+', ''));
    const prob = parseFloat(document.getElementById('kellyProb').value) / 100;
    const bankroll = parseFloat(document.getElementById('kellyBankroll').value);

    const decimalOdds = americanToDecimal(odds);
    const b = decimalOdds - 1; // Decimal odds minus 1
    const q = 1 - prob;

    // Kelly formula: f* = (bp - q) / b
    const kellyFraction = Math.max(0, (b * prob - q) / b);

    const fullKelly = bankroll * kellyFraction;
    const halfKelly = fullKelly / 2;
    const quarterKelly = fullKelly / 4;

    document.getElementById('fullKelly').textContent = `$${fullKelly.toFixed(2)} (${(kellyFraction * 100).toFixed(1)}%)`;
    document.getElementById('halfKelly').textContent = `$${halfKelly.toFixed(2)} (${(kellyFraction * 50).toFixed(1)}%)`;
    document.getElementById('quarterKelly').textContent = `$${quarterKelly.toFixed(2)} (${(kellyFraction * 25).toFixed(1)}%)`;
}

// Odds Converter
function convertOdds() {
    const input = document.getElementById('convertOdds').value;
    const format = document.getElementById('oddsFormat').value;

    let american, decimal, impliedProb;

    if (format === 'american') {
        american = parseFloat(input.replace('+', ''));
        decimal = americanToDecimal(american);
    } else if (format === 'decimal') {
        decimal = parseFloat(input);
        if (decimal >= 2) {
            american = (decimal - 1) * 100;
        } else {
            american = -100 / (decimal - 1);
        }
    } else if (format === 'fractional') {
        const parts = input.split('/');
        const num = parseFloat(parts[0]);
        const den = parseFloat(parts[1] || 1);
        decimal = (num / den) + 1;
        if (decimal >= 2) {
            american = (decimal - 1) * 100;
        } else {
            american = -100 / (decimal - 1);
        }
    }

    impliedProb = 1 / decimal;

    // Convert to fractional
    const frac = decimal - 1;
    let fractional = '';
    if (frac >= 1) {
        fractional = `${Math.round(frac * 100)}/100`;
        // Simplify
        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
        const g = gcd(Math.round(frac * 100), 100);
        fractional = `${Math.round(frac * 100) / g}/${100 / g}`;
    } else {
        fractional = `${Math.round(frac * 100)}/${100}`;
    }

    document.getElementById('americanOdds').textContent = american >= 0 ? `+${american.toFixed(0)}` : american.toFixed(0);
    document.getElementById('decimalOdds').textContent = decimal.toFixed(2);
    document.getElementById('fractionalOdds').textContent = fractional;
    document.getElementById('convertProb').textContent = `${(impliedProb * 100).toFixed(1)}%`;
}

// Arbitrage Calculator
function calculateArb() {
    const odds1Input = document.getElementById('arbOdds1').value;
    const odds2Input = document.getElementById('arbOdds2').value;
    const totalStake = parseFloat(document.getElementById('arbTotal').value);

    const odds1 = parseFloat(odds1Input.replace('+', ''));
    const odds2 = parseFloat(odds2Input.replace('+', ''));

    const dec1 = americanToDecimal(odds1);
    const dec2 = americanToDecimal(odds2);

    const impliedSum = (1 / dec1) + (1 / dec2);
    const arbExists = impliedSum < 1;

    if (arbExists) {
        const stake1 = totalStake * (1 / dec1) / impliedSum;
        const stake2 = totalStake * (1 / dec2) / impliedSum;
        const payout = stake1 * dec1; // Same as stake2 * dec2
        const profit = payout - totalStake;

        document.getElementById('arbExists').textContent = 'YES';
        document.getElementById('arbExists').style.color = 'var(--profit)';
        document.getElementById('arbBet1').textContent = `$${stake1.toFixed(2)}`;
        document.getElementById('arbBet2').textContent = `$${stake2.toFixed(2)}`;
        document.getElementById('arbProfit').textContent = `$${profit.toFixed(2)} (${((profit / totalStake) * 100).toFixed(2)}%)`;
        document.getElementById('arbProfit').style.color = 'var(--profit)';
    } else {
        document.getElementById('arbExists').textContent = 'NO';
        document.getElementById('arbExists').style.color = 'var(--loss)';
        document.getElementById('arbBet1').textContent = '--';
        document.getElementById('arbBet2').textContent = '--';
        document.getElementById('arbProfit').textContent = `Loss: ${((impliedSum - 1) * 100).toFixed(2)}% edge to books`;
        document.getElementById('arbProfit').style.color = 'var(--loss)';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBets(valueBets);
    checkSavedApiKey();
    updateTimestamp();
});
