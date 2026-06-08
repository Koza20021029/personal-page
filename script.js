// Smooth scrolling for navigation links
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

// Dark Mode Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

const translations = {
    zh: {
        title: '陳禹翰 Koza - 個人網站',
        nav: {
            home: '首頁',
            about: '關於我',
            projects: '策展與研究計畫',
            experience: '實務經歷',
            skills: '專業技能',
            contact: '聯絡我'
        },
        hero: {
            title: '陳禹翰 Koza',
            subtitle: '策展人 / 博物館學與區域發展研究者 / 物質文化轉譯者',
            quote: '「穿梭於田野與展間，致力於透過物質文化研究與敘事轉譯，連結傳統技藝與當代社會的實踐者。」',
            bio: '目前就讀於國立臺北科技大學文化事業發展學系。研究領域聚焦於傳統纖維工藝（如蕉麻、苧麻）的復振、半符號學分析，以及如何透過博物館學與策展手法，將繁複的田野資料轉化為大眾能共鳴的故事。我擅長運用數位工具與質性研究方法，並具備第一線的部落溝通與地方創生經驗。',
            cta: '觀看我的策展作品'
        },
        about: {
            title: '轉譯田野的溫度',
            description: '我相信「物件」不僅是歷史的載體，更是當代社會與過去對話的橋樑。在過去的學術訓練中，我走入蘭嶼、大鳥部落與偏鄉地區，透過紮實的質性訪談與植物學紀錄，探尋逐漸消逝的傳統知識。我不僅追求學術上的嚴謹，更熱衷於探索如何將這些研究成果，透過展覽、影像，甚至是桌上遊戲的形式，重新帶回當代大眾的視野中。',
            feature1: {
                title: '跨文化的田野洞察',
                text: '具備高度的人文敏銳度，能與不同族群（如部落耆老、移工社群）建立深厚信任，從植物採集到口述歷史，精準捕捉文化的物質與非物質細節。'
            },
            feature2: {
                title: '學術與轉譯的整合',
                text: '熟稔質性研究與半符號學（Signifier and Signified）分析，能將深奧的學術框架轉化為平易近人的展覽文本與視覺語彙。'
            },
            feature3: {
                title: '系統化的知識管理',
                text: '善用現代數位工具整合龐大的田野數據，從逐字稿編碼到視覺化呈現，確保專案執行的邏輯嚴密與高效產出。'
            }
        },
        projects: {
            title: '策展與研究計畫',
            filterAll: '全部',
            filterEthno: '民族植物學',
            filterCuratorial: '展覽策劃',
            filterSensory: '感官與影像'
        },
        project1: {
            title: '島嶼的維度——蘭嶼 Avaka 研究計畫',
            year: '2026',
            tag1: '#民族植物學',
            tag2: '#田野調查',
            tag3: '#物質文化',
            tag4: '#傳統纖維',
            description: '深入蘭嶼進行蕉麻（Manila Hemp / Avaka）品種辨識與傳統纖維處理工藝調查。',
            detail1: '實地追蹤並記錄 Avaka 與 Nyaga 等植物品種，與部落耆老 Maran、Kaminan 進行深度訪談，完整記錄從纖維抽取到編織的傳統工藝流程。',
            detail2: '將植物學紀錄與民族誌研究交疊，產出具備高度學術價值與展示潛力的文化紀錄報告。'
        },
        project2: {
            title: '循．幬輯——大鳥部落展',
            year: '2024',
            tag1: '#展覽策劃',
            tag2: '#空間敘事',
            tag3: '#排灣族文化',
            tag4: '#物件轉譯',
            description: '於國立臺北科技大學舉辦之實體策展專案，以排灣族大鳥部落為核心場域。',
            detail1: '負責展覽架構設計。運用質性研究編碼系統化整理部落物質文化，並撰寫展場文本。',
            detail2: '成功將原鄉部落的遷徙脈絡與情感記憶透過空間與視覺設計傳遞給民眾。'
        },
        project3: {
            title: '印尼街聲音地圖計畫',
            year: '2025',
            tag1: '#感官民族誌',
            tag2: '#數位策展',
            tag3: '#移民族群',
            tag4: '#聲音紀錄',
            description: '透過採集環境聲音與口述歷史，建構跨文化的數位聽覺地圖。探討東南亞移民族群在城市空間中的記憶留存與感知。',
            playText: '聆聽環境聲學'
        },
        project4: {
            title: 'Minokay to! 洄家 紀錄片計畫',
            year: '2025',
            tag1: '#紀錄片',
            tag2: '#文化尋根',
            tag3: '#影像敘事',
            description: '以台北科大策展專案為基礎，記錄文化歸屬與家園重構的歷程。透過影像實踐視覺轉譯。',
            watchBtn: '線上收看紀錄片'
        },
        experience: {
            title: '經歷與教育',
            university: {
                title: '國立臺北科技大學',
                period: '2022.09 - 2026.06 預計畢業',
                degree: '文化事業發展學系｜學士',
                detail: '專攻：博物館學、策展實務、區域發展、文化資源調查。'
            },
            internship: {
                title: '林業及自然保育署 臺東分署——自然保育科 暑期實習',
                period: '2025.07 - 2025.08',
                detail1: '參與社區林業與里山文化研究。',
                detail2: '協助自然保育政策地方推廣，執行社區溝通與生態觀光評估。'
            },
            volunteer: {
                title: '花蓮光復地區災後復原志工',
                period: '2025.10',
                detail: '參與為期五天的第一線災後復原工作，展現面對複雜環境的應變能力。'
            },
            fieldwork: {
                title: '蘭嶼 DoVanWa 打工換宿與田野實踐',
                period: '2026.07 - 2026.08',
                detail: '以在地生活者的視角深入蘭嶼社群，並持續進行跨文化的在地觀察與交流。'
            }
        },
        skills: {
            title: '專業技能樹',
            research: {
                title: '研究與分析',
                item1: '質性研究編碼 (Open, Axial, Selective Coding)',
                item2: '田野調查與深度訪談 (Fieldwork & In-depth Interview)',
                item3: '半符號學文本分析 (Semiotics Analysis)'
            },
            curatorial: {
                title: '策展與企劃',
                item1: '展覽文本撰寫、空間敘事與動線規劃',
                item2: '文化資源轉譯與遊戲化設計 (Gamification Design)'
            },
            digital: {
                title: '數位與視覺工具',
                item1: '知識管理：Heptabase, Notion',
                item2: '影像與攝影：Ricoh GR 系列紀實攝影、Wondershare Filmora 影像剪輯',
                item3: 'AI 協作：熟練運用 AI 工具輔助研究與文本優化'
            }
        },
        contact: {
            title: 'Let\'s Connect / 期待與您合作',
            emailLabel: 'Email:',
            socialLabel: '社群連結:'
        },
        footer: {
            copy: '© 2026 Koza Chen. All Rights Reserved.'
        }
    },
    en: {
        title: 'Koza Chen - Portfolio',
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            experience: 'Experience',
            skills: 'Skills',
            contact: 'Contact'
        },
        hero: {
            title: 'Koza Chen',
            subtitle: 'Curator / Museum Studies & Regional Development Researcher / Material Culture Translator',
            quote: '“Moving between field and exhibition, I translate material culture research into narratives that connect traditional craft with contemporary society.”',
            bio: 'I am currently studying Cultural Enterprise Development at National Taipei University of Technology. My research focuses on revitalizing traditional fiber crafts such as Manila hemp and ramie, applying semiotic analysis, and translating complex field research into stories that resonate with broader audiences. I also combine digital tools with qualitative methods and have hands-on experience in community communication and local development.',
            cta: 'Explore my curatorial work'
        },
        about: {
            title: 'Translating the Field’s Temperature',
            description: 'I believe objects are not only vessels of history but also bridges for dialogue between the present and the past. Through academic training, I have entered Lanyu, the Daniu community, and rural areas to conduct qualitative interviews and botanical fieldwork, seeking traditional knowledge that is gradually fading. I pursue academic rigor while also exploring how to bring these findings back to contemporary audiences through exhibitions, visuals, and even tabletop game formats.',
            feature1: {
                title: 'Cross-Cultural Field Insight',
                text: 'I bring strong humanistic sensitivity and can build deep trust with different communities (including elders and migrant groups), capturing both material and intangible aspects from plant collection to oral history.'
            },
            feature2: {
                title: 'Academic & Translation Integration',
                text: 'I am fluent in qualitative research and semiotic analysis, able to turn complex academic frameworks into approachable exhibition text and visual language.'
            },
            feature3: {
                title: 'Systematic Knowledge Management',
                text: 'I use modern digital tools to organize large field datasets, from transcript coding to visualization, ensuring project execution is both rigorous and efficient.'
            }
        },
        projects: {
            title: 'Curatorial & Research Projects',
            filterAll: 'All',
            filterEthno: 'Ethnobotany',
            filterCuratorial: 'Curation',
            filterSensory: 'Sensory & Video'
        },
        project1: {
            title: 'Dimensions of the Island — Lanyu Avaka Research Project',
            year: '2026',
            tag1: '#Ethnobotany',
            tag2: '#Fieldwork',
            tag3: '#MaterialCulture',
            tag4: '#TraditionalFiber',
            description: 'In-depth study of the Manila hemp (Avaka) varietals and traditional fiber processing techniques in Lanyu.',
            detail1: 'Tracked and documented Avaka and Nyaga plant varieties in the field, conducting in-depth interviews with community elders Maran and Kaminan to record the full traditional craft process from fiber extraction to weaving.',
            detail2: 'Combined botanical documentation with ethnographic research to produce culturally rich reports with strong exhibition potential.'
        },
        project2: {
            title: 'Turning Threads — Daniu Community Exhibition',
            year: '2024',
            tag1: '#CuratorialDesign',
            tag2: '#SpatialNarrative',
            tag3: '#PaiwanCulture',
            tag4: '#ObjectTranslation',
            description: 'A physical exhibition project at National Taipei University of Technology centered on the Daniu Paiwan community.',
            detail1: 'Led exhibition structure design, systematically organizing community material culture through qualitative research coding and crafting exhibition text.',
            detail2: 'Successfully transmitted the community’s migration context and emotional memory through spatial and visual design.'
        },
        project3: {
            title: 'Indonesian Street Soundscape Project',
            year: '2025',
            tag1: '#SensoryEthnography',
            tag2: '#DigitalCurating',
            tag3: '#MigrantCommunities',
            tag4: '#SoundMapping',
            description: 'Collected environmental sounds and oral histories to build a cross-cultural digital listening map exploring how Southeast Asian migrant communities preserve memory and perception in urban spaces.',
            playText: 'Listen to Soundscape'
        },
        project4: {
            title: 'Minokay to! Returning Home Documentary Project',
            year: '2025',
            tag1: '#Documentary',
            tag2: '#CulturalRediscovery',
            tag3: '#VisualStorytelling',
            description: 'A documentary project based on the Taipei Tech curatorial initiative, recording the journey of cultural belonging and home reconstruction through visual translation.',
            watchBtn: 'Watch Documentary'
        },
        experience: {
            title: 'Experience & Education',
            university: {
                title: 'National Taipei University of Technology',
                period: 'Sep 2022 - Jun 2026 (expected)',
                degree: 'Department of Cultural Enterprise Development | Bachelor',
                detail: 'Major: Museum Studies, Curatorial Practice, Regional Development, and Cultural Resource Survey.'
            },
            internship: {
                title: 'Forestry and Nature Conservation Agency, Taitung Branch — Conservation Internship',
                period: 'Jul 2025 - Aug 2025',
                detail1: 'Participated in community forestry and satoyama culture research.',
                detail2: 'Supported local conservation policy promotion, community engagement, and eco-tourism evaluation.'
            },
            volunteer: {
                title: 'Post-Disaster Recovery Volunteer in Guangfu, Hualien',
                period: 'Oct 2025',
                detail: 'Joined a five-day frontline recovery effort, demonstrating adaptability in complex environments.'
            },
            fieldwork: {
                title: 'Lanyu DoVanWa Fieldwork & Work-Exchange',
                period: 'Jul 2026 - Aug 2026',
                detail: 'Entered the community as a local participant, continuing intercultural observation and exchange in Lanyu.'
            }
        },
        skills: {
            title: 'Professional Skillset',
            research: {
                title: 'Research & Analysis',
                item1: 'Qualitative coding (Open, Axial, Selective Coding)',
                item2: 'Fieldwork & in-depth interviews',
                item3: 'Semiotic text analysis'
            },
            curatorial: {
                title: 'Curatorial Planning',
                item1: 'Exhibition text writing, spatial narrative, and circulation planning',
                item2: 'Cultural resource translation and gamification design'
            },
            digital: {
                title: 'Digital & Visual Tools',
                item1: 'Knowledge management: Heptabase, Notion',
                item2: 'Photography & video: Ricoh GR documentary photography, Wondershare Filmora editing',
                item3: 'AI collaboration: Skilled at using AI tools for research and text refinement'
            }
        },
        contact: {
            title: 'Let\'s Connect / Looking Forward to Collaborating',
            emailLabel: 'Email:',
            socialLabel: 'Social Links:'
        },
        footer: {
            copy: '© 2026 Koza Chen. All Rights Reserved.'
        }
    }
};

