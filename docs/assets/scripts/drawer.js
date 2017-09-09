var toggles = document.querySelectorAll( "[data-toggle]" );

toggles.forEach( function ( toggle ) {
    toggle.addEventListener( "click", function ( event ) {
        event.preventDefault();
        event.stopPropagation();

        var drawerId      = toggle.dataset.toggle;
        var drawerElem    = document.getElementById( drawerId );
        var containerElem = document.getElementById( "container" );

        if ( drawerElem ) {
            drawerElem.classList.toggle( "is-open" );
            containerElem.classList.toggle( "is-drawer-open" );
            document.body.classList.toggle( "is-drawer-open" );
        } else {
            console.error( "No drawer with id " + drawerId + " found" );
        }
    }, false );
} );
