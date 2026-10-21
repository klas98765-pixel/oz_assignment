
const API_URL = "https://api4.binance.com/api/v3/ticker/24hr";

// HTML 요소 선택
const searchInput = document.querySelector("#searchInput");
const allTab = document.querySelector("#allTab");
const favoritesTab = document.querySelector("#favoritesTab");
const coinList = document.querySelector("#coinList");
const coinCount = document.querySelector("#coinCount");
const updatedAt = document.querySelector("#updatedAt");
const statusText = document.querySelector("#statusText");
const emptyMessage = document.querySelector("#emptyMessage");

// 코인 데이터
let coins = [];
let currentTab = "all";
let isFetching = false;

// 관심 코인 불러오기
let favorites = [];

try {
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!Array.isArray(favorites)) {
        favorites = [];
    }
} catch (error) {
    favorites = [];
}

// 1. 실시간 가격 가져오기
async function fetchPrices() {
    if (isFetching) return;

    isFetching = true;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("API 오류: " + response.status);
        }

        const data = await response.json();

        // USDT 코인만 선택
        coins = data.filter(coin =>
            coin.symbol.endsWith("USDT")
        );

        renderCoins();

        statusText.textContent = "● 실시간 연결 중";
        statusText.style.color = "green";

        updatedAt.textContent =
            "업데이트: " + new Date().toLocaleTimeString();

    } catch (error) {
        console.error(error);
        statusText.textContent = "● 데이터 연결 실패";
        statusText.style.color = "red";
    } finally {
        isFetching = false;
    }
}

// 2. 코인 목록 출력
function renderCoins() {
    const keyword = searchInput.value.toUpperCase().trim();

    let filteredCoins = coins.filter(coin =>
        coin.symbol.includes(keyword)
    );

    if (currentTab === "favorites") {
        filteredCoins = filteredCoins.filter(coin =>
            favorites.includes(coin.symbol)
        );
    }

    coinList.innerHTML = "";

    filteredCoins.forEach(coin => {
        const row = document.createElement("tr");

        // 관심목록 버튼
        const favoriteCell = document.createElement("td");
        const favoriteButton = document.createElement("button");

        const isFavorite = favorites.includes(coin.symbol);

        favoriteButton.textContent = isFavorite ? "★" : "☆";
        favoriteButton.className =
            "favorite-btn" + (isFavorite ? " selected" : "");

        favoriteButton.addEventListener("click", () => {
            toggleFavorite(coin.symbol);
        });

        favoriteCell.appendChild(favoriteButton);

        // 코인 이름
        const symbolCell = document.createElement("td");
        symbolCell.textContent = coin.symbol;

        // 현재 가격
        const priceCell = document.createElement("td");
        priceCell.textContent = Number(coin.lastPrice)
            .toLocaleString("en-US", {
                maximumFractionDigits: 8
            });

        // 24시간 변동률
        const changeCell = document.createElement("td");
        const change = Number(coin.priceChangePercent);

        changeCell.textContent =
            (change > 0 ? "+" : "") + change.toFixed(2) + "%";

        changeCell.className =
            change >= 0 ? "positive" : "negative";

        row.append(
            favoriteCell,
            symbolCell,
            priceCell,
            changeCell
        );

        coinList.appendChild(row);
    });

    coinCount.textContent =
        "총 " + filteredCoins.length + "개 코인";

    emptyMessage.hidden = filteredCoins.length > 0;
}

// 3. 관심 코인 추가 및 삭제
function toggleFavorite(symbol) {
    if (favorites.includes(symbol)) {
        favorites = favorites.filter(item => item !== symbol);
    } else {
        favorites.push(symbol);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    renderCoins();
}

// 4. 검색 기능
searchInput.addEventListener("input", () => {
    renderCoins();
});

// 5. 전체보기 탭
allTab.addEventListener("click", () => {
    currentTab = "all";

    allTab.classList.add("active");
    favoritesTab.classList.remove("active");

    renderCoins();
});

// 6. 관심목록 탭
favoritesTab.addEventListener("click", () => {
    currentTab = "favorites";

    favoritesTab.classList.add("active");
    allTab.classList.remove("active");

    renderCoins();
});

// 7. 최초 실행 및 1초마다 데이터 요청
fetchPrices();

setInterval(fetchPrices, 1000);
