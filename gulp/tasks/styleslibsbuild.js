const gulp         = require( 'gulp' ); 
const cleanCSS     = require( 'gulp-clean-css' );
const sass         = require( 'gulp-sass' );
const rename       = require( 'gulp-rename' );  
const path         = {
	dist: { //Куда складывать готовые после сборки файлы
	   html: 'dist/',
	   js: 'dist/js/',
	   css: 'dist/css/',
	   img: 'dist/img/',
	   fonts: 'dist/fonts/',
	},
	app: { //Пути откуда брать файлы
	   html: 'app/*.html', 
	   js: [ 'app/js/main.js', 'app/js/script.js' ],
	   style: 'app/sass/main.sass',
	   stylelibs: 'app/sass/libs.sass',
	   img: 'app/img/**/*.*', 
	   fonts: 'app/fonts/**/*.*',
	},
	watch: { //За изменением каких файлов мы хотим наблюдать
	   html: 'app/**/*.html',
	   js: 'app/js/**/*.js',
	   style: 'app/sass/**/*.sass',
	   img: 'app/img/**/*.*',
	   fonts: 'app/fonts/**/*.*',
	},
	clean: 'dist/'
};


module.exports = function styleslibsbuild() { 
	return gulp.src( path.app.stylelibs )
		.pipe( sass(/*{includePaths: require("node-normalize-scss").includePaths }*/) ) 
   	.pipe( cleanCSS({ 
            debug: true, 
            compatibility: '*' 
        }, 
            details => { console.log( `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}` ) }
      ))
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( gulp.dest( path.dist.css ) ) 
};