/**
 * IELTS Master Hub - Application Logic
 */

// Initial Curated Dataset (High-quality IELTS Videos)
const INITIAL_VIDEOS = [
    {
        id: "v8qR3y9Q7QY",
        title: "IELTS Writing Task 2: Everything You Need to Know (Band 7.0+ Guide)",
        channel: "IELTS Advantage",
        category: "writing",
        targetBand: "7.0",
        duration: "28:45",
        views: 2450000,
        publishedAt: "2023-04-12",
        tags: ["IELTS Advantage", "Task 2", "템플릿", "writing"],
        description: "In this masterclass, learn the step-by-step structure required to score Band 7 or higher in IELTS Writing Task 2. Covers essay planning, topic sentences, and vocabulary."
    },
    {
        id: "P0d-JvR5Yg0",
        title: "IELTS Speaking Mock Test Band 8.0 - Full Interview Sample & Analysis",
        channel: "E2 IELTS",
        category: "speaking",
        targetBand: "8.0",
        duration: "18:20",
        views: 1820000,
        publishedAt: "2023-08-05",
        tags: ["E2 IELTS", "Speaking", "실전모의", "speaking"],
        description: "Watch a realistic IELTS Speaking test simulation with a candidate receiving a Band 8.0 score. Detailed commentary breakdown included for Part 1, Part 2, and Part 3."
    },
    {
        id: "J3_C4_mK2vw",
        title: "아이엘츠 독학으로 첫 시험 7.5 달성한 현실적인 공부법 & 시간표 공개",
        channel: "엠마의 IELTS",
        category: "beginner",
        targetBand: "7.0",
        duration: "14:10",
        views: 340000,
        publishedAt: "2024-01-15",
        tags: ["독학", "초보가이드", "공부법", "beginner"],
        description: "베이스 없이 시작해서 2달 만에 Overall 7.5 완성한 실전 공부 루틴. 영역별 추천 교재 및 단어 암기 팁 전격 공개!"
    },
    {
        id: "1zLhQyF9fG8",
        title: "IELTS Reading True/False/Not Given 완전 정복 스킬 5가지",
        channel: "IELTS Liz",
        category: "reading",
        targetBand: "6.0",
        duration: "15:40",
        views: 980000,
        publishedAt: "2023-02-20",
        tags: ["IELTS Liz", "Reading", "TFNG", "reading"],
        description: "IELTS 리딩에서 가장 헷갈리는 True, False, Not Given 문제 해결법. 지문 패러프레이징 찾는 키워드 스캐닝 기법 명쾌 정리."
    },
    {
        id: "k9xL80Q_A4k",
        title: "아이엘츠 리스닝 Section 1-4 만점 보장 패러프레이징 법칙",
        channel: "시원스쿨 IELTS",
        category: "listening",
        targetBand: "7.0",
        duration: "21:15",
        views: 450000,
        publishedAt: "2023-11-02",
        tags: ["Listening", "리스닝", "패러프레이징", "listening"],
        description: "듣기에서 음성과 선택지 간의 동의어 변환 패턴을 완벽히 정복합니다. 숫자, 이름, 주소 쓰기 감점 방지 팁 포함."
    },
    {
        id: "aX9-wJ8_Q2c",
        title: "IELTS Speaking Part 2 브레인스토밍 10초 만에 끝내는 마법 템플릿",
        channel: "E2 IELTS",
        category: "speaking",
        targetBand: "7.0",
        duration: "12:50",
        views: 1150000,
        publishedAt: "2023-06-18",
        tags: ["E2 IELTS", "Speaking", "템플릿", "speaking"],
        description: "Part 2 큐카드(Cue Card) 발표 시 2분 동안 막힘없이 말할 수 있는 스토리텔링 구조와 만능 형용사 20선."
    },
    {
        id: "R7b_v0_N9xY",
        title: "IELTS Writing Task 1 그래프/표 완벽 요약 서론-본론 템플릿 모음",
        channel: "IELTS Advantage",
        category: "writing",
        targetBand: "6.0",
        duration: "24:05",
        views: 890000,
        publishedAt: "2023-09-29",
        tags: ["IELTS Advantage", "Task 1", "템플릿", "writing"],
        description: "Line Graph, Bar Chart, Pie Chart, Process Diagram 수치 비교 공식 및 수동태 필수 문형 모음."
    },
    {
        id: "tM4_p2_W7yZ",
        title: "아이엘츠 필수 고득점 어휘 100선 (Band 7.0+ C1 Academic Vocab)",
        channel: "해커스 IELTS",
        category: "vocab",
        targetBand: "8.0",
        duration: "35:10",
        views: 670000,
        publishedAt: "2024-02-10",
        tags: ["vocab", "어휘", "단어", "Band 8.0"],
        description: "라이팅과 스피킹에서 구태의연한 표현(good, bad, important)을 고난도 아카데믹 어휘로 교체하는 100가지 패러프레이징 집합."
    },
    {
        id: "mL8_q9_K1xW",
        title: "IELTS Reading 시간 부족 해결법: Skimming & Scanning 훈련법",
        channel: "IELTS Liz",
        category: "reading",
        targetBand: "7.0",
        duration: "17:30",
        views: 1420000,
        publishedAt: "2023-05-14",
        tags: ["IELTS Liz", "Reading", "리딩시간", "reading"],
        description: "60분 안에 3개 패세지(40문항)를 다 풀지 못하는 수험생을 위한 문제 유형별 풀이 순서 및 타이밍 분배 전략."
    },
    {
        id: "xK9_m2_L7vP",
        title: "아이엘츠 처음 시작할 때 꼭 알아야 할 Academic vs General 모듈 차이점",
        channel: "아이엘츠 달인",
        category: "beginner",
        targetBand: "all",
        duration: "09:45",
        views: 210000,
        publishedAt: "2024-03-01",
        tags: ["초보가이드", "입문", "beginner"],
        description: "유학용 아카데믹 모듈과 이민/취업용 제너럴 트레이닝 모듈의 차이점, 점수 계산표, 접수 방법 총정리."
    },
    {
        id: "wP3_n8_B6vR",
        title: "IELTS Speaking Part 3 감점 피하는 오프토픽 방지 및 억양/발음 법칙",
        channel: "IELTS Advantage",
        category: "speaking",
        targetBand: "8.0",
        duration: "22:15",
        views: 790000,
        publishedAt: "2023-12-04",
        tags: ["IELTS Advantage", "Speaking", "strategy"],
        description: "Part 3 추상적인 심화 질문에 대해 논리적으로 이유와 예시를 들어 답변을 확장하는 방법."
    },
    {
        id: "zN2_v7_M9yK",
        title: "아이엘츠 라이팅 문법 실수를 90% 줄여주는 문장 검수 체크리스트",
        channel: "시원스쿨 IELTS",
        category: "writing",
        targetBand: "7.0",
        duration: "16:50",
        views: 310000,
        publishedAt: "2024-01-22",
        tags: ["writing", "문법", "체크리스트"],
        description: "수 일치, 시제 오르내림, 관사(a/the) 오류, 복합문 관계대명사 매칭 등 감점 요소 방지법."
    }
];

