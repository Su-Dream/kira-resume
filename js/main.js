// 创建Vue应用
const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      // 个人信息
      profile: {
        name: "Raphitaria",
        title: "前端开发工程师",
        email: "example@email.com",
        phone: "123-456-7890",
        location: "上海市",
        about:
          "我是一名充满热情的前端开发工程师，拥有3年的开发经验。我热爱创造用户友好的界面，并且擅长使用现代前端技术栈。我喜欢二次元文化，并将这种美学融入到我的设计中。在工作中，我注重团队协作和持续学习，致力于创造高质量的用户体验。",
        avatar: "img/avatar.jpg", // 头像路径
        github: "https://github.com/Raphitaria", // GitHub地址
      },

      // 技能列表
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "UI/UX设计", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "响应式设计", level: 90 },
      ],

      // 技能介绍，按格式写就行了
      skillDetails: [
        {
          description:
            "熟悉{HTML5}与{CSS3}新特性，掌握{Flex布局}、{Grid布局}与{流式布局}设计",
        },
        // {
        //   description:
        //     "熟悉{HTML5}与{CSS3}新特性，掌握{Flex布局}、{Grid布局}与{流式布局}设计",
        // },
      ],

      // 教育经历
      education: [
        {
          school: "上海交通大学",
          degree: "计算机科学与技术 学士",
          period: "2016 - 2020",
          description:
            "主修课程包括数据结构、算法、Web开发、数据库系统等。参与了多个校内项目，包括校园社交平台的开发。",
        },
        {
          school: "网易云课堂",
          degree: "前端开发高级课程",
          period: "2020",
          description:
            "完成了为期3个月的前端开发高级课程，学习了现代前端框架和工具。",
        },
      ],

      // 工作经历
      experience: [
        {
          company: "ABC科技有限公司",
          position: "高级前端开发工程师",
          period: "2022 - 至今",
          description:
            "负责公司主要产品的前端架构设计和实现，使用Vue.js开发了多个核心功能模块。优化了前端性能，提高了页面加载速度30%。指导初级开发人员，组织技术分享会。",
        },
        {
          company: "XYZ互联网公司",
          position: "前端开发工程师",
          period: "2020 - 2022",
          description:
            "参与开发了公司电商平台的前端界面，使用React实现了响应式设计。与后端团队紧密合作，确保API的顺利集成。参与了多次产品迭代和用户体验优化。",
        },
      ],

      // 项目经历
      projects: [
        {
          name: "二次元社区平台",
          description:
            "一个面向ACG爱好者的社区平台，用户可以分享自己的作品和交流。",
          image: "img/project1.jpg",
          tags: ["Vue.js", "Node.js", "MongoDB"],
          link: "https://github.com/Raphitaria/anime-community",
        },
        {
          name: "动漫角色图鉴",
          description:
            "收集整理了上千个动漫角色信息的在线图鉴，支持多种筛选和搜索功能。",
          image: "img/project2.jpg",
          tags: ["React", "Redux", "Firebase"],
          link: "https://github.com/Raphitaria/anime-character-guide",
        },
        {
          name: "个人博客系统",
          description:
            "一个具有二次元风格的个人博客系统，支持Markdown编辑和代码高亮。",
          image: "img/project3.jpg",
          tags: ["Vue.js", "Express", "MySQL"],
          link: "https://github.com/Raphitaria/anime-blog",
        },
      ],

      // 兴趣爱好
      hobbies: [
        { name: "动漫观赏", icon: "bi bi-tv" },
        { name: "插画创作", icon: "bi bi-brush" },
        { name: "游戏开发", icon: "bi bi-controller" },
        { name: "角色扮演", icon: "bi bi-person-badge" },
        { name: "音乐欣赏", icon: "bi bi-music-note-beamed" },
        { name: "摄影", icon: "bi bi-camera" },
      ],

      // 社交链接
      socialLinks: [
        { name: "GitHub", url: "https://github.com/", icon: "bi bi-github" },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/",
          icon: "bi bi-linkedin",
        },
        { name: "Twitter", url: "https://twitter.com/", icon: "bi bi-twitter" },
        {
          name: "Bilibili",
          url: "https://bilibili.com/",
          icon: "bi bi-play-circle",
        },
      ],
    };
  },
  mounted() {
    // 页面加载时的动画效果
    this.animateSkillBars();

    // 监听滚动事件，实现渐入效果
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // 初始化时执行一次
  },
  methods: {
    // 技能条动画
    animateSkillBars() {
      const skillBars = document.querySelectorAll(".skill-bar");
      skillBars.forEach(bar => {
        bar.style.width = "0%";
        setTimeout(() => {
          const width = bar.parentElement.nextElementSibling.textContent;
          bar.style.width = width;
        }, 300);
      });
    },

    // 滚动监听，添加渐入效果
    handleScroll() {
      const sections = document.querySelectorAll(".section");

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
          section.classList.add("fade-in");
        }
      });
    },

    // 图片错误处理
    handleImageError(event, type, index) {
      if (type === "avatar") {
        // 头像加载失败时使用默认占位图
        event.target.src =
          "https://via.placeholder.com/300x300.png?text=Avatar";
      } else if (type === "project") {
        // 项目图片加载失败时使用随机占位图
        event.target.src = `https://picsum.photos/800/450?random=${index || 0}`;
      }
    },

    // 格式化技能描述，将专业名词添加标签样式
    formatSkillDescription(text) {
      if (!text) return "";
      // 将 {关键词} 格式的文本转换为带有标签样式的HTML
      return text.replace(/{([^}]+)}/g, '<span class="tech-tag">$1</span>');
    },
  },
});

// 挂载Vue应用
app.mount("#app");

// 添加一些CSS动画
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
    .section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .avatar-container {
        animation: float 5s infinite ease-in-out;
    }
</style>
`
);

// 添加二次元风格的装饰元素
function addAnimeDecorations() {
  // 添加随机漂浮的小星星
  const decorations = document.createElement("div");
  decorations.className = "anime-decorations";
  document.body.appendChild(decorations);

  // 创建20个随机星星
  for (let i = 0; i < 20; i++) {
    const star = document.createElement("div");
    star.className = "anime-star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${3 + Math.random() * 7}s`;
    decorations.appendChild(star);
  }

  // 添加CSS
  document.head.insertAdjacentHTML(
    "beforeend",
    `
    <style>
        .anime-decorations {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        }
        
        .anime-star {
            position: absolute;
            width: 3px;
            height: 3px;
            background-color: var(--primary-color);
            border-radius: 50%;
            opacity: 0.5;
            animation: twinkle 5s infinite ease-in-out;
        }
        
        @keyframes twinkle {
            0%, 100% {
                opacity: 0.2;
                transform: scale(1);
            }
            50% {
                opacity: 0.8;
                transform: scale(1.5);
            }
        }
    </style>
    `
  );
}

// 页面加载完成后添加装饰
window.addEventListener("load", addAnimeDecorations);
