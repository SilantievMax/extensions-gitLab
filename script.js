const data = document.querySelectorAll("[data-discussion-id]");
const btns = document.querySelectorAll(".js-vue-toggle-button");
const comment = document.querySelectorAll("[data-testid='thread-toggle']");

const nameStor = data[0].dataset.discussionId;
const arrDataSet = [];

const getLocalStoreg = JSON.parse(window.localStorage.getItem(nameStor)) ?? [];

if (getLocalStoreg.length > 0) {
  comment.forEach((item, id) => {
    const element = getLocalStoreg[id];

    if (element.flag) {
      const colorElement = item.closest(".timeline-content");
      colorElement.style.borderColor = "#be29ff";
      colorElement.style.color = "#be29ff";
      item.click();
    }
  });
} else {
  data.forEach((item) => {
    const dataset = item.dataset.discussionId;

    arrDataSet.push({ dataset: dataset, flag: false });
  });

  window.localStorage.setItem(nameStor, JSON.stringify(arrDataSet));
}

btns.forEach((btn) => {
  const dataSet = btn.closest("[data-discussion-id]");

  btn.addEventListener("click", (e) => {
    const newDataset = dataSet.dataset.discussionId;
    const newArr = JSON.parse(window.localStorage.getItem(nameStor));

    newArr.filter((e) => {
      if (e.dataset === newDataset) {
        e.flag = !e.flag;
      }

      window.localStorage.setItem(nameStor, JSON.stringify(newArr));
    });
  });
});

console.log("%cSilantevMax", "color:#233E82; font-family:'Ubuntu'; display: block;font-weight:bold; font-size:48px;");
console.log("%cНе обращай внимания на мой код, я джун и писал его 15 минут", "color:#233E82; font-family:'Ubuntu'; font-weight:100; font-size:24px;");