// App State Management
const state = {
    videos: [...INITIAL_VIDEOS],
    filteredVideos: [],
    currentCategory: 'all',
    selectedTag: 'all',
    searchQuery: '',
    sortOption: 'recommended',
    targetBandFilter: 'all',
    
    // User Storage Data
    favorites: JSON.parse(localStorage.getItem('ielts_favs') || '[]'),
    completed: JSON.parse(localStorage.getItem('ielts_completed') || '[]'),
    notes: JSON.parse(localStorage.getItem('ielts_notes') || '{}'),
    apiKey: localStorage.getItem('ielts_yt_api_key') || '',
    
    activeVideo: null
};

// DOM Elements
const elements = {
    sidebar: document.getElementById('sidebar'),
    mobileToggle: document.getElementById('mobile-toggle'),
    navItems: document.querySelectorAll('.nav-item'),
    favCountBadge: document.getElementById('fav-count'),
    completedCountBadge: document.getElementById('completed-count'),
    
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    sortSelect: document.getElementById('sort-select'),
    targetSelect: document.getElementById('target-select'),
    
    categoryTitle: document.getElementById('category-title'),
    categoryDesc: document.getElementById('category-desc'),
    totalVideosCount: document.getElementById('total-videos-count'),
    quickTagsContainer: document.getElementById('quick-tags-container'),
    
    videoGrid: document.getElementById('video-grid'),
    emptyState: document.getElementById('empty-state'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),
    
    // Modal
    videoModal: document.getElementById('video-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    youtubeIframe: document.getElementById('youtube-iframe'),
    modalVideoTitle: document.getElementById('modal-video-title'),
    modalChannelName: document.getElementById('modal-channel-name'),
    modalViews: document.getElementById('modal-views'),
    modalDate: document.getElementById('modal-date'),
    modalDescription: document.getElementById('modal-description'),
    modalTags: document.getElementById('modal-tags'),
    modalFavBtn: document.getElementById('modal-fav-btn'),
    modalCompleteBtn: document.getElementById('modal-complete-btn'),
    modalYtLink: document.getElementById('modal-yt-link'),
    
    videoNoteInput: document.getElementById('video-note-input'),
    charCount: document.getElementById('char-count'),
    saveNoteBtn: document.getElementById('save-note-btn'),
    noteSaveStatus: document.getElementById('note-save-status'),
    
    // API Modal
    openApiModalBtn: document.getElementById('open-api-modal-btn'),
    apiModal: document.getElementById('api-modal'),
    apiModalCloseBtn: document.getElementById('api-modal-close-btn'),
    apiKeyInput: document.getElementById('api-key-input'),
    saveApiKeyBtn: document.getElementById('save-api-key-btn'),
    clearApiKeyBtn: document.getElementById('clear-api-key-btn'),
    
    // Stats
    dailyProgress: document.getElementById('daily-progress'),
    completedText: document.getElementById('completed-text'),
    streakText: document.getElementById('streak-text'),
    toastContainer: document.getElementById('toast-container')
};

// Initialize App
function initApp() {
    setupEventListeners();
    updateBadges();
    updateStatsDashboard();
    
    if (state.apiKey) {
        elements.apiKeyInput.value = state.apiKey;
    }
    
    applyFiltersAndRender();
}

// Category Info Configuration
const CATEGORY_INFO = {
    all: {
        title: "전체 아이엘츠 꿀팁 & 강의",
        desc: "검증된 아이엘츠 전문 채널의 듣기, 읽기, 쓰기, 말하기 전략 영상과 실전 팁을 한눈에 학습해보세요."
    },
    listening: {
        title: "IELTS Listening (듣기 영역)",
        desc: "영국/호주/미국 억양 적응, Section 1-4 문제 유형별 패러프레이징 캐치법 및 디테일 청취 팁."
    },
    reading: {
        title: "IELTS Reading (읽기 영역)",
        desc: "True/False/Not Given, Heading Matching, Summary Completion 스키밍/스캐닝 속독 스킬."
    },
    writing: {
        title: "IELTS Writing (쓰기 영역)",
        desc: "Task 1 도표 분석 공식 & Task 2 에세이 4단 구조 템플릿, Coherence & Cohesion 7.0+ 작성법."
    },
    speaking: {
        title: "IELTS Speaking (말하기 영역)",
        desc: "Part 1, 2, 3 질문별 브레인스토밍 템플릿, 자연스러운 유창성(Fluency) 및 고급 연어(Collocation) 모음."
    },
    beginner: {
        title: "초보 입문 가이드 & 독학 노하우",
        desc: "아이엘츠 처음 시작하는 수험생을 위한 모듈 선택, 점수 계산, 오버롤 6.5 - 7.5 독학 플랜."
    },
    vocab: {
        title: "IELTS 필수 어휘 & 표현",
        desc: "Band 7.0+ 아카데믹 핵심 단어, 6.0 단어를 8.0 단어로 바꿔주는 동의어 패러프레이징 족보."
    },
    strategy: {
        title: "Band 7.0+ 고득점 실전 전략",
        desc: "채점관 시점에서의 4대 영역 감점 요인 피하기 & 만점자들의 시험장 오답 검수 실전 노하우."
    },
    favorites: {
        title: "내가 즐겨찾기한 영상",
        desc: "나중에 다시 복습하고 싶은 핵심 아이엘츠 레스닝, 템플릿, 공부법 영상을 모아서 확인하세요."
    },
    history: {
        title: "수강 완료한 학습 목록",
        desc: "시청을 완료한 영상들입니다. 꾸준한 학습으로 목표 Band Score를 달성하세요!"
    }
};

// Filter & Sort Logic
function applyFiltersAndRender() {
    let list = [...state.videos];
    
    // 1. Category Filter
    if (state.currentCategory === 'favorites') {
        list = list.filter(v => state.favorites.includes(v.id));
    } else if (state.currentCategory === 'history') {
        list = list.filter(v => state.completed.includes(v.id));
    } else if (state.currentCategory !== 'all') {
        list = list.filter(v => v.category === state.currentCategory);
    }
    
    // 2. Tag Filter
    if (state.selectedTag !== 'all') {
        list = list.filter(v => 
            v.channel.includes(state.selectedTag) || 
            v.tags.some(t => t.toLowerCase().includes(state.selectedTag.toLowerCase()))
        );
    }
    
    // 3. Search Query Filter
    if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase();
        list = list.filter(v => 
            v.title.toLowerCase().includes(query) ||
            v.channel.toLowerCase().includes(query) ||
            v.description.toLowerCase().includes(query) ||
            v.tags.some(t => t.toLowerCase().includes(query))
        );
    }
    
    // 4. Target Band Filter
    if (state.targetBandFilter !== 'all') {
        list = list.filter(v => v.targetBand === state.targetBandFilter || v.targetBand === 'all');
    }
    
    // 5. Sorting
    if (state.sortOption === 'popular') {
        list.sort((a, b) => b.views - a.views);
    } else if (state.sortOption === 'latest') {
        list.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    }
    
    state.filteredVideos = list;
    renderVideoGrid(list);
}

