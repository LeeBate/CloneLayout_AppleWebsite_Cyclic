//MOBILE MENU

const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
  selectElement('header').classList.toggle('active');
  if (document.querySelector('header').classList.contains('active')) {
    const header = document.querySelector('header');
    header.style.height = "100vh";
    header.style.backgroundColor = "rgba(255,255,255)";
    header.style.overflow = "visible";
    header.style.transition = ".5s";
    /*  document.querySelector('nav-item').classList.add('foldInLeft') */
    const element = document.querySelector(".nav-item");
    element.classList.add("foldInLeft");
  } else {
    const header = document.querySelector('header');
    header.style.height = "4.4rem";
    header.style.backgroundColor = "rgba(255,255,255,0.7)";
    header.style.transition = ".3s";
  }

  header.addEventListener('mouseleave', () => {
    document.querySelector('header').classList.remove('active');

  });
});


const mega1 = document.querySelector('.mega1');
const mega2 = document.querySelector('.mega2');
const mega3 = document.querySelector('.mega3');
const mega4 = document.querySelector('.mega4');
const mega5 = document.querySelector('.mega5');
const mega6 = document.querySelector('.mega6');
const mega7 = document.querySelector('.mega7');

document.querySelector('.pcsearchclick').addEventListener('click', () => {

  const header = document.querySelector('header');
  header.style.overflow = "hidden";

  const cart_el = document.querySelector('.cart-el');
  if (!cart_el.classList.contains('cart-el-none')) {
    cart_el.classList.add('cart-el-none');
  }


  if (window.innerWidth > 878) {
    const header = document.querySelector('header');
    const search_el = document.querySelector('.search-el');
    const content = document.querySelector('.content');
    console.log('Searchpc clicked')

    search_el.classList.toggle('search-el-none');

    if (!search_el.classList.contains('search-el-none')) {
      header.style.height = "320px";
      header.style.backgroundColor = "rgba(255,255,255,1)";
      content.style.filter = "blur(20px)";
      search_el.style.transition = ".3s ease-in";
    } else {
      header.style.height = "4.4rem";
      content.style.filter = "blur(0px)";
      header.style.backgroundColor = "rgba(255,255,255,.7)";
    }

    header.addEventListener('mouseleave', () => {
      header.style.position = "fixed";
      header.style.top = "0";
      content.style.filter = "blur(0px)";
      header.style.transition = ".3s ease-in";
      header.style.width = "100%";
      header.style.height = "4.4rem";
      header.style.backgroundColor = "rgba(255,255,255,0.7)";
      header.style.backdropFilter = "blur(1rem)";
      header.style.overflow = "visible";
      mega1.style.display = "none";
      mega2.style.display = "none";
      mega3.style.display = "none";
      mega4.style.display = "none";
      mega5.style.display = "none";
      mega6.style.display = "none";
      mega7.style.display = "none";
      if (!search_el.classList.contains('search-el-none'))
        search_el.classList.add('search-el-none');

    });

  }
});



document.querySelector('.searchclick').addEventListener('click', () => {
  if (window.innerWidth < 878) {

    const cart_el = document.querySelector('.cart-el');
    if (!cart_el.classList.contains('cart-el-none')) {
      cart_el.classList.add('cart-el-none');
    }


    const header = document.querySelector('header');
    const search_el = document.querySelector('.search-el');
    const content = document.querySelector('.content');
    console.log('Search clicked')

    search_el.classList.toggle('search-el-none');

    if (!search_el.classList.contains('search-el-none')) {
      header.style.height = "100%";
      header.style.backgroundColor = "rgba(255,255,255,1)";
      content.style.filter = "blur(20px)";
      search_el.style.transition = ".3s ease-in";
    } else {
      header.style.height = "4.4rem";
      content.style.filter = "blur(0px)";
      header.style.backgroundColor = "rgba(255,255,255,.7)";
    }

    // header.addEventListener('mouseleave', () => {
    //   header.style.position = "fixed";
    //   header.style.top = "0";
    //   content.style.filter = "blur(0px)";
    //   header.style.transition = ".3s ease-in";
    //   header.style.width = "100%";
    //   header.style.height = "4.4rem";
    //   header.style.backgroundColor = "rgba(255,255,255,0.7)";
    //   header.style.backdropFilter = "blur(1rem)";
    //   header.style.overflow = "visible";
    //   mega1.style.display = "none";
    //   mega2.style.display = "none";
    //   mega3.style.display = "none";
    //   mega4.style.display = "none";
    //   mega5.style.display = "none";
    //   mega6.style.display = "none";
    //   mega7.style.display = "none";
    //   if (!search_el.classList.contains('search-el-none'))
    //     search_el.classList.toggle('search-el-none');

    // });
  }
});



