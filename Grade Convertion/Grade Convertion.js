function compute() {
    const midgrade = parseFloat(document.getElementById('midgrade').value);
    const fingrade = parseFloat(document.getElementById('fingrade').value);

    if (isNaN(midgrade) || isNaN(fingrade)) {
      alert("Please enter valid grades.");
      return;
    }
    
    const final = Math.round((midgrade + fingrade) / 2);
    document.getElementById('final').value = final;

    let remark = '';

      if (final >= 99 && final <= 100) {
        remark = '1.0';
      } 
      else if (final >= 97 && final <= 98) {
        remark = '1.1';
      } 
      else if (final >= 95 && final <= 96) {
        remark = '1.2';
      } 
      else if (final >= 93 && final <= 94) {
        remark = '1.3';
      } 
      else if (final >= 91 && final <= 92) {
        remark = '1.4';
      } 
      else if (final === 90) {
        remark = '1.5';
      } 
      else if (final === 89) {
        remark = '1.6';
      } 
      else if (final === 88) {
        remark = '1.7';
      } 
      else if (final === 87) {
        remark = '1.8';
      }
      else if (final === 86) {
        remark = '1.9';
      } 
      else if (final === 85) {
        remark = '2.0';
      }
      else if (final === 84) {
        remark = '2.1';
      } 
      else if (final === 83) {
        remark = '2.2';
      } 
      else if (final === 82) {
        remark = '2.3';
      }
      else if (final === 81) {
        remark = '2.4';
      } 
      else if (final === 80) {
        remark = '2.5';
      } 
      else if (final === 79) {
        remark = '2.6';
      } 
      else if (final === 78) {
        remark = '2.7';
      } 
      else if (final === 77) {
        remark = '2.8';
      }
      else if (final === 76) {
        remark = '2.8';
      } 
      else if (final === 75) {
        remark = '2.9';
      } 
      else {
        remark = '5.0';
      } 

      document.getElementById('remarks').value = remark;
    
}
    function clearForm() {
      document.getElementById('sname').value = '';
      document.getElementById('snumber').value = '';
      document.getElementById('midgrade').value = '';
      document.getElementById('fingrade').value = '';
      document.getElementById('final').value = '';
      document.getElementById('remarks').value = '';
    }