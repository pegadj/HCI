function compute() {
    const midgrade = parseFloat(document.getElementById('midgrade').value);
    const fingrade = parseFloat(document.getElementById('fingrade').value);
    const final = (midgrade + fingrade)/2;

    document.getElementById('final').value = final;
}  
    let remark = '';
      if (final == 99 && final == 100) {
        remark = '1.0';
      } 
      else if (final == 97 && final == 98) {
        remark = '1.1';
      } 
      else if (final == 95 && final == 96) {
        remark = '1.2';
      } 
      else if (final == 93 && final == 94) {
        remark = '1.3';
      } 
      else if (final == 91 && final == 92) {
        remark = '1.1';
      } 


      document.getElementById('remarks').value = remark;
    

    function resetForm() {
      document.getElementById('name').value = '';
      document.getElementById('studentNumber').value = '';
      document.getElementById('midterm').value = '';
      document.getElementById('final').value = '';
      document.getElementById('finalGrade').value = '';
      document.getElementById('remarks').value = '';
    }