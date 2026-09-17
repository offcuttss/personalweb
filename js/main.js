/* 页面渲染逻辑 —— 一般不需要修改这个文件 */

document.addEventListener("DOMContentLoaded", () => {
  const p = SITE_DATA.profile;

  // 基本信息
  document.getElementById("avatar").src = p.avatar;
  document.getElementById("name").textContent = p.name;
  document.getElementById("name-nav").textContent = p.name;
  document.title = p.name + " · 个人主页";
  document.getElementById("tagline").textContent = p.tagline;
  document.getElementById("bio").textContent = p.bio;

  // 信息栏
  const infoList = document.getElementById("info-list");
  const infos = [
    ["学校", p.school],
    ["专业", p.major],
    ["年级", p.grade],
    ["坐标", p.location]
  ];
  if (p.email) infos.push(["邮箱", p.email]);
  infoList.innerHTML = infos
    .map(([k, v]) => `<div class="info-item"><span class="info-key">${k}</span><span>${v}</span></div>`)
    .join("");

  // 链接按钮
  const links = document.getElementById("links");
  let linkHtml = `<a class="btn btn-primary" href="${p.atomgit}" target="_blank" rel="noopener">AtomGit 主页</a>`;
  if (p.github) linkHtml += `<a class="btn" href="${p.github}" target="_blank" rel="noopener">GitHub</a>`;
  if (p.blog) linkHtml += `<a class="btn" href="${p.blog}" target="_blank" rel="noopener">博客</a>`;
  if (p.email) linkHtml += `<a class="btn" href="mailto:${p.email}">联系我</a>`;
  links.innerHTML = linkHtml;

  // 正在进行
  const actEl = document.getElementById("activities");
  actEl.innerHTML = SITE_DATA.activities
    .map(
      (a) => `
    <div class="card activity-card">
      <div class="card-head">
        <h3>${a.title}</h3>
        <span class="badge badge-active">${a.period}</span>
      </div>
      <p>${a.description}</p>
      <div class="tags">${a.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </div>`
    )
    .join("");

  // 技能
  document.getElementById("skills").innerHTML = SITE_DATA.skills
    .map(
      (s) => `
    <div class="skill">
      <div class="skill-row"><span>${s.name}</span><span class="skill-num">${s.level}%</span></div>
      <div class="skill-bar"><div class="skill-fill" style="width:${s.level}%"></div></div>
    </div>`
    )
    .join("");

  // 项目
  document.getElementById("projects").innerHTML = SITE_DATA.projects
    .map(
      (pr) => `
    <div class="card project-card">
      <div class="card-head">
        <h3>${pr.title}</h3>
        <span class="period">${pr.period}</span>
      </div>
      <p>${pr.description}</p>
      <div class="card-foot">
        <div class="tags">${pr.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        ${pr.link ? `<a class="project-link" href="${pr.link}" target="_blank" rel="noopener">查看 →</a>` : ""}
      </div>
    </div>`
    )
    .join("");

  // 荣誉（为空则隐藏整个板块）
  const honorSection = document.getElementById("honors-section");
  if (SITE_DATA.honors && SITE_DATA.honors.length) {
    honorSection.style.display = "";
    document.getElementById("honors").innerHTML = SITE_DATA.honors
      .map((h) => `<li><span class="period">${h.year}</span>${h.name}</li>`)
      .join("");
  } else {
    honorSection.style.display = "none";
  }

  document.getElementById("year").textContent = new Date().getFullYear();
});