const langButtons = document.querySelectorAll('.lang-switch');
const i18nElements = document.querySelectorAll('[data-i18n]');

function translate(path, lang) {
    return path.split('.').reduce((value, key) => value?.[key], translations[lang]);
}

function setLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
    if (translations[lang]?.title) {
        document.title = translations[lang].title;
    }
    i18nElements.forEach(element => {
        const translation = translate(element.dataset.i18n, lang);
        if (translation !== undefined) {
            element.textContent = translation;
        }
    });
    langButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
}

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.dataset.lang;
        setLanguage(selectedLang);
        if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

setLanguage('zh');

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 64; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Update active link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Update active navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add subtle scroll reveal animations for elements
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target); // Stop observing once animate-in is done
        }
    });
}, observerOptions);

// Observe sections and cards for fade/slide-up
document.querySelectorAll('.section, .project-card, .feature-card, .experience-item, .skill-category').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    el.style.transitionDelay = `${(index % 3) * 0.05}s`; // Subtle staggered entrance on grids
    revealObserver.observe(el);
});

// ==========================================================================
// Advanced Interactivity & Dynamic Effects
// ==========================================================================

// 1. Custom Cursor Follower Logic
const cursor = document.getElementById('custom-cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let hasMoved = false;

if (cursor) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!hasMoved) {
            cursor.style.opacity = '1';
            hasMoved = true;
            cursorX = mouseX;
            cursorY = mouseY;
        }
    });

    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.15;
        cursorY += dy * 0.15;
        
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveSelectors = 'a, button, .project-card, .feature-card, .lang-switch, .theme-toggle';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            cursor.classList.add('hovered');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (!e.target.closest(interactiveSelectors)) {
            cursor.classList.remove('hovered');
        }
    });
}

