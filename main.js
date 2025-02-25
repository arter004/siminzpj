// 轮播图数据
const carouselData = [
    {
        title: "水彩作品",
        image: "imgs/shuicai.jpg",
        description: "传统水彩技法与现代艺术的融合"
    },
    {
        title: "插画艺术",
        image: "imgs/sych.jpg",
        description: "插画艺术，是视觉创意的精灵，以画笔为魔法棒，在纸张、屏幕等多元媒介上肆意挥洒想象。"
    },
    {
        title: "明信片海报",
        image: "imgs/mxp.jpg",
        description: "情感交流的浪漫纽带。它突破时空限制，以精美的画面、真挚的文字，传递思念与祝福。在特殊日子，将心底话语寄给亲友，承载回忆，成为情感见证，让温暖跨越距离，维系珍贵情谊"
    },
    {
        title: "国风绘本",
        image: "imgs/hbhj.jpg",
        description: "国风绘本，心灵触动的情感桥梁。绘者用东方美学诠释生活百态，从阖家团圆到游子思乡，书中画面极易唤起读者心底共鸣。无论孩童还是成人，都能在国风意境里找到情感慰藉，感受传统文化蕴含的温暖力量 。"
    },
    {
        title: "非遗绘本",
        image: "imgs/fyhb.jpg",
        description: "非遗绘本《蓝花村》以蜡染为主题，书中画面既有传统纹样的古朴典雅，又有现代创意的巧妙融合。阅读时，仿若亲见蜡刀在布上舞动，感受蜡染独特魅力，体悟非遗传承的时代意义 。"
    }
];

// 作品数据
const worksData = [
    { image: "imgs/works/work1.jpg", title: "作品1" },
    { image: "imgs/works/work2.jpg", title: "作品2" },
    { image: "imgs/works/work3.jpg", title: "作品3" },
    { image: "imgs/works/work4.jpg", title: "作品4" },
    { image: "imgs/works/work5.jpg", title: "作品5" },
    { image: "imgs/works/work6.jpg", title: "作品6" },
    { image: "imgs/works/work7.jpg", title: "作品7" },
    { image: "imgs/works/work8.jpg", title: "作品8" },
    { image: "imgs/works/work9.jpg", title: "作品9" },
    { image: "imgs/works/work10.jpg", title: "作品10" },
    { image: "imgs/works/work11.jpg", title: "作品11" },
    { image: "imgs/works/work12.jpg", title: "作品12" },
    { image: "imgs/works/work13.jpg", title: "作品13" },
    { image: "imgs/works/work14.jpg", title: "作品14" },
    { image: "imgs/works/work15.jpg", title: "作品15" },
    { image: "imgs/works/work16.jpg", title: "作品16" },
    { image: "imgs/works/work17.jpg", title: "作品17" },
    { image: "imgs/works/work18.jpg", title: "作品18" },
    { image: "imgs/works/work19.jpg", title: "作品19" },
    { image: "imgs/works/work20.jpg", title: "作品20" },
    { image: "imgs/works/work21.jpg", title: "作品21" },
    { image: "imgs/works/work22.jpg", title: "作品22" },
    { image: "imgs/works/work23.jpg", title: "作品23" },
    { image: "imgs/works/work24.jpg", title: "作品24" },
    { image: "imgs/works/work25.jpg", title: "作品25" }
];

// 添加技能数据
const skillsData = [
    { name: "儿童插画", level: "高级" },
    { name: "手绘水彩", level: "高级" },
    { name: "水墨国画", level: "高级" },
    { name: "拼贴插画", level: "高级" },
    { name: "绘本创作", level: "高级" }
];

// 初始化轮播图
function initCarousel() {
    const carousel = document.querySelector('.carousel-inner');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    // 清空现有内容
    carousel.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    carouselData.forEach((item, index) => {
        // 创建轮播项
        const slide = document.createElement('div');
        slide.className = 'carousel-item';
        slide.innerHTML = `
            <div class="carousel-content ${index % 2 === 0 ? 'left' : 'right'} ${index === 3 ? 'dark-text' : ''}">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <button class="view-project">查看详情</button>
            </div>
            <div class="carousel-image">
                <div class="image-wrapper">
                    <img src="${item.image}" alt="${item.title}">
                </div>
            </div>
        `;
        carousel.appendChild(slide);

        // 创建导航点
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });

    // 设置第一张图片为活动状态
    const firstSlide = carousel.querySelector('.carousel-item');
    if (firstSlide) firstSlide.classList.add('active');
}

// 初始化作品展示墙
function initWorks() {
    const worksGrid = document.querySelector('.works-grid');
    worksGrid.innerHTML = ''; // 清空现有内容
    
    worksData.forEach(work => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        workItem.innerHTML = `<img src="${work.image}" alt="${work.title}">`;
        worksGrid.appendChild(workItem);
    });
}

// 初始化技能标签云
function initSkillsCloud() {
    const skillsContainer = document.querySelector('.skills-cloud');
    
    skillsData.forEach((skill, index) => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill.name;
        skillTag.style.animationDelay = `${index * 0.1}s`;
        
        // 添加提示框
        skillTag.setAttribute('title', `熟练度: ${skill.level}`);
        
        skillsContainer.appendChild(skillTag);
    });
}

// 添加滚动进度条
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
}

// 增强轮播图控制
function enhanceCarousel() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + carouselData.length) % carouselData.length;
        goToSlide(currentSlide);
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % carouselData.length;
        goToSlide(currentSlide);
    });

    // 添加触摸滑动支持
    let touchStartX = 0;
    const carousel = document.querySelector('.carousel');
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) { // 最小滑动距离
            if (diff > 0) {
                // 向左滑动，下一张
                currentSlide = (currentSlide + 1) % carouselData.length;
            } else {
                // 向右滑动，上一张
                currentSlide = (currentSlide - 1 + carouselData.length) % carouselData.length;
            }
            goToSlide(currentSlide);
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initWorks();
    initSkillsCloud();
    addScrollProgress();
    enhanceCarousel();
});

// 实现轮播逻辑
let currentSlide = 0;
const autoPlayInterval = 8000;

function goToSlide(index) {
    const carousel = document.querySelector('.carousel-inner');
    currentSlide = index;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// 自动轮播
setInterval(() => {
    currentSlide = (currentSlide + 1) % carouselData.length;
    goToSlide(currentSlide);
}, autoPlayInterval);

// 添加滚动动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.work-item, .about').forEach(el => {
    observer.observe(el);
});

// 添加页面平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 