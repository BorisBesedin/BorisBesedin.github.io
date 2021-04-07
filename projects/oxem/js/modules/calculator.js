const calculator = () => {
    const price = document.querySelector('#price'),
          procent = document.querySelector('#procent'),
          period = document.querySelector('#period'),
          credit = 0.12 / 12, // процентная ставка в месяц 12% / 100 / 12

          startPayElem = document.querySelector('.calc-inputs__procent-calc'),
          sumElem = document.querySelector('.calc-result__sum'),
          monthPayElem = document.querySelector('.calc-result__month-pay'),

          calcBtn = document.querySelector('.calc-result__button');

    let startPay,
        monthPay,
        sum;

    startPay = Math.floor(procent.value * price.value / 100)
    monthPay = Math.floor((price.value - startPay) * (credit + (credit / ((1 + credit) ** period.value - 1))))
    sum = Math.floor(startPay + period.value * monthPay)

    const currency = {
        currency: 'rub',
        style: 'currency',
        minimumFractionDigits: 0
    }

    function formatNum(num, options) {
        return new Intl.NumberFormat('ru-RU', options).format(num)
    }

    startPayElem.textContent = formatNum(startPay, currency)
    monthPayElem.textContent = formatNum(monthPay, currency)
    sumElem.textContent = formatNum(sum, currency)

    calcBtn.addEventListener('click', () => {
        window.calculatedData = {
            price: price.value,
            period: period.value,
            startPay: startPay,
            monthPay: monthPay,
            sum: sum
        }
    })
}

export default calculator

