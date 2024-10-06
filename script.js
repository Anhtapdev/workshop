const storyForm = document.getElementById('story-form');  
const storyTitleInput = document.getElementById('story-title');  
const storyContentInput = document.getElementById('story-content');  
const storyList = document.getElementById('story-list');  

// Hàm để lưu trữ và hiển thị bài viết  
function saveStory(title, content) {  
    const stories = JSON.parse(localStorage.getItem('stories')) || [];  
    stories.push({ title, content });  
    localStorage.setItem('stories', JSON.stringify(stories));  
    displayStories();  
}  

// Hàm để hiển thị bài viết  
function displayStories() {  
    const stories = JSON.parse(localStorage.getItem('stories')) || [];  
    storyList.innerHTML = '';  
    stories.forEach(story => {  
        const storyItem = document.createElement('div');  
        storyItem.className = 'story-item';  
        storyItem.innerHTML = `<h3>${story.title}</h3><p>${story.content}</p>`;  
        storyList.appendChild(storyItem);  
    });  
}  

// Xử lý sự kiện khi người dùng gửi biểu mẫu  
storyForm.addEventListener('submit', function (event) {  
    event.preventDefault();  
    const title = storyTitleInput.value;  
    const content = storyContentInput.value;  
    saveStory(title, content);  
    storyForm.reset();  
});  

// Hiển thị bài viết khi trang được tải  
window.onload = displayStories;