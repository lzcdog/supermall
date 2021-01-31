export function debounce(fun,deplay){
  let time = null;
  return function () {
    if(time) clearTimeout(time)
    time = setTimeout(() => {
      fun()
    }, deplay);
  }
}