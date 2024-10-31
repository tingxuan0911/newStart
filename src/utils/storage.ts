export function getStorage(key: string, defaultValue?: any): string | any {
  return localStorage.getItem(key) || defaultValue || '';
}

export function setStorage(key: string, value: any): void {
  value = value.toString();
  // sessionStorage.setItem(key, value)
  localStorage.setItem(key, value);
}

export function removeStorage(key: string): void {
  // sessionStorage.removeItem(key)
  localStorage.removeItem(key);
}

export function setStorageArr(key: string, value: any): void {
  value = value.toString();
  // sessionStorage.setItem(key, JSON.stringify(value))
  localStorage.setItem(key, JSON.stringify(value));
}
