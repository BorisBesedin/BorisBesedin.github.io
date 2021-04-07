const formatedNum = () => {
    const calcOutputs = document.querySelectorAll('.calc-output')

    const currency = {
        currency: 'rub',
        style: 'currency',
        minimumFractionDigits: 0
    }

    function formatNum(num, options) {
        return new Intl.NumberFormat('ru-RU', options).format(num)
    }

    // calcOutputs.forEach(item => {
    //     item.textContent = formatNum(item.textContent, currency)
    // })
}
export default formatedNum