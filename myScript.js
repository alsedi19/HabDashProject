        new Glide('.glide_carousel', {
            type: 'carousel',
            perView: 3,
            focusAt: 'center',
            gap: 20,
            peek: { before: 50, after: 50 },
        }).mount();

        new Glide('.glide_testimonial', {
            type: 'carousel',
            perView: 1,
            focusAt: 'center',
            peek: { before:0, after: 0 },
        }).mount();