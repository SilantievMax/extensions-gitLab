let data = document.querySelectorAll("[data-discussion-id]");
const nameStor = data[0].dataset.discussionId;

let getLocalStoreg = JSON.parse(window.localStorage.getItem(nameStor)) ?? [];

const setItemLocalStorage = (dataId, name) => {
  const newDataArr = [];

  dataId.forEach((item) => {
    newDataArr.push({ dataset: item.dataset.discussionId, flag: false });
  });

  window.localStorage.setItem(name, JSON.stringify(newDataArr));
};

const toggleButton = (name) => {
  const toggleButtons = document.querySelectorAll(".js-vue-toggle-button");

  toggleButtons.forEach((btn) => {
    const dataDiscussionId = btn.closest("[data-discussion-id]");

    btn.addEventListener("click", (e) => {
      const getDataset = dataDiscussionId.dataset.discussionId;
      const newArr = JSON.parse(window.localStorage.getItem(name));

      newArr.filter((e) => {
        if (e.dataset === getDataset) {
          e.flag = !e.flag;
        }
      });

      window.localStorage.setItem(name, JSON.stringify(newArr));
    });
  });
};

const closeComment = (dataId, name) => {
  const comments = document.querySelectorAll("[data-testid='thread-toggle']");
  getLocalStoreg = JSON.parse(window.localStorage.getItem(name));

  comments.forEach((coment, id) => {
    const element = dataId[id];

    if (element?.flag) {
      const colorElement = coment.closest(".timeline-content");
      colorElement.style.borderColor = "#be29ff";
      colorElement.style.color = "#be29ff";
      coment.click();
    }
  });
};

const arrDataSet = [];

if (getLocalStoreg.length > 0) {
  if (getLocalStoreg.length < data.length) {
    getLocalStoreg = JSON.parse(window.localStorage.getItem(nameStor));

    data.forEach((item, key) => {
      if (item.dataset.discussionId === getLocalStoreg[key]?.dataset) {
        arrDataSet.push(getLocalStoreg[key]);
      } else {
        arrDataSet.push({ dataset: item.dataset.discussionId, flag: false });
      }
      window.localStorage.setItem(nameStor, JSON.stringify(arrDataSet));
    });
  }

  closeComment(getLocalStoreg, nameStor);
} else {
  setItemLocalStorage(data, nameStor);
}

toggleButton(nameStor);

console.log("%cSilantevMax", "color:#233E82; font-family:'Ubuntu'; display: block;font-weight:bold; font-size:48px;");
console.log("%cНе обращай внимания на мой код, я джун и писал его 15 минут", "color:#233E82; font-family:'Ubuntu'; font-weight:100; font-size:24px;");