// 2. Project Category Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.classList.remove('hide');
                setTimeout(() => {
                    card.classList.remove('fade-out');
                }, 20);
            } else {
                card.classList.add('fade-out');
                card.addEventListener('transitionend', function handleTransition() {
                    if (card.classList.contains('fade-out')) {
                        card.classList.add('hide');
                    }
                    card.removeEventListener('transitionend', handleTransition);
                });
            }
        });
    });
});

// 3. Ambient Soundscape Generator (Web Audio API)
let audioCtx = null;
let osc = null;
let windNoise = null;
let mainGain = null;
let synthInterval = null;
let isPlayingSound = false;

const playBtn = document.getElementById('soundscape-play');
const visualizer = document.getElementById('visualizer');

if (playBtn && visualizer) {
    const playIcon = playBtn.querySelector('.play-icon');
    const pauseIcon = playBtn.querySelector('.pause-icon');
    const btnText = playBtn.querySelector('.btn-text');

    function initAudio() {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        const bufferSize = audioCtx.sampleRate * 2;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            data[i] = (lastOut + (0.015 * white)) / 1.015;
            lastOut = data[i];
            data[i] *= 4;
        }
        
        windNoise = audioCtx.createBufferSource();
        windNoise.buffer = noiseBuffer;
        windNoise.loop = true;
        
        const noiseFilter = audioCtx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.setValueAtTime(250, audioCtx.currentTime);
        
        osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(90, audioCtx.currentTime);
        
        const oscGain = audioCtx.createGain();
        oscGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        
        mainGain = audioCtx.createGain();
        mainGain.gain.setValueAtTime(0, audioCtx.currentTime);
        
        windNoise.connect(noiseFilter);
        noiseFilter.connect(mainGain);
        
        osc.connect(oscGain);
        oscGain.connect(mainGain);
        
        mainGain.connect(audioCtx.destination);
        
        windNoise.start(0);
        osc.start(0);
        
        synthInterval = setInterval(() => {
            if (audioCtx && audioCtx.state !== 'suspended') {
                playRandomChirp();
            }
        }, 3000);
    }
    
    function playRandomChirp() {
        if (!audioCtx || audioCtx.state === 'suspended') return;
        
        const now = audioCtx.currentTime;
        const chirpOsc = audioCtx.createOscillator();
        const chirpGain = audioCtx.createGain();
        
        chirpOsc.type = 'sine';
        const startFreq = 800 + Math.random() * 600;
        chirpOsc.frequency.setValueAtTime(startFreq, now);
        chirpOsc.frequency.exponentialRampToValueAtTime(startFreq + 300, now + 0.15);
        
        chirpGain.gain.setValueAtTime(0, now);
        chirpGain.gain.linearRampToValueAtTime(0.015, now + 0.02);
        chirpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
        
        chirpOsc.connect(chirpGain);
        chirpGain.connect(audioCtx.destination);
        
        chirpOsc.start(now);
        chirpOsc.stop(now + 0.2);
    }

    function toggleSoundscape() {
        if (!isPlayingSound) {
            if (!audioCtx) {
                initAudio();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            
            mainGain.gain.linearRampToValueAtTime(0.35, audioCtx.currentTime + 1.2);
            
            visualizer.classList.add('active');
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            
            const currentLang = document.documentElement.lang === 'zh-TW' ? 'zh' : 'en';
            btnText.textContent = currentLang === 'zh' ? '暫停播放' : 'Pause Soundscape';
            
            isPlayingSound = true;
        } else {
            if (mainGain) {
                mainGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.4);
            }
            
            setTimeout(() => {
                if (audioCtx) {
                    audioCtx.suspend();
                }
            }, 400);
            
            visualizer.classList.remove('active');
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            
            const currentLang = document.documentElement.lang === 'zh-TW' ? 'zh' : 'en';
            btnText.textContent = currentLang === 'zh' ? '聆聽環境聲學' : 'Listen to Soundscape';
            
            isPlayingSound = false;
        }
    }

    playBtn.addEventListener('click', toggleSoundscape);
}

