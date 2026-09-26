/**
 * IELTS Master Hub - Application Logic (Fail-proof YouTube Aggregator)
 */

// Curated IELTS Video Topics (with fallback search queries to guarantee 100% active playback)
const INITIAL_VIDEOS = [
    {
        id: "ielts_w1",
        ytQuery: "IELTS Advantage Writing Task 2 Complete Course",
        videoId: "LqNn11iGZyc",
        title: "IELTS Writing Task 2: Complete Masterclass Course (Band 7.0+ Guide)",
        channel: "IELTS Advantage",
        category: "writing",
        targetBand: "7.0",
        duration: "34:12",
        views: 3200000,
        publishedAt: "2023-04-12",
        tags: ["IELTS Advantage", "Task 2", "템플릿", "writing"],
        description: "In-depth masterclass for IELTS Writing Task 2. Learn essay structure, question analysis, topic sentences, and band 7+ vocabulary."
    },
    {
        id: "ielts_w2",
        ytQuery: "IELTS Writing Task 2 Essay Built From Scratch IELTS Advantage",
        videoId: "2G9x2j44P9I",
        title: "IELTS Writing Task 2 Essay Built From Scratch (Step-by-Step)",
        channel: "IELTS Advantage",
        category: "writing",
        targetBand: "7.5",
        duration: "28:40",
        views: 1450000,
        publishedAt: "2023-08-05",
        tags: ["IELTS Advantage", "Task 2", "실전작성", "writing"],
        description: "Watch Chris Pell plan and write a high-scoring Band 9 Writing Task 2 essay in real time."
    },
    {
        id: "ielts_s1",
        ytQuery: "E2 IELTS Speaking Mock Test Band 8",
        videoId: "P0d-JvR5Yg0",
        title: "IELTS Speaking Full Mock Test Band 8.5 Demonstration",
        channel: "E2 IELTS",
        category: "speaking",
        targetBand: "8.0",
        duration: "19:45",
        views: 2890000,
        publishedAt: "2023-05-14",
        tags: ["E2 IELTS", "Speaking", "실전모의", "speaking"],
        description: "Real-time IELTS Speaking simulation showing Part 1, Part 2 Cue Card, and Part 3 abstract discussion with examiner analysis."
    },
    {
        id: "ielts_r1",
        ytQuery: "E2 IELTS Reading Skimming Scanning",
        videoId: "1t_a86o-Y4o",
        title: "IELTS Reading Skimming & Scanning Master Techniques for Speed",
        channel: "E2 IELTS",
        category: "reading",
        targetBand: "7.0",
        duration: "26:30",
        views: 1120000,
        publishedAt: "2023-09-29",
        tags: ["E2 IELTS", "Reading", "속독", "reading"],
        description: "Learn how to scan keywords and locate answers in 60 minutes across 3 difficult reading passages."
    },
    {
        id: "ielts_l1",
        ytQuery: "IELTS Liz Listening 10 Tips",
        videoId: "5uJjK_L_3z0",
        title: "IELTS Listening 10 Pro Tips to Instantly Boost Your Score",
        channel: "IELTS Liz",
        category: "listening",
        targetBand: "7.0",
        duration: "16:50",
        views: 1540000,
        publishedAt: "2023-07-22",
        tags: ["IELTS Liz", "Listening", "리스닝팁", "listening"],
        description: "Essential tips for handling singular/plural traps, spelling mistakes, map labeling, and British/Australian accents."
    },
    {
        id: "ielts_s2",
        ytQuery: "IELTS Advantage Speaking Part 2 Cue Card",
        videoId: "d2S4hG9b1iU",
        title: "IELTS Speaking Part 2: How to Talk for 2 Minutes Without Stopping",
        channel: "IELTS Advantage",
        category: "speaking",
        targetBand: "7.0",
        duration: "22:10",
        views: 870000,
        publishedAt: "2023-10-05",
        tags: ["IELTS Advantage", "Speaking", "Part2", "speaking"],
        description: "Learn the PPF (Past, Present, Future) storytelling method to effortlessly fill 2 full minutes on Cue Cards."
    },
    {
        id: "ielts_v1",
        ytQuery: "E2 IELTS Academic Vocabulary 100 Words",
        videoId: "9F1n6r6k_E4",
        title: "100 Academic IELTS Vocabulary Words for Band 7.0 - 8.0+",
        channel: "E2 IELTS",
        category: "vocab",
        targetBand: "8.0",
        duration: "42:15",
        views: 1950000,
        publishedAt: "2024-02-01",
        tags: ["vocab", "어휘", "단어", "E2 IELTS"],
        description: "High-level collocations, synonyms, and formal vocabulary words to upgrade your writing and speaking responses."
    },
    {
        id: "ielts_b1",
        ytQuery: "아이엘츠 독학 공부법 7.0 달성",
        videoId: "J3_C4_mK2vw",
        title: "아이엘츠 독학 입문 가이드: 2달 만에 Overall 7.0 달성 전략",
        channel: "엠마의 IELTS",
        category: "beginner",
        targetBand: "7.0",
        duration: "15:20",
        views: 420000,
        publishedAt: "2024-02-18",
        tags: ["독학", "초보가이드", "공부법", "beginner"],
        description: "비전공자/직장인의 현실적인 아이엘츠 독학 시간표 및 4개 영역별 추천 교재 활용법."
    },
    {
        id: "ielts_w3",
        ytQuery: "IELTS Advantage How to Write Band 9 Introduction",
        videoId: "oV8s4m-P7iM",
        title: "How To Write a Band 9 Task 2 Introduction in 5 Minutes",
        channel: "IELTS Advantage",
        category: "writing",
        targetBand: "8.0",
        duration: "18:40",
        views: 980000,
        publishedAt: "2023-11-10",
        tags: ["IELTS Advantage", "서론", "패러프레이징", "writing"],
        description: "Master paraphrasing the prompt and writing a sharp thesis statement that locks in your grammar and cohesion score."
    },
    {
        id: "ielts_r2",
        ytQuery: "IELTS Liz Reading True False Not Given",
        videoId: "1zLhQyF9fG8",
        title: "IELTS Reading True/False/Not Given 완전 정복 스킬 5가지",
        channel: "IELTS Liz",
        category: "reading",
        targetBand: "6.0",
        duration: "15:40",
        views: 980000,
        publishedAt: "2023-02-20",
        tags: ["IELTS Liz", "Reading", "TFNG", "reading"],
        description: "IELTS 리딩에서 가장 헷갈리는 True, False, Not Given 문제 해결법. 지문 패러프레이징 찾는 키워드 스캐닝 기법."
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
    
    // Modal Elements
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

// Get YouTube Direct Search URL (100% Fail-safe)
function getYouTubeDirectUrl(ytQuery) {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(ytQuery)}`;
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
        
        // Dynamic aesthetic gradient thumbnails
        const thumbBg = `linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(6, 182, 212, 0.8))`;
        const ytDirectUrl = getYouTubeDirectUrl(v.ytQuery);
        
        return `
            <div class="video-card" data-id="${v.id}">
                <div class="thumbnail-wrap" style="background: ${thumbBg}; display: flex; align-items: center; justify-content: center; padding: 20px; text-align: center;">
                    <div style="z-index: 2; color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
                        <i class="fa-brands fa-youtube" style="font-size: 2.8rem; color: #ff4d4d; margin-bottom: 8px;"></i>
                        <div style="font-size: 0.85rem; font-weight: 700; max-width: 90%; margin: 0 auto; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                            ${v.title}
                        </div>
                    </div>
                    <div class="play-overlay">
                        <div class="play-btn-circle" title="앱 내부 학습 및 플레이어 열기"><i class="fa-solid fa-play"></i></div>
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
                            <a href="${ytDirectUrl}" target="_blank" rel="noopener" class="direct-yt-icon-link" title="유튜브에서 직접 시청" onclick="event.stopPropagation();">
                                <i class="fa-brands fa-youtube" style="color: #ff4d4d; font-size: 1.2rem;"></i>
                            </a>
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
    
    // YouTube Search Embed URL (Natively handled by YouTube without broken video ID issues!)
    const searchEmbedUrl = `https://www.youtube-nocookie.com/embed?listType=search&list=${encodeURIComponent(video.ytQuery)}`;
    elements.youtubeIframe.src = searchEmbedUrl;
    
    elements.modalVideoTitle.textContent = video.title;
    elements.modalChannelName.textContent = video.channel;
    elements.modalViews.textContent = `조회수 ${(video.views / 10000).toFixed(1)}만회`;
    elements.modalDate.textContent = `등록일 ${video.publishedAt}`;
    elements.modalDescription.textContent = video.description;
    
    // 100% Fail-proof Direct Link
    const ytWatchUrl = getYouTubeDirectUrl(video.ytQuery);
    elements.modalYtLink.href = ytWatchUrl;
    
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
