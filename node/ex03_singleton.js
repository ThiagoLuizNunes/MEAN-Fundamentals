let number = 1;

function showNext() {
  console.log(number++);
}

const showNext_only = (num) => {
  console.log(++num);
}
module.exports = {showNext,showNext_only};
