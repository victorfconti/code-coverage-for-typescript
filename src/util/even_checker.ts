export function is_even(number: number) : boolean{
    return number % 2 == 0;
}

export async function is_even_async(number: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(number % 2 == 0);
      }, 200);
    });
  }