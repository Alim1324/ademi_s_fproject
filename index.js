function copyCode(elementId) {
    const code = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(code)
      .then(() => alert('Код скопирован в буфер обмена!'))
      .catch(err => alert('Ошибка при копировании: ' + err));
  }
  // Select elements from the page
const commentInput = document.getElementById("commentInput");
const addCommentBtn = document.getElementById("addCommentBtn");
const commentList = document.getElementById("commentList");

// Function to add a comment
function addComment() {
  const commentText = commentInput.value.trim(); // Remove extra spaces

  if (commentText) {
    // Create a new comment element
    const commentItem = document.createElement("div");
    commentItem.className = "comment-item";
    commentItem.textContent = commentText;

    // Add the comment to the list
    commentList.appendChild(commentItem);

    // Clear the input field
    commentInput.value = "";
  } else {
    alert("The comment cannot be empty!");
  }
}

// Add event listener to the button
addCommentBtn.addEventListener("click", addComment);