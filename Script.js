/* =========================================================
   CPIT 405 – Lab 5 : CV 2.0 (JavaScript DOM)
   ========================================================= */

/* ---------- Task 1 : Dark / Light Mode ---------- */
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

/* ---------- Task 2 : Show More / Show Less ---------- */
const aboutBtn = document.getElementById("about-toggle");
const aboutMore = document.getElementById("about-more");

aboutBtn.addEventListener("click", function () {
    aboutMore.classList.toggle("hidden");

    if (aboutMore.classList.contains("hidden")) {
        aboutBtn.textContent = "Show More";
    } else {
        aboutBtn.textContent = "Show Less";
    }
});

/* ---------- Task 3 : Dynamic Projects ---------- */
const projects = [
    {
        title: "Badeel – Aviation Station Operations App",
        description: "Role-based mobile app for aviation security and station operations, built with a development team during my SAUDIA summer internship.",
        category: "Programming",
        technologies: ["Flutter", "BLoC", "ASP.NET Core", "Figma"]
    },
    {
        title: "CareOne Queue Management System",
        description: "Analyzed requirements and designed a system to organize patient queues, documented with use case, class and sequence diagrams following the Waterfall model.",
        category: "Programming",
        technologies: ["Java", "UML", "Waterfall"]
    },
    {
        title: "Interactive Personal CV Website",
        description: "This responsive CV website, styled with CSS and made interactive with JavaScript DOM features such as dark mode and project filtering.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Athar (أثر) – Smart E-Waste Management",
        description: "Senior project: a platform where AI assesses old devices for reuse or disposal, with blockchain tracking and carbon credit rewards.",
        category: "Web",
        technologies: ["React", "FastAPI", "YOLOv8", "Solidity"],
        status: "In progress"
    }
];

const projectsContainer = document.getElementById("projects-container");

function renderProjects(category) {
    // Clear old cards first so no duplicates appear
    projectsContainer.innerHTML = "";

    // Keep only the projects that match the selected category
    const filtered = projects.filter(function (project) {
        return category === "All" || project.category === category;
    });

    if (filtered.length === 0) {
        const empty = document.createElement("p");
        empty.className = "no-projects";
        empty.textContent = "No projects in this category yet.";
        projectsContainer.appendChild(empty);
        return;
    }

    filtered.forEach(function (project) {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        // Small badge for unfinished projects
        if (project.status) {
            const badge = document.createElement("span");
            badge.className = "status-badge";
            badge.textContent = project.status;
            title.appendChild(badge);
        }

        const cat = document.createElement("h4");
        cat.textContent = project.category;

        const desc = document.createElement("p");
        desc.textContent = project.description;

        const techList = document.createElement("ul");
        techList.className = "tech-list";

        project.technologies.forEach(function (tech) {
            const li = document.createElement("li");
            li.textContent = tech;
            techList.appendChild(li);
        });

        card.appendChild(title);
        card.appendChild(cat);
        card.appendChild(desc);
        card.appendChild(techList);

        projectsContainer.appendChild(card);
    });
}

// Show all projects when the page loads
renderProjects("All");

/* ---------- Task 4 : Project Filtering ---------- */
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Highlight the clicked button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });
        button.classList.add("active");

        // Reuse the same rendering function
        renderProjects(button.dataset.category);
    });
});

/* ---------- Task 5 : Print / Save as PDF ---------- */
const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", function () {
    window.print();
});