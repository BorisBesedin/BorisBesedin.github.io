const menu = (toggleSelector, menuSelector, closeBtn) => {
    const menuList = document.querySelector(menuSelector)
    const toggle = document.querySelector(toggleSelector)
    const close = document.querySelector(closeBtn)
    const overlay = document.querySelector('.menu-overlay')

    toggle.addEventListener('click', () => {
        menuList.classList.add('menu--opened')
        overlay.style.display = 'block'
        document.body.style.overflow = 'hidden'
    })

    close.addEventListener('click', () => {
        menuList.classList.remove('menu--opened')
        overlay.style.display = 'none'
        document.body.style.overflow = 'scroll'
    })
}

export default menu;