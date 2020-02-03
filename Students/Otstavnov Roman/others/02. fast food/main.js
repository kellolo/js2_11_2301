window.addEventListener('load', () => {
  document.querySelector('.add-hamburger-form').addEventListener('submit', e => {
    e.preventDefault();

    const size = [...e.target.size].filter(item => item.checked);
    const stuff = [...e.target.stuff].filter(item => item.checked);
    const toppings = [...e.target.topping].filter(item => item.checked);

    const hamburger = Hamburger.createHamburger(size[0], stuff[0]);
    hamburger && toppings.forEach(hamburger.addTopping.bind(hamburger));


    const hamsHtml = document.createElement('div');
    Hamburger.hamburgers.forEach(hamburger => {
      hamsHtml.insertAdjacentHTML(
        'afterbegin',
        `<div>${hamburger.id}. ${hamburger.size.name}-${hamburger.stuff.name} (+${hamburger.toppings.length} добавки)
       Калл: ${hamburger.calculateCalories()} Цена: ${hamburger.calculatePrice()}</div>`
      )
    });
    document.querySelector('.basket .content').innerHTML = hamsHtml.innerHTML;
  })
})