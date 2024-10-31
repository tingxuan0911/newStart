// 加上千分位符號，且四捨五入至小數點第三位
export function formatCurrency(amount: number | string): string {
  amount = Number(amount);
  if (!amount) return '--';
  return new Intl.NumberFormat('zh-TW', {
    style: 'decimal'
  }).format(amount);
}