// 4. Hero Subtitle Typewriter Logic
const typewriterElement = document.getElementById('typewriter');
const typewriterRolesZh = ['策展人', '博物館學與區域發展研究者', '物質文化轉譯者'];
const typewriterRolesEn = ['Curator', 'Museum Studies & Regional Development Researcher', 'Material Culture Translator'];

let currentRoleIndex = 0;
let currentTextCharIndex = 0;
let isDeleting = false;
let typewriterTimeout = null;

function typeWriter() {
    const currentLang = document.documentElement.lang === 'zh-TW' ? 'zh' : 'en';
    const roles = currentLang === 'zh' ? typewriterRolesZh : typewriterRolesEn;
    
    if (currentRoleIndex >= roles.length) {
        currentRoleIndex = 0;
    }
    
    const currentFullText = roles[currentRoleIndex];
    let displayText = '';
    
    if (isDeleting) {
        displayText = currentFullText.substring(0, currentTextCharIndex - 1);
        currentTextCharIndex--;
    } else {
        displayText = currentFullText.substring(0, currentTextCharIndex + 1);
        currentTextCharIndex++;
    }
    
    if (typewriterElement) {
        typewriterElement.textContent = displayText;
    }
    
    let typingSpeed = isDeleting ? 40 : 100;
    
    if (!isDeleting && currentTextCharIndex === currentFullText.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentTextCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex++;
        typingSpeed = 500;
    }
    
    typewriterTimeout = setTimeout(typeWriter, typingSpeed);
}

