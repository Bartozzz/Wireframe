const spawn = require( "child_process" ).spawn;
const path  = require( "path" );
const gulp  = require( "gulp" );
const sync  = require( "browser-sync" ).create();

gulp.task( "docs", done => {
    const jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

    return spawn( jekyll , [ "build" ], {
        stdio : "inherit",
        cwd   : path.resolve( __dirname, "../docs" )
    } ).on( "close", done );
});
