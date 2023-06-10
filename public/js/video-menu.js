document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tab');
    var imageTable = document.getElementById('imageTable');
    var contentStyle = document.querySelector('.content-style');
    
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var selectedTab = this.dataset.tab;
        
        tabs.forEach(function(tab) {
          tab.classList.remove('active');
        });
        this.classList.add('active');
        
        var tableCells = imageTable.getElementsByTagName('td');
        for (var i = 0; i < tableCells.length; i++) {
          var cell = tableCells[i];
          cell.style.display = 'none';
        }
        imageTable.getElementsByClassName(selectedTab)[0].style.display = 'table-cell';
        
        contentStyle.className = 'content-style ' + selectedTab;
      });
    });
  });
  