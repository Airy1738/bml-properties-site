document.addEventListener("DOMContentLoaded", () => {
    // Load properties from localStorage if available
    let properties = JSON.parse(localStorage.getItem("properties")) || [];

    // Function to render properties on the listings page
    function renderProperties() {
        const propertyListDiv = document.getElementById("property-list");
        if (propertyListDiv) {
            propertyListDiv.innerHTML = "";
            properties.forEach(prop => {
                let div = document.createElement("div");
                div.classList.add("property");
                div.innerHTML = `
                    <img src="${prop.image}" alt="${prop.title}">
                    <div class="details">
                        <h3>${prop.title}</h3>
                        <p>${prop.location}</p>
                        <p><strong>Price:</strong> ${prop.price}</p>
                    </div>
                `;
                propertyListDiv.appendChild(div);
            });
        }
    }

    // Render properties if we're on the listings page
    renderProperties();

    // Admin - Add property form handling
    const addPropertyForm = document.getElementById("add-property-form");
    if (addPropertyForm) {
        addPropertyForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("prop-title").value;
            const location = document.getElementById("prop-location").value;
            const price = document.getElementById("prop-price").value;
            const image = document.getElementById("prop-image").value;
            const description = document.getElementById("prop-description").value;
            let newProp = { title, location, price, image, description };
            properties.push(newProp);
            localStorage.setItem("properties", JSON.stringify(properties));
            document.getElementById("admin-response").textContent = "Property added successfully!";
            addPropertyForm.reset();
            // Optionally, re-render properties if the listings page is on the same domain
            renderProperties();
        });
    }

    // Dummy form handling for schedule page
    const scheduleForm = document.getElementById("schedule-form");
    if (scheduleForm) {
        scheduleForm.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("schedule-response").textContent = "Your visit has been scheduled!";
            scheduleForm.reset();
        });
    }

    // Dummy form handling for contact page
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("contact-response").textContent = "Your message has been sent!";
            contactForm.reset();
        });
    }
});