// Start typewriter once script runs
typeWriter();

// Listen to language change to reset typewriter
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        clearTimeout(typewriterTimeout);
        currentRoleIndex = 0;
        currentTextCharIndex = 0;
        isDeleting = false;
        setTimeout(typeWriter, 100);
    });
});


// 5. Project Details Lighbox/Modal Data & Logic
const projectDetails = {
    project1: {
        zh: {
            title: '島嶼的維度——蘭嶼 Avaka 研究計畫',
            description: '深入蘭嶼進行蕉麻（Manila Hemp / Avaka）品種辨識與傳統纖維處理工藝調查。我們實地追蹤並記錄 Avaka 與 Nyaga 等植物品種，與部落耆老 Maran、Kaminan 進行深度訪談，完整記錄從纖維抽取到編織的傳統工藝流程。將植物學紀錄與民族誌研究交疊，產出具備高度學術價值與展示潛力的文化紀錄報告。',
            detailTitle1: '民族誌訪談與植物調查紀錄',
            detailText1: '在蘭嶼椰油與朗島部落，走訪耆老 Maran 與 Kaminan 的蕉麻田野。記錄達悟族語中對 Avaka (野生蕉麻) 與 Nyaga (一般香蕉) 的植物形態分類，並釐清傳統編織文化中纖維取用（剝莖、刮麻、曬乾、理絲）的細密程序，為逐漸流失的植物物質文化建立系統化數位檔案。',
            detailTitle2: '研究方法：半符號學分析',
            detailText2: '採用半符號學框架（將蕉麻織品視為能指與所指的結合），分析傳統服飾編織紋路在當代社會儀式中的雙重定位，以及如何透過博物館學將「田野知識」轉譯為展覽中的視覺空間語彙。'
        },
        en: {
            title: 'Dimensions of the Island — Lanyu Avaka Research Project',
            description: 'In-depth study of the Manila hemp (Avaka) varietals and traditional fiber processing techniques in Lanyu. We tracked and documented Avaka and Nyaga plant varieties, conducting interviews with community elders Maran and Kaminan to record the full traditional craft process from fiber extraction to weaving. Combined botanical documentation with ethnographic research to produce rich reports with strong exhibition potential.',
            detailTitle1: 'Ethnographic Fieldwork & Botanical Records',
            detailText1: 'Conducted field research in Yayo and Iratai villages on Lanyu. Documented the Tao language terms for Avaka (wild abaca) and Nyaga (banana), identifying fiber extraction phases (stem peeling, scraping, drying, and threading) to construct a systematic digital catalog for endangered material knowledge.',
            detailTitle2: 'Methodology: Semiotic Analysis',
            detailText2: 'Applied semiotic analysis, viewing Lanyu woven fabrics as signs (signifier and signified) to investigate the contemporary role of traditional woven attire in community rituals and explore exhibition translation methods.'
        },
        images: [
            'img/Avaka/R0001386.JPG',
            'img/Avaka/R0001335.jpg?v=2',
            'img/Avaka/R0001405.jpg?v=2',
            'img/Avaka/R0001534.jpg?v=2'
        ]
    },
    project2: {
        zh: {
            title: '循．幬輯——大鳥部落展',
            description: '於國立臺北科技大學舉辦之實體策展專案，以排灣族大鳥部落為核心場域。負責展覽架構設計。運用質性研究編碼系統化整理部落物質文化，並撰寫展場文本。成功將原鄉部落的遷徙脈絡與情感記憶透過空間與視覺設計傳遞給民眾。',
            detailTitle1: '空間敘事與文字轉譯',
            detailText1: '策展過程中，透過實體材料（漂流木、陶壺、部落編織物件）的陳設與空間動線，帶領觀者一步步體會大鳥部落的八八災後遷徙歷史。所有展場說明文字皆經由訪談逐字稿進行 Axial Coding 系統性精煉，還原最真實的部落生命史與情感維度。',
            detailTitle2: '展覽亮點：互動式物件牆',
            detailText2: '設計了「翻牌式排灣族符號物件牆」，讓觀者在動手翻牌的過程中理解排灣族百步蛇紋、人頭紋與陶壺在階級社會中的象徵意涵，大幅提高一般民眾的展場互動率。'
        },
        en: {
            title: 'Turning Threads — Daniu Community Exhibition',
            description: 'A physical exhibition project at National Taipei University of Technology centered on the Daniu Paiwan community. Responsible for exhibition structure design, systematically organizing community material culture through qualitative coding and crafting exhibition text. Successfully transmitted migration contexts and emotional memory through spatial and visual design.',
            detailTitle1: 'Spatial Narrative & Text Translation',
            detailText1: 'Guided visitors through Daniu’s post-disaster migration history utilizing physical materials (driftwood, clay pots, community weaving). Text panels were systematically refined using qualitative coding to preserve authentic oral histories.',
            detailTitle2: 'Exhibition Highlight: Interactive Object Wall',
            detailText2: 'Created an interactive flipping board wall displaying Paiwan symbols (hundred-pace snake, human figures, clay pots) to convey their social and cultural meanings to university visitors.'
        },
        images: [
            'img/大鳥部落/IMG_6109 2.JPG',
            'img/大鳥部落/IMG_2955.jpg?v=2',
            'img/大鳥部落/IMG_2976.jpg?v=2',
            'img/大鳥部落/IMG_3160.jpg?v=2'
        ]
    },
    project3: {
        zh: {
            title: '印尼街聲音地圖計畫',
            description: '透過採集環境聲音與口述歷史，建構跨文化的數位聽覺地圖。探討東南亞移民族群在城市空間中的記憶留存與感知。本計畫透過音頻設備實地收錄印尼街的日常聲響（如街頭對話、宗教吟唱、傳統香料研磨聲），結合數位地圖介面，重組移工的異鄉感官地圖。',
            detailTitle1: '感官民族誌與數位策展',
            detailText1: '打破傳統視覺導向的展示限制，以「聲音」作為研究能指。透過指向性麥克風與環境聲錄製，捕捉台北印尼街（台北車站周邊）的聲音質地。數位聲音地圖讓使用者能點擊特定街角，聽到對應的環境聲，並閱讀該商鋪主人的口述移居史。',
            detailTitle2: '聲音生成與視覺化',
            detailText2: '在本個人網站的作品展示中，結合了 Web Audio API 技術與 CSS 音頻條，使用者可直接點擊「聆聽環境聲學」按鈕，即時播放一段代表聲音地圖理念的沉浸式街道環境氛圍合成音。'
        },
        en: {
            title: 'Indonesian Street Soundscape Project',
            description: 'Collected environmental sounds and oral histories to build a cross-cultural digital listening map exploring how Southeast Asian migrant communities preserve memory and perception in urban spaces. Captured daily street sounds (conversations, prayers, spice grinding) to rebuild their sensory diaspora map.',
            detailTitle1: 'Sensory Ethnography & Digital Curating',
            detailText1: 'Shifted exhibition borders from visual to sonic. Recorded audio textures of "Indonesian Street" in Taipei near Main Station using shotgun microphones. The map interface allows users to click coordinates, listening to specific corners while reading oral histories.',
            detailTitle2: 'Web Audio Demonstration',
            detailText2: 'Integrated a custom Web Audio synthesizer and responsive CSS waves directly onto the project card, letting users preview simulated sonic textures on click.'
        },
        images: [
            'img/印尼街/IMG_9110.jpg',
            'img/印尼街/S__54239247.jpg',
            'img/印尼街/IMG_9137.jpg?v=2'
        ]
    },
    project4: {
        watchUrl: 'https://youtu.be/9fcbqKEH49w?si=3myjOi4aGmHpJzeT',
        zh: {
            title: 'Minokay to! 洄家 紀錄片計畫',
            description: '以台北科大策展專案為基礎，記錄文化歸屬與家園重構的歷程。透過影像實踐視覺轉譯。本片深入追蹤三位在都會區成長、決心返回原鄉學習傳統編織與農耕的青年，記錄他們與部落土地重新建立連結的真實故事。',
            detailTitle1: '影像轉譯與口述史重構',
            detailText1: '影像創作作為視覺轉譯的重要實踐。在長達半年的拍攝中，記錄青年們在「回家」路上面臨的文化斷裂與追尋認同的掙扎。透過動態影像、環境音效與長鏡頭語言，將田野調查中難以用文字言喻的「情感氣氛」與「土地連結」完整傳達給觀眾。',
            detailTitle2: '放映與地方創生對話',
            detailText2: '本片在台北科大與東部部落進行多場巡迴放映，引發青年返鄉、物質文化保存與部落高齡化議題的深度討論，發揮博物館與紀實影像在當代社會實踐中的橋樑功能。'
        },
        en: {
            title: 'Minokay to! Returning Home Documentary Project',
            description: 'A documentary project based on the Taipei Tech curatorial initiative, recording the journey of cultural belonging and home reconstruction through visual translation. Follows urban-raised youth returning to their native communities to study traditional crafts and farming.',
            detailTitle1: 'Visual Translation & Oral History Reconstruction',
            detailText1: 'Used cinema as a medium for visual translation. Documented the cultural reconnection and identity struggles of indigenous youth over half a year of shooting, capturing rich emotional landscapes through moving images.',
            detailTitle2: 'Screenings & Local Engagement',
            detailText2: 'Hosted screenings at Taipei Tech and local Eastern communities, triggering dialogues on youth return, craft preservation, and elderly support, showcasing the social bridging power of documentary filmmaking.'
        },
        images: [
            'img/紀錄片計畫/IMG_7218.jpg?v=2',
            'img/紀錄片計畫/IMG_7230.jpg?v=2',
            'img/紀錄片計畫/IMG_7367.jpg?v=2'
        ]
    }
};

