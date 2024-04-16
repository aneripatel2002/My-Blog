document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blogList');

    // Toggle between Dark Mode and Light Mode
    const toggleBtn = document.getElementById('toggleBtn');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const body = document.body;
            body.classList.toggle('light-mode');
            body.classList.toggle('dark-mode');
        });
    }

    // Show blogs
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // Function to display blogs
    function displayBlogs() {
        blogList.innerHTML = '';

        blogs.forEach(function(blog) {
            const postContainer = document.createElement('div');
            postContainer.classList.add('blog-post-container');

            const blogPost = document.createElement('div');
            blogPost.classList.add('blog-post');
            blogPost.innerHTML = `
                <h3>${blog.title}</h3>
                <p class="author">By: ${blog.username}</p>
                <p class="content">${blog.content}</p>
            `;

            postContainer.appendChild(blogPost);
            blogList.appendChild(postContainer);
        });
    }

    displayBlogs();
});
