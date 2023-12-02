class controlPanels {
  #items

  constructor(elts) {
      this.#items = elts
  }

  accordionClic() {
      this.#items.forEach(accordion => {

          if (accordion.classList.contains('stl_accordion-header')) {

              accordion.addEventListener('click', (e) => toggleAccordion(accordion))

              accordion.addEventListener('keydown', function(e) {
                  if (e.key == "Enter" || e.key == " ") {
                      toggleAccordion(accordion)
                  }
              })
          }
      })
  }

}

const toggleAccordion = function (elt) {

  let parent = elt.parentElement
  const header = parent.querySelector('.stl_accordion-header')
  const content = parent.querySelector('.stl_accordion-content')

  var vHeader = header.getAttribute('aria-expanded');
  var nHeader = vHeader === 'true' ? 'false' : 'true'
  header.setAttribute('aria-expanded', nHeader)
  

  if (nHeader === 'true') {
      parent.className += ' active'
      content.className += ' active'
  } else {
      parent.classList.remove('active');
      content.classList.remove('active');
  }

}

addEventListener('load', function () {

  const items = document.querySelectorAll(".stl_accordion[role=tablist]");

  items.forEach(item => {
      const allItems = Array.from(item.querySelectorAll('.stl_accordion-header'))
      const panels = new controlPanels(allItems)
      panels.accordionClic()
  })
})