$( '.thumbnail' ).on( 'click', e => {
    
    e.preventDefault(); // ??
    
    const thumbSrc = $( e.currentTarget ).find( 'img' ).attr( 'src' );

    const thumbAlt = $( e.currentTarget ).find( 'img' ).attr( 'alt' );

    $( '.hero img' ).attr( 'src', thumbSrc );
    
    $( '.hero img' ).attr( 'alt', thumbAlt );
    
  });
  