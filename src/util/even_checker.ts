export function is_even(value: number) : boolean{
    return value % 2 === 0;
}

export async function is_even_async(value: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(value % 2 === 0);
      }, 200);
    });
  }