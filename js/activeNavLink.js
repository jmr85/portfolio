window.addEventListener('DOMContentLoaded', function () {
    let firstTabEl = document.querySelectorAll('.nav-link');
    firstTabEl.forEach(element => {
        element.addEventListener('click', function () {
            // alert('You clicked the first tab!');
            // document.querySelector(".nav-link").find(".active").removeClass("active");

            //todo fijarce porque no funciona ya que si funciona el alert por cada click
            element.classList.add('.active');
        })
    });

    // firstTabEl.addEventListener('click', function () {
    //     alert('You clicked the first tab!');
    //     document.querySelector(".nav-link").find(".active").removeClass("active");
    //     firstTabEl.classList.add('active');
    // });
});

