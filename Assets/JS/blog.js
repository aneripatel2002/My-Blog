document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blogList');
  
    // Retrieve blogs from local storage
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  
    // Function to display blogs
    function displayBlogs() {
        blogList.innerHTML = ''; // Clear existing content
  
        blogs.forEach(function(blog) {
            // Create elements for blog post
            const postContainer = document.createElement('div');
            postContainer.classList.add('blog-post-container');
  
            const blogPost = document.createElement('div');
            blogPost.classList.add('blog-post');
            blogPost.innerHTML = `
                <h3>${blog.title}</h3>
                <p class="author">By: ${blog.username}</p>
                <p class="content">${blog.content}</p>
            `;
  
            // Append blog post to container and container to blog list
            postContainer.appendChild(blogPost);
            blogList.appendChild(postContainer);
        });
    }
  
    // Call function to display blogs
    displayBlogs();
  
    // Toggle light mode/dark mode
      const toggleBtn = document.getElementById('toggleBtn');
  
      if (toggleBtn) {
          toggleBtn.addEventListener('click', function() {
              const body = document.body;
              body.classList.toggle('light-mode'); // Toggle light mode class
              body.classList.toggle('dark-mode'); // Toggle dark mode class
          });
      }
  });