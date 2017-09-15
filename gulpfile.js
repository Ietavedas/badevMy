var gulp         = require('gulp'),
    sourcemaps   = require('gulp-sourcemaps'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    pug          = require('gulp-pug'),
    browserSync  = require('browser-sync'),
    uglify       = require('gulp-uglify'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    notify       = require('gulp-notify'),
    plumber      = require('gulp-plumber'),
    babel        = require('gulp-babel'),
    spritesmith  = require('gulp.spritesmith');

// ajax-content

gulp.task('ajax-content', function() {
    return gulp.src('src/murkups/pages/ajax-content/**/*.*')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t'
        }))
        .pipe(gulp.dest('build/ajax-content'))
        .pipe(browserSync.reload({stream: true}));
});

// html

gulp.task('html', function() {
    return gulp.src('src/murkups/pages/**/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t'
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('wedding-html', function() {
    return gulp.src('src/murkups/pages/wedding.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('contact-html', function() {
    return gulp.src('src/murkups/pages/contact.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('restaurants-html', function() {
    return gulp.src('src/murkups/pages/restaurants.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('child-html', function() {
    return gulp.src('src/murkups/pages/child.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('indexmain-html', function() {
    return gulp.src('src/murkups/pages/indexmain.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('search-html', function() {
    return gulp.src('src/murkups/pages/search.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('hotsprings-html', function() {
    return gulp.src('src/murkups/pages/hotsprings.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('apartments-html', function() {
    return gulp.src('src/murkups/pages/apartments.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('room-html', function() {
    return gulp.src('src/murkups/pages/room.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('restaurant-html', function() {
    return gulp.src('src/murkups/pages/restaurant.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('bustour-html', function() {
    return gulp.src('src/murkups/pages/bustour.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('404-html', function() {
    return gulp.src('src/murkups/pages/404.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(pug({
            pretty: '\t' // отступы в 1 таб
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

// styles

/*
gulp.task('styles', function() {
    return gulp.src('src/styles/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});
*/

gulp.task('404-styles', function() {
    return gulp.src('src/styles/404-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('404-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('wedding-styles', function() {
    return gulp.src('src/styles/wedding-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('wedding-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('contact-styles', function() {
    return gulp.src('src/styles/contact-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('contact-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('restaurants-styles', function() {
    return gulp.src('src/styles/restaurants-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('restaurants-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('child-styles', function() {
    return gulp.src('src/styles/child-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('child-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('indexmain-styles', function() {
    return gulp.src('src/styles/indexmain-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('indexmain-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('search-styles', function() {
    return gulp.src('src/styles/search-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('search-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('hotsprings-styles', function() {
    return gulp.src('src/styles/hotsprings-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('hotsprings-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('apartments-styles', function() {
    return gulp.src('src/styles/apartments-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('apartments-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('room-styles', function() {
    return gulp.src('src/styles/room-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('room-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('restaurant-styles', function() {
    return gulp.src('src/styles/restaurant-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('restaurant-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('bustour-styles', function() {
    return gulp.src('src/styles/bustour-main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        // .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename('bustour-build.css'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}));
});

// javascript

gulp.task('indexmain-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        // 'src/js/plugins/datepicker.min.js',
        'src/js/plugins/jquery-ui.min.js',
        'src/js/plugins/jquery-ui-spinner.min.js',
        // 'src/js/jquery-ui-spinner/**/*.js',
        'src/js/plugins/jquery.matchHeight.js',
        'src/js/plugins/jquery.easing.1.3.js',
        'src/js/plugins/slick.js',
        'src/js/plugins/lightgallery/lightgallery.js',
        'src/js/plugins/lightgallery/lg-thumbnail.js',
        'src/js/plugins/lightgallery/lg-video.js'
    ])
    .pipe(concat('indexmain-vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('indexmain-scripts', function() {
    return gulp.src('src/js/indexmain/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('indexmain-scripts.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('apartments-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        'src/js/plugins/jquery.easing.1.3.js',
        'src/js/plugins/slick.js'
    ])
    .pipe(concat('apartments-vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('apartments-scripts', function() {
    return gulp.src('src/js/apartments/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('apartments-scripts.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('child-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        'src/js/plugins/jquery.easing.1.3.js',
        'src/js/plugins/slick.js'
    ])
        .pipe(concat('child-vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('child-scripts', function() {
    return gulp.src('src/js/child/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('child-scripts.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('room-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        'src/js/jquery-ui-spinner/**/*.js',
        'src/js/plugins/jquery.matchHeight.js',
        'src/js/plugins/jquery.easing.1.3.js',
        'src/js/plugins/slick.js',
        'src/js/plugins/lightgallery/lightgallery.js',
        'src/js/plugins/lightgallery/lg-thumbnail.js',
        'src/js/plugins/lightgallery/lg-video.js'
    ])
    .pipe(concat('room-vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('room-scripts', function() {
    return gulp.src('src/js/room/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('room-scripts.min.js'))
        // .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('hotsprings-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',

        'src/js/plugins/slick.js',

        'src/js/jquery-ui-spinner/**/*.js',
        'src/js/plugins/jquery.matchHeight.js',

        'src/js/plugins/jquery.easing.1.3.js',

        'src/js/plugins/lightgallery/lightgallery.js',
        'src/js/plugins/lightgallery/lg-thumbnail.js',
        'src/js/plugins/lightgallery/lg-video.js'
    ])
    .pipe(concat('hotsprings-vendor.js'))
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest('build/js'));
});

gulp.task('hotsprings-scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('hotsprings-scripts.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('restaurant-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        'src/js/jquery-ui-spinner/**/*.js',
        'src/js/plugins/jquery.matchHeight.js',
        'src/js/plugins/jquery.easing.1.3.js',
        'src/js/plugins/slick.js',
        'src/js/plugins/lightgallery/lightgallery.js',
        'src/js/plugins/lightgallery/lg-thumbnail.js',
        'src/js/plugins/lightgallery/lg-video.js',
        'src/js/plugins/masked-input-plugin/jquery.maskedinput.js'
    ])
    .pipe(concat('restaurant-vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('restaurant-scripts', function() {
    return gulp.src('src/js/restaurant/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('restaurant-scripts.min.js'))
        // .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('restaurants-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        'src/js/jquery-ui-spinner/**/*.js',
        'src/js/plugins/jquery.matchHeight.js',
        'src/js/plugins/jquery.easing.1.3.js',
        'src/js/plugins/slick.js'
    ])
    .pipe(concat('restaurants-vendor.js'))
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest('build/js'));
});

gulp.task('restaurants-scripts', function() {
    return gulp.src('src/js/restaurants/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('restaurants-scripts.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('wedding-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        'src/js/jquery-ui-spinner/**/*.js',
        'src/js/plugins/jquery.matchHeight.js',
        'src/js/plugins/jquery.easing.1.3.js',
        'src/js/plugins/slick.js'
    ])
    .pipe(concat('wedding-vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('wedding-scripts', function() {
    return gulp.src('src/js/wedding/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('wedding-scripts.min.js'))
        // .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('search-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        'src/js/jquery-ui/jquery-ui.js',
        'src/js/jquery-ui/localize.js',
        'src/js/plugins/jquery.mixitup.min.js',
        'src/js/plugins/jquery.matchHeight.js',
        'src/js/plugins/masked-input-plugin/jquery.maskedinput.js',
        'src/js/plugins/jquery.bpopup.js',
        'src/js/plugins/lightgallery/lightgallery.js',
        'src/js/plugins/lightgallery/lg-thumbnail.js'
    ])
    .pipe(concat('search-vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('search-scripts', function() {
    return gulp.src('src/js/search/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('search-scripts.min.js'))
        // .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('bustour-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        'src/js/plugins/jquery.easing.1.3.js'
    ])
    .pipe(concat('bustour-vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('bustour-scripts', function() {
    return gulp.src('src/js/bustour/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('bustour-scripts.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('contact-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        // 'src/js/plugins/datepicker.min.js',
        'src/js/plugins/jquery-ui.min.js',
        // 'src/js/jquery-ui/**/*.js',
        'src/js/plugins/jquery.matchHeight.js',
        'src/js/plugins/jquery.easing.1.3.js',
        'src/js/plugins/masked-input-plugin/jquery.maskedinput.js'
    ])
    .pipe(concat('contact-vendor.js'))
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest('build/js'));
});

gulp.task('contact-scripts', function() {
    return gulp.src('src/js/contact/*.js')
        .pipe(plumber({ // plumber - плагин для отловли ошибок.
            errorHandler: notify.onError(function(err) { // nofity - представление ошибок в удобном для вас виде.
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('contact-scripts.min.js'))
        // .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('404-vendor', function() {
    return gulp.src([
        'src/js/jquery/**/*.js',
        // 'src/js/plugins/datepicker.min.js',
        'src/js/plugins/jquery-ui.min.js',
        // 'src/js/jquery-ui/**/*.js',
        'src/js/plugins/jquery.matchHeight.js',
        'src/js/plugins/jquery.easing.1.3.js'
        // 'src/js/plugins/masked-input-plugin/jquery.maskedinput.js'
    ])
    .pipe(concat('404-vendor.js'))
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest('build/js'));
});

gulp.task('404-scripts', function() {
    return gulp.src('src/js/404/*.js')
        .pipe(plumber({ // plumber - плагин для отловли ошибок.
            errorHandler: notify.onError(function(err) { // nofity - представление ошибок в удобном для вас виде.
                return {
                    title: 'Styles',
                    message: err.message
                };
            })
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('404-scripts.min.js'))
        // .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {

    /* browserSync({
        server: {
            baseDir: './build/'
        },
        notify: false
    }); */

    browserSync({
        proxy: "baden",
        notify: false
    });
});

// gulp.task('img', function() {
    // return gulp.src('src/assets/img/**/*')
        // .pipe(cache(imagemin({
            // interlaced: true,
            // progressive: true,
            // svgoPlugins: [{removeViewBox: false}],
            // use: [pngquant()]
        // })))
        // .pipe(gulp.dest('build/assets/img'));
// });

// assets

// gulp.task('assets', function() {
    // return gulp.src('./src/assets/**/*.*')
        // .pipe(gulp.dest('./build/assets'))
// });

// fonts

gulp.task('fonts', function() {
    return gulp.src('./src/assets/fonts/**/*.*')
        .pipe(gulp.dest('./build/assets/fonts'))
        .pipe(browserSync.reload({stream: true}));
});

// images

gulp.task('404-img', function() {
    return gulp.src('./src/assets/img/404/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('wedding-img', function() {
    return gulp.src('./src/assets/img/wedding/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('contact-img', function() {
    return gulp.src('./src/assets/img/contact/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('restaurants-img', function() {
    return gulp.src('./src/assets/img/restaurants/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('child-img', function() {
    return gulp.src('./src/assets/img/child/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('indexmain-img', function() {
    return gulp.src('./src/assets/img/indexmain/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('search-img', function() {
    return gulp.src('./src/assets/img/search/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('hotsprings-img', function() {
    return gulp.src('./src/assets/img/hotsprings/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('apartments-img', function() {
    return gulp.src('./src/assets/img/apartments/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('room-img', function() {
    return gulp.src('./src/assets/img/room/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('restaurant-img', function() {
    return gulp.src('./src/assets/img/restaurant/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('bustour-img', function() {
    return gulp.src('./src/assets/img/bustour/**/*')
        .pipe(gulp.dest('./build/assets/img/'))
        .pipe(browserSync.reload({stream: true}));
});

// clean

gulp.task('clean', function() {
    return del.sync('build');
});

gulp.task(
    'watch',
    [
        'browser-sync',
        'fonts',
        // 'ajax-content',

        // bustour
        // 'bustour-img', 'bustour-styles', 'bustour-vendor', 'bustour-scripts', 'bustour-html'

        // search
        // 'search-img', 'search-styles', 'search-vendor', 'search-scripts', 'search-html'

        // hotsprings
        // 'hotsprings-img', 'hotsprings-styles', 'hotsprings-vendor', 'hotsprings-scripts', 'hotsprings-html'

        // apartments
        // 'apartments-img', 'apartments-styles', 'apartments-vendor', 'apartments-scripts', 'apartments-html'

        // room
        // 'room-img', 'room-styles', 'room-vendor', 'room-scripts', 'room-html',

        // restaurant
        // 'restaurant-img', 'restaurant-styles', 'restaurant-vendor', 'restaurant-scripts', 'restaurant-html'

        // restaurant
        // 'indexmain-img', 'indexmain-styles', 'indexmain-vendor', 'indexmain-scripts', 'indexmain-html'

        // child
        // 'child-img', 'child-styles', 'child-vendor', 'child-scripts', 'child-html'

        // restaurants
        // 'restaurants-img', 'restaurants-styles', 'restaurants-vendor', 'restaurants-scripts', 'restaurants-html'

        // contact
        'contact-img', 'contact-styles', 'contact-vendor', 'contact-scripts', 'contact-html'

        // wedding
        // 'wedding-img', 'wedding-styles', 'wedding-vendor', 'wedding-scripts', 'wedding-html'

        // 404
        // '404-img', '404-styles', '404-vendor', '404-scripts', '404-html'
    ],
    function() {
        gulp.watch('src/styles/**/*.scss',
            [
                // 'bustour-styles'
                // 'room-styles',
                // 'search-styles'
                // 'hotsprings-styles',
                // 'apartments-styles'
                // 'restaurant-styles'
                // 'indexmain-styles'
                // 'restaurants-styles'
                // 'child-styles'
                'contact-styles'
                // 'wedding-styles'
                // 'search-styles'
                // 'hotsprings-styles',
                // 'apartments-styles'
                // 'restaurant-styles'
                // '404-styles'
            ]
        );
        gulp.watch('src/murkups/**/*.pug',
            [
                // 'bustour-html'
                // 'room-html'
                // 'search-html'
                // 'hotsprings-html',
                // 'apartments-html',
                // 'restaurant-html'
                // 'indexmain-html'
                // 'restaurants-html'
                // 'child-html'
                'contact-html'
                // 'wedding-html'
                // '404-html'
            ]
        );

        // wedding
        // gulp.watch('src/js/wedding/*.js', ['wedding-scripts']);
        // gulp.watch('src/assets/img/wedding/**/**/*', ['wedding-img']); 

        // contact
        gulp.watch('src/js/contact/*.js', ['contact-scripts']);
        gulp.watch('src/assets/img/contact/**/**/*', ['contact-img']);

        // restaurants
        // gulp.watch('src/js/restaurants/*.js', ['restaurants-scripts']);
        // gulp.watch('src/assets/img/restaurants/**/**/*', ['restaurants-img']);

        // child
        // gulp.watch('src/js/child/*.js', ['child-scripts']);
        // gulp.watch('src/assets/img/child/**/**/*', ['child-img']);

        // indexmain
        // gulp.watch('src/js/indexmain/*.js', ['indexmain-scripts']);
        // gulp.watch('src/assets/img/indexmain/**/**/*', ['indexmain-img']);

        // bustour
        // gulp.watch('src/js/bustour/*.js', ['bustour-scripts']);
        // gulp.watch('src/assets/img/bustour/**/**/*', ['bustour-img']);

        // restaurant
        // gulp.watch('src/js/restaurant/*.js', ['restaurant-scripts']);
        // gulp.watch('src/assets/img/restaurant/**/**/*', ['restaurant-img']);

        // room
        // gulp.watch('src/js/room/*.js', ['room-scripts']);
        // gulp.watch('src/assets/img/room/**/**/*', ['room-img']);

        // search
        // gulp.watch('src/js/search/*.js', ['search-scripts']);
        // gulp.watch('src/assets/img/search/**/**/*', ['search-img']);

        // gulp.watch('src/js/search/*.js', ['search-scripts']);
        // gulp.watch('src/assets/img/search/**/**/*', ['search-img']);

        // hotsprings
        // gulp.watch('src/js/hotsprings/*.js', ['hotsprings-scripts']);
        // gulp.watch('src/assets/img/hotsprings/**/**/*', ['hotsprings-img']);
        // gulp.watch('src/murkups/pages/ajax-content/**/*.*', ['ajax-content']);

        // apartments
        // gulp.watch('src/js/apartments/*.js', ['apartments-scripts']);
        // gulp.watch('src/assets/img/apartments/**/**/*', ['apartments-img']);

        // 404
        // gulp.watch('src/js/404/*.js', ['404-scripts']);
        // gulp.watch('src/assets/img/404/**/**/*', ['404-img']);
    }
);

gulp.task('default', ['clean', 'watch']);

gulp.task('production',
    [
        'clean',
        // 'browser-sync',
        'fonts',
        'ajax-content',

        // bustour
        'bustour-img', 'bustour-styles', 'bustour-vendor', 'bustour-scripts', 'bustour-html',

        // search
        'search-img', 'search-styles', 'search-vendor', 'search-scripts', 'search-html',

        // hotsprings
        'hotsprings-img', 'hotsprings-styles', 'hotsprings-vendor', 'hotsprings-scripts', 'hotsprings-html',

        // apartments
        'apartments-img', 'apartments-styles', 'apartments-vendor', 'apartments-scripts', 'apartments-html',

        // room
        'room-img', 'room-styles', 'room-vendor', 'room-scripts', 'room-html',

        // restaurant
        'restaurant-img', 'restaurant-styles', 'restaurant-vendor', 'restaurant-scripts', 'restaurant-html',

        // indexmain
        'indexmain-img', 'indexmain-styles', 'indexmain-vendor', 'indexmain-scripts', 'indexmain-html',

        // child
        'child-img', 'child-styles', 'child-vendor', 'child-scripts', 'child-html',

        // restaurants
        'restaurants-img', 'restaurants-styles', 'restaurants-vendor', 'restaurants-scripts', 'restaurants-html',

        // contact
        'contact-img', 'contact-styles', 'contact-vendor', 'contact-scripts', 'contact-html',

        // wedding
        'wedding-img', 'wedding-styles', 'wedding-vendor', 'wedding-scripts', 'wedding-html',

        // 404
        '404-img', '404-styles', '404-vendor', '404-scripts', '404-html'
    ]);

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/assets/img/icons/*.*').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        // padding: 4,
        // algorithm: 'top-down'
        algorithm: 'left-right'
        // algorithm: 'diagonal'
    }));
    return spriteData.pipe(gulp.dest('src/assets/img/sprites/'));
});
