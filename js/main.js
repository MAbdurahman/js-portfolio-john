$(function () {
  //**************** variables ****************//
  const filter_btns = document.querySelectorAll('.filter-btn');
  const skills_wrap = document.querySelector('.skills');
  const skills_bars = document.querySelectorAll('.skill-progress');
  const records_wrap = document.querySelector('.records');
  const records_numbers = document.querySelectorAll('.number');
  
  /**
   * @description - checks the distant between the element and the top edge of the
   * window
   * @param el - the element
   * @returns {boolean} - returns true, if the top of the element has pased the top
   * edge of the window; otherwise, returns false.
   */
  function checkScroll (el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
  };
  
  /**
   * @description - checks whether window has scrolled pass the element. If it has, return;
   * otherwise, execute the inner function updateCount. This function animates the count of
   * the number base on the data-num in index.html.
   */
  function countUp () {
    if (!checkScroll(records_wrap)) return;
    records_numbers.forEach((numb) => {
      const updateCount = () => {
        let currentNum = +numb.innerText;
        let maxNum = +numb.dataset.num;
        let speed = 800;
        const increment = Math.ceil(maxNum / speed);
        
        if (currentNum < maxNum) {
          numb.innerText = currentNum + increment;
          setTimeout(updateCount, 100);
        } else {
          numb.innerText = maxNum;
        }
      };
      
      setTimeout(updateCount, 500);
    });
  };
  
  /**
   * @description - if the element has not scrolled passed, return; otherwise execute the
   * code below the condition statement.
   */
  function skillsEffect () {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }
  
  window.addEventListener('scroll', () => {
    countUp();
    skillsEffect();
    
  });
  
  filter_btns.forEach((btn) =>
    btn.addEventListener('click', () => {
      filter_btns.forEach((button) => button.classList.remove('active'));
      btn.classList.add('active');
      
      let filterValue = btn.dataset.filter;
      
      $('.grid').isotope({ filter: filterValue });
    })
  );
  
  /**
   * @description - vendor isotope
   */
  $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s'
  });
  
  /**
   * @description - vendor swiper
   */
  const mySwiper = new Swiper(".swiper-container", {
    speed: 1100,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
  
});