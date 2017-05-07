const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', function(){
  gulp.src([
    'node_modules/angular/angular.min.js',
    'node_modules/angular-iu-router/release/angular-ui-router.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-toast/dist/angular-toast.min.js',
    'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
    'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
    'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
    'node_modules/admin-lte/dist/js/app.min.js'
  ])
  .pipe(uglify()) //Diminuir o arquivo .js menor possivel
  .pipe(concat('deps.min.js'))  //Concatenou todos os aruivos .js em um unico
  .pipe(gulp.dest('public/assets/js')) //Salva o arquivo minificado na pasta desejada
})

gulp.task('deps.css', function(){
  gulp.src([
    'node_modules/angular-toast/dist/angular-toast.min.js',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/admin-lte/bootstrap/css/bootstrap.min.js',
    'node_modules/admin-lte/dist/css/AdminLTE.min.css',
    'node_modules/admin-lte/dist/skins/_all-skins.min.css'

  ])
  .pipe(uglifycss({ "uglyComments": true }))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('public/assets/css'))
})

gulp.task('deps.fonts', function(){
  gulp.src([
    'node_modules/font-awesome/fonts/*.*',
    'node_modules/admin-lte/bootstrap/fonts/*.*'
  ])
  .pipe(gulp.dest('public/assets/fonts'))
})
