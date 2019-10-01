// Your code goes here

//MAKING IMG ZOOM IN AND OUT
 const imgZoom = document.querySelectorAll('img')
//  console.log(imgZoom);

//*********************  MOUSEENTER ********************** */
imgZoom.forEach(ele => {
    ele.addEventListener('mouseenter', e => {
        ele.style.transform = "scale(1.1)"
        ele.style.transition = "0.4s";
        // ele.style.objectFit = 'cover';
    })
})

//******************** MOUSELEAVE *********************** */
imgZoom.forEach(ele => {
    ele.addEventListener('mouseleave', e => {
        ele.style.transform = "scale(1.0)"
        // ele.style.transition = "0.4s";
        // ele.style.objectFit = 'cover';
    })
})


//making the nav bar zlevel high
const header = document.querySelector('header');
header.style.zIndex = '99';


//******************** LOAD *********************** */
//when the page load a alert happen.  ****************** undo this
window.addEventListener('load', (e) => {
    alert('Welcom to Fun Bus Travel Agency')
});



//******************* MOUSEOVER ************************ */
//make the p text bold and red in mouseover
let parag = document.querySelectorAll('p');

parag.forEach(ele => {
    ele.addEventListener('mouseover', e => {
        ele.style.fontWeight = '900';
        ele.style.color = 'red';

        e.stopPropagation();
    })
})


let button = document.querySelectorAll('.btn');
let body = document.querySelector('body');

//********************* CLICK ********************** */
//make the webpage in dark
button[0].textContent = 'Dark Mode';
button[0].addEventListener('click' , e => {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    e.stopPropagation();
})

//********************** DBLCLICK ********************* */
//make the webpage back white
button[button.length -1].textContent = ' dblclick Light Mode';
button[button.length -1].addEventListener('dblclick', e => {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';

    e.stopPropagation();
})


//********************* RESIZE ********************** */
let pageSize = document.querySelectorAll('span');

function reportWindowSize() {
    pageSize[2].textContent = window.innerHeight;
    pageSize[3].textContent = window.innerWidth;
}
window.addEventListener('resize', reportWindowSize);



//******************** KEYDOWN *********************** */
let input = document.querySelector('input');
let keyDisplay = document.querySelector('.keyNumber');

input.addEventListener('keydown', key => {
    keyDisplay.textContent = `${key.which}`;
})


//********************* FOCUS  ********************** */
input.addEventListener('focus', event => {
    event.target.style.backgroundColor = 'coral';
})

//********************* SCROLL  ********************** */
window.addEventListener('scroll', e => {
     let = colorAdd = window.scrollY;

    body.style.backgroundColor = `rgb(${colorAdd + 89},54,${colorAdd - 99})`

     e.stopPropagation();
})


// Stop the navigation from items from refreshing the page by using preventDefault()
let defaultNav = document.querySelectorAll('a');

defaultNav.forEach(ele => {
    ele.addEventListener('click', e =>{
        e.preventDefault();
    })
})