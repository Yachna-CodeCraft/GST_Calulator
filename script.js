function fmt(n) { return '₹' + n.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2}); }
function calc() {
  const amt = parseFloat(document.getElementById('amount').value) || 0;
  const rate = parseFloat(document.getElementById('rate').value);
  const type = document.getElementById('type').value;
  const tax = amt * rate / 100;
  const half = rate / 2;
  document.getElementById('r-sub').textContent = fmt(amt);
  document.getElementById('r-total').textContent = fmt(amt + tax);
  if (type === 'intra') {
    document.getElementById('r-tax1-row').style.display = 'flex';
    document.getElementById('r-tax2-row').style.display = 'flex';
    document.getElementById('r-tax1-lbl').textContent = 'CGST ' + half + '%';
    document.getElementById('r-tax2-lbl').textContent = 'SGST ' + half + '%';
    document.getElementById('r-tax1').textContent = fmt(tax/2);
    document.getElementById('r-tax2').textContent = fmt(tax/2);
  } else {
    document.getElementById('r-tax1-row').style.display = 'flex';
    document.getElementById('r-tax2-row').style.display = 'none';
    document.getElementById('r-tax1-lbl').textContent = 'IGST ' + rate + '%';
    document.getElementById('r-tax1').textContent = fmt(tax);
  }
}