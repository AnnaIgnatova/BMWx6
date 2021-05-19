const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFielsElems = document.querySelectorAll('[data-tabs-field]');
const tabsTitleElems = document.querySelectorAll('[data-tabs-title]');

for (const tab of tabsHandlerElems) {
  tab.addEventListener('click', () => {
    tabsHandlerElems.forEach(item => {
      if (tab === item) {
        item.classList.add('design-list__item_active');
      } else {
        item.classList.remove('design-list__item_active');
      }
    });
    tabsFielsElems.forEach(item => {
      if (item.dataset.tabsField === tab.dataset.tabsHandler) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
    tabsTitleElems.forEach(title => {
      if (title.dataset.tabsTitle === tab.dataset.tabsHandler) {
        title.classList.remove('hidden');
      } else {
        title.classList.add('hidden');
      }
    });
  });
}