document.querySelector('.pccartclick').addEventListener('click', () => {
  const search_el = document.querySelector('.search-el');
  if (!search_el.classList.contains('search-el-none')) {
    search_el.classList.add('search-el-none');
  }

  const header = document.querySelector('header');
  const cart_el = document.querySelector('.cart-el');
  const content = document.querySelector('.content');
  console.log('cart clicked')

  cart_el.classList.toggle('cart-el-none');

  if (!cart_el.classList.contains('cart-el-none')) {
    search_el.style.transition = ".7s ease-in";
    header.style.height = "330px";
    header.style.backgroundColor = "rgba(255,255,255,1)";
    content.style.filter = "blur(20px)";
    cart_el.style.transition = ".3s ease-in";
  } else {
    header.style.height = "4.4rem";
    content.style.filter = "blur(0px)";
    cart_el.style.transition = ".7s ease-in";
    header.style.backgroundColor = "rgba(255,255,255,.7)";
  }

  header.addEventListener('mouseleave', () => {

    header.style.position = "fixed";
    header.style.top = "0";
    content.style.filter = "blur(0px)";
    header.style.transition = ".3s ease-in";
    header.style.width = "100%";
    header.style.height = "4.4rem";
    header.style.backgroundColor = "rgba(255,255,255,0.7)";
    header.style.backdropFilter = "blur(1rem)";
    header.style.overflow = "visible";
    mega1.style.display = "none";
    mega2.style.display = "none";
    mega3.style.display = "none";
    mega4.style.display = "none";
    mega5.style.display = "none";
    mega6.style.display = "none";
    mega7.style.display = "none";
    if (!cart_el.classList.contains('cart-el-none'))
      cart_el.classList.toggle('cart-el-none');
  });

});



document.querySelector('.cartclick').addEventListener('click', () => {
  const search_el = document.querySelector('.search-el');
  if (!search_el.classList.contains('search-el-none')) {
    search_el.classList.add('search-el-none');
  }

  const header = document.querySelector('header');
  const cart_el = document.querySelector('.cart-el');
  const content = document.querySelector('.content');
  console.log('cart clicked')

  cart_el.classList.toggle('cart-el-none');

  if (!cart_el.classList.contains('cart-el-none')) {
    header.style.height = "100%";
    header.style.backgroundColor = "rgba(255,255,255,1)";
    content.style.filter = "blur(20px)";


    cart_el.style.transition = ".3s ease-in";
  } else {
    header.style.height = "4.4rem";
    content.style.filter = "blur(0px)";
    cart_el.style.transition = ".3s ease-in";
    header.style.backgroundColor = "rgba(255,255,255,.7)";
  }

  // header.addEventListener('mouseleave', () => {

  //   header.style.position = "fixed";
  //   header.style.top = "0";
  //   content.style.filter = "blur(0px)";
  //   header.style.transition = ".3s ease-in";
  //   header.style.width = "100%";
  //   header.style.height = "4.4rem";
  //   header.style.backgroundColor = "rgba(255,255,255,0.7)";
  //   header.style.backdropFilter = "blur(1rem)";
  //   header.style.overflow = "visible";
  //   mega1.style.display = "none";
  //   mega2.style.display = "none";
  //   mega3.style.display = "none";
  //   mega4.style.display = "none";
  //   mega5.style.display = "none";
  //   mega6.style.display = "none";
  //   mega7.style.display = "none";
  //   if (!cart_el.classList.contains('cart-el-none'))
  //     cart_el.classList.toggle('cart-el-none');
  // });

});









function toggleClassBasedOnScreenWidth() {
  if (window.innerWidth > 878) {
    document.querySelector('header').classList.remove('active');


  }
}


