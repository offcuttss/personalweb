/* ============================================================
   个人信息配置文件 —— 想修改网站上的任何内容，只需要改这个文件
   保存后刷新网页即可生效，无需懂其他代码
   ============================================================ */

const SITE_DATA = {
  // ---------- 基本信息 ----------
  profile: {
    name: "xiao921924",                   // 你的名字/昵称
    tagline: "计算机科学与技术 · 大二在读",   // 头像下方的一句话介绍
    school: "上海杉达学院",
    major: "计算机科学与技术",
    grade: "大二",
    avatar: "assets/avatar.jpg",           // 头像路径，换成别的图片改这里
    location: "上海",
    email: "",                             // 可填写邮箱，如需展示
    bio: "热爱编程与技术探索，目前正在参与华为鸿蒙三方库适配大赛，专注于 OpenHarmony 生态建设与原生应用开发。希望用代码创造有价值的东西。",
    atomgit: "https://atomgit.com/xiao921924",  // AtomGit 主页
    // 其他社交链接（不需要就留空 ""）
    github: "",
    blog: ""
  },

  // ---------- 正在进行 ----------
  activities: [
    {
      title: "华为鸿蒙三方库适配大赛",
      period: "2026",
      description: "参与华为鸿蒙三方库适配工作，将常用第三方库移植适配到 OpenHarmony 平台，助力鸿蒙原生生态发展。",
      tags: ["OpenHarmony", "ArkTS", "C/C++", "NAPI"]
    }
  ],

  // ---------- 技能 ----------
  skills: [
    { name: "C", level: 85 },
    { name: "C++", level: 88 },
    { name: "Python", level: 85 },
    { name: "AI Agent 运用", level: 90 },
    { name: "ArkTS / 鸿蒙开发", level: 70 },
    { name: "Git / AtomGit", level: 75 }
  ],

  // ---------- 项目列表 ----------
  // 每做过一个新项目，就照下面的格式复制一段并修改内容即可
  projects: [
    {
      title: "鸿蒙三方库适配",
      period: "2026 · 进行中",
      description: "参与华为鸿蒙三方库适配大赛，负责将开源三方库适配至 OpenHarmony 平台，涉及 NAPI 封装与跨平台编译。",
      tags: ["OpenHarmony", "NAPI", "CMake"],
      link: "https://atomgit.com/xiao921924"
    },
    {
      title: "示例项目：个人博客系统",
      period: "2025 · 课程设计",
      description: "这是一个示例条目，展示项目卡片的样式。把这里替换成你真实做过的项目：包括项目简介、技术栈和链接。",
      tags: ["示例", "Web"],
      link: "https://atomgit.com/xiao921924"
    }
  ],

  // ---------- 获奖与荣誉（没有可以留空数组 []）----------
  honors: [
    // { year: "2026", name: "某某比赛 一等奖" }
  ]
};
