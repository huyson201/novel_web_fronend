function formatCurrency(number:number) {
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace('.00','');
  }

export default formatCurrency