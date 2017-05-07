const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])

//Remoção de espaços em branco
gulp.task('app.html', function(){
  gulp.src('app/**/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('public'))
})
//Remoção de espaços e comentarios
gulp.task('app.css', function(){
  gulp.src('app/**/*.css')
  .pipe(uglifycss({ "uglyComments": true }))
  .pipe(concat('app.min.css'))
  .pipe(gulp.dest('public/assets/css'))
})
//Converte o padrão es2015 na versão suportada pelo bewser
gulp.task('app.js', function(){
  gulp.src('app/**/*.js')
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(uglify())
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('public/assets/js'))
})
//Copia todos os arquivos(fotos, icons e etc) que serão utilizados para pasta assets
gulp.task('app.assets', function(){
  gulp.src('assets/**/*.*')
  .pipe(gulp.dest('public/assets'))
})