const modal = document.getElementById('project-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalCloseBtn = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

let activeSlideIndex = 0;

function openProjectModal(projectId) {
    if (!modal || !modalBody) return;
    
    const currentLang = document.documentElement.lang === 'zh-TW' ? 'zh' : 'en';
    const data = projectDetails[projectId];
    if (!data) return;
    
    const content = data[currentLang];
    activeSlideIndex = 0;
    
    let html = '';
    
    if (data.images && data.images.length > 0) {
        html += `<div class="modal-carousel">`;
        html += `<div class="carousel-slides">`;
        data.images.forEach((imgSrc, idx) => {
            html += `
                <div class="carousel-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                    <img src="${imgSrc}" alt="${content.title}">
                </div>
            `;
        });
        html += `</div>`;
        
        if (data.images.length > 1) {
            html += `
                <button class="carousel-btn carousel-prev" aria-label="上一張">&#10094;</button>
                <button class="carousel-btn carousel-next" aria-label="下一張">&#10095;</button>
                <div class="carousel-dots">
            `;
            data.images.forEach((_, idx) => {
                html += `<span class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>`;
            });
            html += `</div>`;
        }
        html += `</div>`;
    }
    
    html += `
        <h3>${content.title}</h3>
        <p class="modal-description">${content.description}</p>
    `;
    
    if (data.watchUrl) {
        const watchText = currentLang === 'zh' ? '線上收看紀錄片' : 'Watch Documentary';
        html += `
            <div style="margin: 0 0 24px;">
                <a href="${data.watchUrl}" target="_blank" rel="noopener noreferrer" class="watch-documentary-btn">
                    <svg class="youtube-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    <span>${watchText}</span>
                </a>
            </div>
        `;
    }
    
    html += `
        <div class="modal-details-title">${content.detailTitle1}</div>
        <div class="modal-details-text">${content.detailText1}</div>
        
        <div class="modal-details-title">${content.detailTitle2}</div>
        <div class="modal-details-text">${content.detailText2}</div>
    `;
    
    modalBody.innerHTML = html;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    if (data.images.length > 1) {
        const prevBtn = modalBody.querySelector('.carousel-prev');
        const nextBtn = modalBody.querySelector('.carousel-next');
        const slides = modalBody.querySelectorAll('.carousel-slide');
        const dots = modalBody.querySelectorAll('.carousel-dot');
        
        function updateCarousel(newIndex) {
            const totalSlides = slides.length;
            if (newIndex >= totalSlides) newIndex = 0;
            if (newIndex < 0) newIndex = totalSlides - 1;
            
            activeSlideIndex = newIndex;
            
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === activeSlideIndex);
            });
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === activeSlideIndex);
            });
        }
        
        if (prevBtn) prevBtn.addEventListener('click', () => updateCarousel(activeSlideIndex - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => updateCarousel(activeSlideIndex + 1));
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const idx = parseInt(e.target.getAttribute('data-index'));
                updateCarousel(idx);
            });
        });
    }
}

function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

projectCards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('.soundscape-player') || e.target.closest('.watch-documentary-btn')) return;
        const projectId = `project${index + 1}`;
        openProjectModal(projectId);
    });
});

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
});

// Hover dynamic lighting coordinate tracking
document.querySelectorAll('.project-card, .feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});