// Render Video Grid Cards
function renderVideoGrid(videos) {
    elements.totalVideosCount.textContent = `총 ${videos.length}개 영상`;
    
    if (videos.length === 0) {
        elements.videoGrid.innerHTML = '';
        elements.emptyState.classList.remove('hidden');
        return;
    }
    
    elements.emptyState.classList.add('hidden');
    
    elements.videoGrid.innerHTML = videos.map(v => {
        const isFav = state.favorites.includes(v.id);
        const isCompleted = state.completed.includes(v.id);
        const formattedViews = (v.views / 10000).toFixed(1) + '만회';
        const thumbUrl = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
        
        return `
            <div class="video-card" data-id="${v.id}">
                <div class="thumbnail-wrap">
                    <img src="${thumbUrl}" alt="${v.title}" loading="lazy">
                    <div class="play-overlay">
                        <div class="play-btn-circle"><i class="fa-solid fa-play"></i></div>
                    </div>
                    <span class="duration-badge">${v.duration}</span>
                    <span class="band-tag-badge">Target ${v.targetBand}</span>
                    ${isCompleted ? '<div class="completed-check-icon"><i class="fa-solid fa-check"></i></div>' : ''}
                </div>
                <div class="card-content">
                    <div class="card-tags-row">
                        <span class="mini-tag ${v.category}">${v.category.toUpperCase()}</span>
                        ${v.tags.slice(0, 2).map(t => `<span class="mini-tag">#${t}</span>`).join('')}
                    </div>
                    <h3 class="card-title">${v.title}</h3>
                    <div class="card-meta">
                        <span class="channel-name-txt"><i class="fa-brands fa-youtube"></i> ${v.channel}</span>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span><i class="fa-regular fa-eye"></i> ${formattedViews}</span>
                            <button class="fav-btn-icon ${isFav ? 'active' : ''}" data-id="${v.id}" title="즐겨찾기">
                                <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Open Video Player Modal
function openVideoModal(videoId) {
    const video = state.videos.find(v => v.id === videoId);
    if (!video) return;
    
    state.activeVideo = video;
    
    elements.youtubeIframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
    elements.modalVideoTitle.textContent = video.title;
    elements.modalChannelName.textContent = video.channel;
    elements.modalViews.textContent = `조회수 ${(video.views / 10000).toFixed(1)}만회`;
    elements.modalDate.textContent = `등록일 ${video.publishedAt}`;
    elements.modalDescription.textContent = video.description;
    elements.modalYtLink.href = `https://www.youtube.com/watch?v=${video.id}`;
    
    // Render Modal Tags
    elements.modalTags.innerHTML = `
        <span class="mini-tag ${video.category}">${video.category.toUpperCase()}</span>
        <span class="band-tag-badge" style="position:static;">Target ${video.targetBand}</span>
    ` + video.tags.map(t => `<span class="mini-tag">#${t}</span>`).join('');
    
    // Update Action Buttons State
    updateModalActionButtons();
    
    // Load Note
    const savedNote = state.notes[video.id] || '';
    elements.videoNoteInput.value = savedNote;
    elements.charCount.textContent = savedNote.length;
    elements.noteSaveStatus.textContent = savedNote ? '저장된 노트 있음' : '작성 중...';
    
    elements.videoModal.classList.remove('hidden');
}

function closeVideoModal() {
    elements.videoModal.classList.add('hidden');
    elements.youtubeIframe.src = '';
    state.activeVideo = null;
}

function updateModalActionButtons() {
    if (!state.activeVideo) return;
    const id = state.activeVideo.id;
    const isFav = state.favorites.includes(id);
    const isCompleted = state.completed.includes(id);
    
    elements.modalFavBtn.className = `action-btn ${isFav ? 'active-fav' : ''}`;
    elements.modalFavBtn.innerHTML = `<i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i> ${isFav ? '즐겨찾기 해제' : '즐겨찾기 추가'}`;
    
    elements.modalCompleteBtn.className = `action-btn ${isCompleted ? 'active-completed' : ''}`;
    elements.modalCompleteBtn.innerHTML = `<i class="${isCompleted ? 'fa-solid' : 'fa-regular'} fa-circle-check"></i> ${isCompleted ? '학습 완료됨' : '학습 완료 표시'}`;
}

// Toggle Favorites
function toggleFavorite(videoId) {
    const idx = state.favorites.indexOf(videoId);
    if (idx > -1) {
        state.favorites.splice(idx, 1);
        showToast('즐겨찾기에서 삭제되었습니다.');
    } else {
        state.favorites.push(videoId);
        showToast('즐겨찾기에 추가되었습니다! ⭐');
    }
    localStorage.setItem('ielts_favs', JSON.stringify(state.favorites));
    updateBadges();
    updateModalActionButtons();
    applyFiltersAndRender();
}

// Toggle Completed
function toggleCompleted(videoId) {
    const idx = state.completed.indexOf(videoId);
    if (idx > -1) {
        state.completed.splice(idx, 1);
        showToast('학습 완료가 취소되었습니다.');
    } else {
        state.completed.push(videoId);
        showToast('학습 완료! 수고하셨습니다. 🎉');
    }
    localStorage.setItem('ielts_completed', JSON.stringify(state.completed));
    updateBadges();
    updateStatsDashboard();
    updateModalActionButtons();
    applyFiltersAndRender();
}

// Save Note
function saveNote() {
    if (!state.activeVideo) return;
    const id = state.activeVideo.id;
    const text = elements.videoNoteInput.value.trim();
    
    if (text) {
        state.notes[id] = text;
    } else {
        delete state.notes[id];
    }
    
    localStorage.setItem('ielts_notes', JSON.stringify(state.notes));
    elements.noteSaveStatus.textContent = '자동 저장 완료!';
    showToast('공부 노트가 저장되었습니다. 📝');
}

// Update Badges & Dashboard Stats
function updateBadges() {
    elements.favCountBadge.textContent = state.favorites.length;
    elements.completedCountBadge.textContent = state.completed.length;
}

function updateStatsDashboard() {
    const totalCompleted = state.completed.length;
    const targetDaily = 3;
    const percent = Math.min(100, Math.round((totalCompleted / targetDaily) * 100));
    
    elements.dailyProgress.style.width = `${percent}%`;
    elements.completedText.textContent = `${totalCompleted}개 완료`;
    elements.streakText.textContent = `🔥 1일째`;
}

// Toast Notifications
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Live YouTube Search API Integration
async function searchYouTubeAPI(query) {
    if (!state.apiKey) {
        showToast('YouTube API Key가 설정되지 않았습니다. 기본 엄선 목록을 사용합니다.');
        return;
    }
    
    try {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(query + " 아이엘츠 IELTS")}&type=video&key=${state.apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        
        if (data.items && data.items.length > 0) {
            const apiVideos = data.items.map(item => ({
                id: item.id.videoId,
                title: item.snippet.title,
                channel: item.snippet.channelTitle,
                category: state.currentCategory === 'all' ? 'speaking' : state.currentCategory,
                targetBand: "7.0",
                duration: "15:00",
                views: 50000,
                publishedAt: item.snippet.publishedAt.split('T')[0],
                tags: ["유튜브실시간", "IELTS"],
                description: item.snippet.description
            }));
            
            state.videos = [...apiVideos, ...INITIAL_VIDEOS];
            applyFiltersAndRender();
            showToast('유튜브 실시간 데이터 검색 완료!');
        } else {
            showToast('유튜브 API 검색 결과가 없거나 오류가 발생했습니다.');
        }
    } catch (err) {
        console.error('YouTube API Error:', err);
        showToast('API호출에 실패했습니다. 키를 확인해 주세요.');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Sidebar Nav
    elements.navItems.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.navItems.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const cat = btn.dataset.category;
            state.currentCategory = cat;
            
            if (CATEGORY_INFO[cat]) {
                elements.categoryTitle.textContent = CATEGORY_INFO[cat].title;
                elements.categoryDesc.textContent = CATEGORY_INFO[cat].desc;
            }
            
            applyFiltersAndRender();
            
            // Close mobile menu if open
            elements.sidebar.classList.remove('open');
        });
    });
    
    // Mobile Toggle
    elements.mobileToggle.addEventListener('click', () => {
        elements.sidebar.classList.toggle('open');
    });
    
    // Search Bar Input
    elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.searchQuery) {
            elements.clearSearchBtn.classList.remove('hidden');
        } else {
            elements.clearSearchBtn.classList.add('hidden');
        }
        applyFiltersAndRender();
    });
    
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && state.apiKey && state.searchQuery) {
            searchYouTubeAPI(state.searchQuery);
        }
    });
    
    elements.clearSearchBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.searchQuery = '';
        elements.clearSearchBtn.classList.add('hidden');
        applyFiltersAndRender();
    });
    
    // Sort Select
    elements.sortSelect.addEventListener('change', (e) => {
        state.sortOption = e.target.value;
        applyFiltersAndRender();
    });
    
    // Target Band Select
    elements.targetSelect.addEventListener('change', (e) => {
        state.targetBandFilter = e.target.value;
        applyFiltersAndRender();
    });
    
    // Quick Tag Buttons
    elements.quickTagsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tag-btn')) {
            document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            state.selectedTag = e.target.dataset.tag;
            applyFiltersAndRender();
        }
    });
    
    // Reset Filters Button
    elements.resetFiltersBtn.addEventListener('click', () => {
        state.searchQuery = '';
        state.selectedTag = 'all';
        state.currentCategory = 'all';
        state.targetBandFilter = 'all';
        state.sortOption = 'recommended';
        
        elements.searchInput.value = '';
        elements.clearSearchBtn.classList.add('hidden');
        elements.targetSelect.value = 'all';
        elements.sortSelect.value = 'recommended';
        
        document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.tag-btn[data-tag="all"]').classList.add('active');
        
        elements.navItems.forEach(b => b.classList.remove('active'));
        document.querySelector('.nav-item[data-category="all"]').classList.add('active');
        
        elements.categoryTitle.textContent = CATEGORY_INFO.all.title;
        elements.categoryDesc.textContent = CATEGORY_INFO.all.desc;
        
        applyFiltersAndRender();
    });
    
    // Video Card Click (Open Modal or Toggle Fav)
    elements.videoGrid.addEventListener('click', (e) => {
        const favBtn = e.target.closest('.fav-btn-icon');
        if (favBtn) {
            e.stopPropagation();
            toggleFavorite(favBtn.dataset.id);
            return;
        }
        
        const card = e.target.closest('.video-card');
        if (card) {
            openVideoModal(card.dataset.id);
        }
    });
    
    // Video Modal Actions
    elements.modalCloseBtn.addEventListener('click', closeVideoModal);
    elements.videoModal.addEventListener('click', (e) => {
        if (e.target === elements.videoModal) closeVideoModal();
    });
    
    elements.modalFavBtn.addEventListener('click', () => {
        if (state.activeVideo) toggleFavorite(state.activeVideo.id);
    });
    
    elements.modalCompleteBtn.addEventListener('click', () => {
        if (state.activeVideo) toggleCompleted(state.activeVideo.id);
    });
    
    // Notes Logic
    elements.videoNoteInput.addEventListener('input', (e) => {
        elements.charCount.textContent = e.target.value.length;
        elements.noteSaveStatus.textContent = '수정됨...';
    });
    
    elements.saveNoteBtn.addEventListener('click', saveNote);
    
    // API Modal Handlers
    elements.openApiModalBtn.addEventListener('click', () => {
        elements.apiModal.classList.remove('hidden');
    });
    elements.apiModalCloseBtn.addEventListener('click', () => {
        elements.apiModal.classList.add('hidden');
    });
    elements.saveApiKeyBtn.addEventListener('click', () => {
        const key = elements.apiKeyInput.value.trim();
        state.apiKey = key;
        localStorage.setItem('ielts_yt_api_key', key);
        elements.apiModal.classList.add('hidden');
        showToast('YouTube API Key가 저장되었습니다!');
    });
    elements.clearApiKeyBtn.addEventListener('click', () => {
        state.apiKey = '';
        localStorage.removeItem('ielts_yt_api_key');
        elements.apiKeyInput.value = '';
        elements.apiModal.classList.add('hidden');
        showToast('API Key가 삭제되었습니다.');
    });
}

// Start application when DOM loaded
document.addEventListener('DOMContentLoaded', initApp);
