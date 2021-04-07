import calculator from '../modules/calculator';

const range = (inputSelector, lineSelector, toggleSelector, min, max) => {
    const input = document.querySelector(inputSelector),
          line = document.querySelector(lineSelector),
          toggleBtn = document.querySelector(toggleSelector);

    const dropToggle = function (toggle, evt) {
        evt.preventDefault();

        let startX = evt.clientX;

        let onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();

            let shift = startX - moveEvt.clientX;

            startX = moveEvt.clientX;

            setLine()

            input.value = Math.floor((toggle.offsetLeft + 10) * ((max - min) / line.parentNode.offsetWidth) + min);
            toggle.style.left = (toggle.offsetLeft - shift) + 'px';
            calculator()

            if (toggleBtn.offsetLeft <= -10) {
                toggleBtn.style.left = -10 + 'px';
                line.style.width = 0;
            }

            if (toggleBtn.offsetLeft >= line.parentNode.offsetWidth - 10) {
                toggleBtn.style.left = line.parentNode.offsetWidth - 10 + 'px';
                setLine()
            }
        };

        const onMouseUp = function (upEvt) {
            upEvt.preventDefault();
            setLine()

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    function setToggle() {
        toggleBtn.style.left = input.value / (max / line.parentNode.offsetWidth) + 'px'
        setLine()
    }

    function setLine() {
        line.style.width = toggleBtn.offsetLeft + 10 + 'px'
    }

    toggleBtn.addEventListener('mousedown', function (evt) {
        dropToggle(toggleBtn, evt);
    });

    input.addEventListener('change', () => {
        setToggle()
        calculator()

        if (input.value <= min) {
            input.value = min
            setToggle()
            calculator()
        }
        if (input.value >= max) {
            input.value = max
            setToggle()
            calculator()
        }        
    })

    setToggle()
}

export default range