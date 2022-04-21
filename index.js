const { log } = console
const formBtns = document.querySelector('.form-btns')
const btns = document.querySelectorAll('.btn')
const question = document.querySelector('.question')
const succese = document.querySelector('.succese')
const submitBtn = document.querySelector('.submit-btn')
const textSuccese  = document.querySelector('.text-succese')


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if( ![...btns].some((btn) => btn.classList.contains('hold'))) {
        return
    }

    question.classList.add('hide')
    succese.classList.add('show')
    const valueOfHold = document.querySelector('.hold').value
    textSuccese.innerHTML = `You selected ${valueOfHold} out of 5`
})


formBtns.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    btns.forEach((btn) => {
      btn.classList.remove('hold')
    })
    e.target.classList.add('hold')
  }
})


