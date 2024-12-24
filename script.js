// Optional: Add dynamic interactions here, such as order button alerts
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Order placed successfully!');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("review-modal");
    const writeReviewBtn = document.getElementById("write-review-btn");
    const closeModalBtn = document.querySelector(".close-btn");
    const reviewForm = document.getElementById("review-form");
    const reviewsContainer = document.getElementById("reviews-container");

    // Show modal
    writeReviewBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close modal
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Submit review
    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const reviewText = document.getElementById("review-text").value;
        const reviewImage = document.getElementById("review-image").files[0];

        let imageURL = "default-profile.jpg"; // Default image
        if (reviewImage) {
            imageURL = URL.createObjectURL(reviewImage);
        }

        const reviewHTML = `
            <div class="review">
                <img src="${imageURL}" alt="Profile" class="profile-pic">
                <div>
                    <p>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>"${reviewText}"</p>
                    <p>- ${name}</p>
                </div>
            </div>
        `;

        reviewsContainer.insertAdjacentHTML("beforeend", reviewHTML);
        modal.style.display = "none";
        reviewForm.reset();
    });
});
