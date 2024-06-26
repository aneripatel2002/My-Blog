document.addEventListener('DOMContentLoaded', function() {
    let darkMode = true;

    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const blogTitle = document.getElementById('blogTitle').value;
            const blogContent = document.getElementById('blogContent').value;

            if (!username || !blogTitle || !blogContent) {
                alert('Please complete all fields.');
                return;
            }

            const data = {
                username: username,
                title: blogTitle,
                content: blogContent
            };

            // Retrieve existing blogs from localStorage
            const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

            // Add the new blog to the array
            blogs.unshift(data);

            // Store the updated array back in localStorage
            localStorage.setItem('blogs', JSON.stringify(blogs));

            // Redirect to blog.html
            window.location.href = 'blog.html';
        });
    }

    const toggleBtn = document.getElementById('toggleBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const body = document.body;
            if (darkMode) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                darkMode = false;
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                darkMode = true;
            }
        });
    }
});
