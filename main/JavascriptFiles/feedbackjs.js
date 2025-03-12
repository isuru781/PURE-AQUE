    function previewFeedback() {
        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const comment = document.getElementById("comment").value;
        const subject = document.getElementById("subject").value;
        const category = document.getElementById("category").value;

        // Display preview section
        document.getElementById("preview-name").innerText = name;
        document.getElementById("preview-email").innerText = email;
        document.getElementById("preview-rating").innerText = rating;
        document.getElementById("preview-comment").innerText = comment;
        document.getElementById("preview-subject").innerText = subject;
        document.getElementById("preview-category").innerText = category;

        document.getElementById("feedback-form").style.display = "none";
        document.getElementById("preview-section").style.display = "block";
    }

    function editFeedback() {
        // Hide preview section and show form
        document.getElementById("preview-section").style.display = "none";
        document.getElementById("feedback-form").style.display = "block";
    }

    function submitFeedback() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const comment = document.getElementById("comment").value;
        const subject = document.getElementById("subject").value;
        const category = document.getElementById("category").value;

        // Construct the mailto link
        const mailtoLink = `mailto:imantha.20230606@iit.ac.lk?subject=${encodeURIComponent(subject || 'Feedback')}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ARating: ${encodeURIComponent(rating)}%0AComment: ${encodeURIComponent(comment)}%0ACategory: ${encodeURIComponent(category)}`;

        // Open mailto link
        window.location.href = mailtoLink;

        // Display confirmation section
        document.getElementById("feedback-form").reset(); // Optionally reset the form
        document.getElementById("preview-section").style.display = "none";
        document.getElementById("confirmation-section").style.display = "block";
    }

    document.getElementById("feedback-form").addEventListener("submit", function(event) {
        event.preventDefault();
        previewFeedback();
    });