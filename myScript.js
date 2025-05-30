new Glide('.glide_carousel', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 20,
    peek: { before: 50, after: 50 },
    breakpoints: {
        1024: {
            perView: 2
        },
        768: {
            perView: 1
        }
    }
}).mount();

new Glide('.glide_testimonial', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    peek: { before: 0, after: 0 },
}).mount();

function toggleMenu() {
    document.querySelectorAll('.nav-list').forEach(list => {
        list.classList.toggle('show');
    });
}