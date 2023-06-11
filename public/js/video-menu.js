document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.querySelectorAll('.tab');
  var mainback = document.querySelector('.main-back');
  var imageTable = document.getElementById('imageTable');
  var contentStyle = document.querySelector('.content-style');

  function activateTab(tab) {
    var selectedTab = tab.dataset.tab;

    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });
    tab.classList.add('active');

    var tableCells = imageTable.getElementsByTagName('td');
    for (var i = 0; i < tableCells.length; i++) {
      var cell = tableCells[i];
      cell.style.display = 'none';
    }
    imageTable.getElementsByClassName(selectedTab)[0].style.display = 'table-cell';

    contentStyle.className = 'content-style ' + selectedTab;

    if (selectedTab === 'tab1') {
      mainback.style.minHeight = '140vh';
    } else if (selectedTab === 'tab4' || selectedTab === 'tab5') {
      mainback.style.minHeight = 'auto';
      mainback.style.maxHeight = '100vh'
    } else {
      mainback.style.minHeight = 'auto';
      mainback.style.maxHeight = '70vh'
    }

  }

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      activateTab(this);
    });
  });

  // Activate the "tab1" on page load
  var initialTab = document.querySelector('.tab[data-tab="tab1"]');
  activateTab(initialTab);
});