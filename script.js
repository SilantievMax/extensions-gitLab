const data = document.querySelectorAll("[data-discussion-id]");
const btns = document.querySelectorAll(".js-vue-toggle-button");
const arrDataSet = [];

data.forEach((item) => {
  const dataset = item.dataset.discussionId;

  arrDataSet.push({ dataset: dataset, flag: true });
});

btns.forEach((btn) => {
  const dataSet = btn.closest("[data-discussion-id]");

  btn.addEventListener("click", (e) => {
    console.log(dataSet);
    arrDataSet.filter()
  });
});

console.log(arrDataSet);

// document.querySelectorAll('.js-vue-toggle-button')[0].closest('[data-discussion-id]')
