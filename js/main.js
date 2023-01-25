$(function() {
  //**************** variables ****************//
  const filter_btns = document.querySelectorAll(".filter-btn");
  const skills_wrap = document.querySelector(".skills");
  const skills_bars = document.querySelectorAll(".skill-progress");
  
  /**
   * @description - checks the distant between the element and the top edge of the
   * window
   * @param el - the element
   * @returns {boolean} - returns true, if the top of the element has pased the top
   * edge of the window; otherwise, returns false.
   */
  function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
  }
  
  /**
   * @description - if the element has not scrolled passed, return; otherwise execute the
   * code below the condition statement.
   */
  function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }
  
  window.addEventListener('scroll', () => {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
    
  });
  
  filter_btns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filter_btns.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
      
      let filterValue = btn.dataset.filter;
      
      $(".grid").isotope({ filter: filterValue });
    })
  );
  
  $(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
  });
  
});