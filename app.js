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

// Render bets table with detailed odds comparison and place bet buttons
function renderBets(bets) {
    const tbody = document.getElementById('betsTableBody');
    tbody.innerHTML = '';

    bets.forEach((bet, index) => {
        const profit = calculateProfit(bet.odds, 100);
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
            <td class="profit-value">+$${profit.toFixed(2)}</td>
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
    const bet = getFilteredBets()[betIndex];
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
    apiKey = keyInput.value.trim();

    if (!apiKey) {
        alert('Please enter an API key');
        return;
    }

    localStorage.setItem('oddsApiKey', apiKey);
    closeApiModal();
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

    try {
        // Fetch NBA odds as example
        const response = await fetch(
            `https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads,totals&oddsFormat=american`
        );

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        const remaining = response.headers.get('x-requests-remaining');

        statusEl.innerHTML = `
            <span class="status-dot connected"></span>
            <span>Live - ${remaining} requests remaining</span>
            <button class="api-btn" onclick="fetchLiveOdds()">Refresh</button>
        `;

        // Process and display live odds
        processLiveOdds(data);

    } catch (error) {
        console.error('API Error:', error);
        statusEl.innerHTML = `
            <span class="status-dot error"></span>
            <span>Error connecting - check API key</span>
            <button class="api-btn" onclick="showApiModal()">Reconnect</button>
        `;
    }
}

// Process live odds data from API
function processLiveOdds(data) {
    if (!data || data.length === 0) return;

    const liveValueBets = [];

    data.forEach(game => {
        const bookmakers = game.bookmakers;
        if (!bookmakers || bookmakers.length < 2) return;

        // Find Pinnacle (sharp) and soft books
        const pinnacle = bookmakers.find(b => b.key === 'pinnacle');
        const softBooks = bookmakers.filter(b =>
            ['fanduel', 'draftkings', 'betmgm', 'caesars'].includes(b.key)
        );

        if (!pinnacle || softBooks.length === 0) return;

        // Check h2h (moneyline) market
        const pinnacleH2h = pinnacle.markets?.find(m => m.key === 'h2h');
        if (!pinnacleH2h) return;

        softBooks.forEach(softBook => {
            const softH2h = softBook.markets?.find(m => m.key === 'h2h');
            if (!softH2h) return;

            softH2h.outcomes.forEach((outcome, i) => {
                const pinnacleOutcome = pinnacleH2h.outcomes.find(o => o.name === outcome.name);
                if (!pinnacleOutcome) return;

                const softOdds = outcome.price;
                const sharpOdds = pinnacleOutcome.price;

                // Calculate if there's value
                const softProb = americanToProb(softOdds);
                const sharpProb = americanToProb(sharpOdds);
                const edge = (sharpProb - softProb) * 100;

                if (edge > 2) { // Only show if 2%+ edge
                    liveValueBets.push({
                        sport: 'nba',
                        sportName: 'NBA',
                        event: `${game.home_team} vs ${game.away_team}`,
                        betType: 'Moneyline',
                        category: 'game',
                        selection: `${outcome.name} ${softOdds > 0 ? '+' : ''}${softOdds}`,
                        odds: softOdds,
                        sharpOdds: sharpOdds,
                        softBook: formatBookName(softBook.key),
                        sharpBook: 'Pinnacle',
                        trueProb: sharpProb,
                        ev: edge,
                        confidence: Math.min(95, 60 + edge * 3),
                        isLive: false
                    });
                }
            });
        });
    });

    if (liveValueBets.length > 0) {
        // Replace demo data with live data
        valueBets.length = 0;
        valueBets.push(...liveValueBets);
        renderBets(valueBets);
    }
}

function formatBookName(key) {
    const names = {
        'fanduel': 'FanDuel',
        'draftkings': 'DraftKings',
        'betmgm': 'BetMGM',
        'caesars': 'Caesars',
        'pointsbet': 'PointsBet',
        'betrivers': 'BetRivers'
    };
    return names[key] || key;
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

    const avgEV = bets.reduce((sum, bet) => sum + bet.ev, 0) / bets.length;
    document.getElementById('avgEV').textContent = `+${avgEV.toFixed(1)}%`;

    const totalProfit = bets.reduce((sum, bet) => sum + calculateProfit(bet.odds, 100) * (bet.ev / 100), 0);
    document.getElementById('potentialProfit').textContent = `$${totalProfit.toFixed(2)}`;
}

// Filter bets
function filterBets() {
    const filtered = getFilteredBets();
    renderBets(filtered);
}

// Add filter event listeners
document.getElementById('sportFilter').addEventListener('change', filterBets);
document.getElementById('categoryFilter').addEventListener('change', filterBets);
document.getElementById('evFilter').addEventListener('change', filterBets);

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
            <span>API Connected</span>
            <button class="api-btn" onclick="fetchLiveOdds()">Fetch Live Odds</button>
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
    document.getElementById('evValue').style.color = ev > 0 ? 'var(--accent-green)' : 'var(--accent-red)';
    document.getElementById('evEdge').textContent = `${edge > 0 ? '+' : ''}${edge.toFixed(2)}%`;
    document.getElementById('evEdge').style.color = edge > 0 ? 'var(--accent-green)' : 'var(--accent-red)';

    const verdict = ev > 0 ? 'VALUE BET - Place it!' : 'NO VALUE - Skip';
    document.getElementById('evVerdict').textContent = verdict;
    document.getElementById('evVerdict').style.color = ev > 0 ? 'var(--accent-green)' : 'var(--accent-red)';
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
        document.getElementById('arbExists').style.color = 'var(--accent-green)';
        document.getElementById('arbBet1').textContent = `$${stake1.toFixed(2)}`;
        document.getElementById('arbBet2').textContent = `$${stake2.toFixed(2)}`;
        document.getElementById('arbProfit').textContent = `$${profit.toFixed(2)} (${((profit / totalStake) * 100).toFixed(2)}%)`;
        document.getElementById('arbProfit').style.color = 'var(--accent-green)';
    } else {
        document.getElementById('arbExists').textContent = 'NO';
        document.getElementById('arbExists').style.color = 'var(--accent-red)';
        document.getElementById('arbBet1').textContent = '--';
        document.getElementById('arbBet2').textContent = '--';
        document.getElementById('arbProfit').textContent = `Loss: ${((impliedSum - 1) * 100).toFixed(2)}% edge to books`;
        document.getElementById('arbProfit').style.color = 'var(--accent-red)';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBets(valueBets);
    checkSavedApiKey();
});
