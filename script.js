const data = document.querySelectorAll("[data-discussion-id]");

data.forEach((item) => {
  console.log(item.dataset.discussionId);
});
