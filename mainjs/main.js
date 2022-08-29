$(function () {
  const pTag1 = document.querySelector(".first-parallel");
  const pTag2 = document.querySelector(".second-parallel");

  const textArr1 =
    "#Mont Saint Michel #SJ_Story #Mont Saint Michel #SJ_Story #Mont Saint Michel #SJ_Story".split(
      " "
    );
  const textArr2 =
    "[SAINT JAMES in FRANCE] [SAINT JAMES in FRANCE] [SAINT JAMES in FRANCE]".split(
      " "
    );

  function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
      element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
    }
  }

  initTexts(pTag1, textArr1);
  initTexts(pTag2, textArr2);

  let count1 = 0;
  let count2 = 0;

  function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
      element.style.transform = `translateX(0)`;
      count = 0;
    }
    element.style.transform = `translateX(${count * direction}px)`;
    return count;
  }

  function animate() {
    count1++;
    count2++;

    count1 = marqueeText(count1, pTag1, -1);
    count2 = marqueeText(count2, pTag2, 1);

    window.requestAnimationFrame(animate);
  }
  animate();

  /*circle*/
  const text = document.querySelector(".circle_txt p");
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) =>
        `<span style="transform:rotate(${i * 6.8}deg)">${char}</span>`
    )
    .join("");
});
