

export function Capitalize(str: string): string {
    return str.toUpperCase();
  }
  
  export function Truncate(str: string, length: number): string {
    return str.length > length ? `${str.substring(0, length)}...` : str;
  }