async function fetchGitHubRepos() {
    const username = "Zitr-ctrl"; // Reemplaza con tu usuario de GitHub
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);
        const repos = await response.json();

        const projectsContainer = document.getElementById("github-projects");
        projectsContainer.innerHTML = ""; // Limpiar antes de agregar nuevos

        repos.forEach(repo => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project");
            projectElement.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "Sin descripción"}</p>
                <a href="${repo.html_url}" target="_blank">Ver en GitHub</a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    } catch (error) {
        console.error("Error al obtener los repositorios:", error);
    }
}

// Llamar a la función cuando la página cargue
document.addEventListener("DOMContentLoaded", fetchGitHubRepos);


// Animación de desplazamiento suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});