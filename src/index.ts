import {is_even, is_even_async} from './util/even_checker'


console.log("is_even(2) " + is_even(2))
console.log("is_even(3) " + is_even(3))

is_even_async(2).then(p => console.log("is_even_async(2) " + p)).catch(console.log)
is_even_async(3).then(p => console.log("is_even_async(3)" + p)).catch(console.log)