function addEventListenersBasedOnScreenWidth() {
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('header');
  const content = document.querySelector('.content');


  if (window.innerWidth > 878 && !document.querySelector('header').classList.contains('active')) {
    console.log(navLinks)
    console.log(document.querySelector('header').classList.contains('active'))

    if (!document.querySelector('header').classList.contains('active') && !document.querySelector('header').classList.contains('active')) {

      navLinks[0].addEventListener('mouseenter', () => {
        header.style.transition = ".7s";
        header.style.overflow = "hidden";
        content.style.filter = "blur(20px)";
        mega1.style.display = "block";
        mega2.style.display = "none";
        mega2.style.display = "none";
        mega2.style.display = "none";
        mega2.style.display = "none";
        mega2.style.display = "none";
        mega2.style.display = "none";
        header.style.backgroundColor = "rgba(255,255,255, 1)";
        header.style.height = "370px";
      });

      navLinks[2].addEventListener('mouseenter', () => {
        header.style.transition = ".7s";
        header.style.overflow = "hidden";
        content.style.filter = "blur(20px)";
        mega1.style.display = "none";
        mega2.style.display = "block";
        mega3.style.display = "none";
        mega4.style.display = "none";
        mega5.style.display = "none";
        mega6.style.display = "none";
        mega7.style.display = "none";
        header.style.backgroundColor = "rgba(255,255,255, 1)";
        header.style.height = "200px";
      });

      navLinks[4].addEventListener('mouseenter', () => {
        header.style.transition = ".7s";
        header.style.overflow = "hidden";
        content.style.filter = "blur(20px)";
        mega1.style.display = "none";
        mega2.style.display = "none";
        mega3.style.display = "block";
        mega4.style.display = "none";
        mega5.style.display = "none";
        mega6.style.display = "none";
        mega7.style.display = "none";
        header.style.backgroundColor = "rgba(255,255,255, 1)";
        header.style.height = "350px";
      });

      navLinks[6].addEventListener('mouseenter', () => {
        header.style.transition = ".7s";
        header.style.overflow = "hidden";
        content.style.filter = "blur(20px)";
        mega1.style.display = "none";
        mega2.style.display = "none";
        mega3.style.display = "none";
        mega4.style.display = "block";
        mega5.style.display = "none";
        mega6.style.display = "none";
        mega7.style.display = "none";
        header.style.backgroundColor = "rgba(255,255,255, 1)";
        header.style.height = "320px";
      });

      navLinks[8].addEventListener('mouseenter', () => {
        header.style.transition = ".7s";
        header.style.overflow = "hidden";
        content.style.filter = "blur(20px)";
        mega1.style.display = "none";
        mega2.style.display = "none";
        mega3.style.display = "none";
        mega4.style.display = "none";
        mega5.style.display = "block";
        mega6.style.display = "none";
        mega7.style.display = "none";
        header.style.backgroundColor = "rgba(255,255,255, 1)";
        header.style.height = "430px";
      });

      navLinks[10].addEventListener('mouseenter', () => {
        header.style.transition = ".7s";
        header.style.overflow = "hidden";
        content.style.filter = "blur(20px)";
        mega1.style.display = "none";
        mega2.style.display = "none";
        mega3.style.display = "none";
        mega4.style.display = "none";
        mega5.style.display = "none";
        mega6.style.display = "block";
        mega7.style.display = "none";
        header.style.backgroundColor = "rgba(255,255,255, 1)";
        header.style.height = "340px";
      });

      navLinks[12].addEventListener('mouseenter', () => {
        header.style.transition = ".7s";
        header.style.overflow = "hidden";
        content.style.filter = "blur(20px)";
        mega1.style.display = "none";
        mega2.style.display = "none";
        mega3.style.display = "none";
        mega4.style.display = "none";
        mega5.style.display = "none";
        mega6.style.display = "none";
        mega7.style.display = "block";
        header.style.backgroundColor = "rgba(255,255,255, 1)";
        header.style.height = "320px";
      });


    }






    header.addEventListener('mouseleave', () => {
      header.style.position = "fixed";
      header.style.top = "0";
      content.style.filter = "blur(0px)";
      header.style.transition = ".3s ease-in";
      header.style.width = "100%";
      header.style.height = "4.4rem";
      header.style.backgroundColor = "rgba(255,255,255,0.7)";
      header.style.backdropFilter = "blur(1rem)";
      header.style.overflow = "visible";
      mega1.style.display = "none";
      mega2.style.display = "none";
      mega3.style.display = "none";
      mega4.style.display = "none";
      mega5.style.display = "none";
      mega6.style.display = "none";
      mega7.style.display = "none";
    });





  }
}
toggleClassBasedOnScreenWidth()
addEventListenersBasedOnScreenWidth()

window.addEventListener('resize', () => {
  toggleClassBasedOnScreenWidth()
  addEventListenersBasedOnScreenWidth();
});


// const targetElement = document.querySelector('.target-element');
// const triggerElement = document.querySelector('header');
// triggerElement.addEventListener('mouseenter', () => {
//   targetElement.classList.toggle('mega'); // Add the class
// });