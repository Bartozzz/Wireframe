const path = require( "path" );
const gulp = require( "gulp" );
const sync = require( "browser-sync" ).create();

gulp.task( "watch", [ "sass", "docs" ], () => {
    sync.init( {
        open : false,

        server : {
            routes : {
                "/css" : path.resolve( __dirname, "../css" )
            },

            baseDir : path.resolve( __dirname, "../docs/_site" ),
            index   : "index.html"
        }
    } );

    gulp.watch( `scss/**/*.scss`, [ "sass", sync.reload ] );
    gulp.watch( [ `docs/**/*.*`, "!docs/{.sass-cache,.sass-cache/**,_site,_site/**}" ], [ "docs", sync.reload ] );
} );
