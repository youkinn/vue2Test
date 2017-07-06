/**
 * 计算根的font-size
 *
 */
const flexBox = () => {
  let fontSize = document.documentElement.clientWidth / 6.4;
  if (fontSize < 50) {
    fontSize = 50;
  }
  if (fontSize > 100) {
    fontSize = 100;
  }
  document.documentElement.style.fontSize = `${fontSize}px`;
};

export default flexBox;
