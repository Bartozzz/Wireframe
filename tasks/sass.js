const path   = require( "path" );
const gulp   = require( "gulp" );
const sass   = require( "gulp-sass" );
const concat = require( "gulp-concat" );
const minify = require( "gulp-clean-css" );
const prefix = require( "gulp-autoprefixer" );

gulp.task( "sass", () => {
    const src = path.resolve( __dirname, "../scss" );
    const out = path.resolve( __dirname, "../css" );

    return gulp.src( `${src}/index.scss` )
        .pipe( sass().on( "error", sass.logError ) )
        .pipe( minify() )
        .pipe( prefix( {
            browsers : [
                "last 5 versions",
                "ie >= 9",
                "Android >= 4.1"
            ]
        } ) )
        .pipe( concat( "index.css" ) )
        .pipe( gulp.dest( out ) );
} );
