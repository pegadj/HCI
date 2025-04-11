const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  function generateCalendar(year) {
    for (let month = 0; month < 12; month++) {
      const daysContainer = document.querySelector(`#month-${month} .days`);
      const monthHeader = document.querySelector(`#month-${month} .month-header`);
  
      monthHeader.textContent = monthNames[month];
  
      const firstDay = new Date(year, month, 1).getDay();
      const numDays = new Date(year, month + 1, 0).getDate();
  
      for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('empty');
        daysContainer.appendChild(emptyDiv);
      }
  
      for (let day = 1; day <= numDays; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        daysContainer.appendChild(dayDiv);
      }
    }
  }

generateCalendar(new Date().getFullYear());