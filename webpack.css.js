const mix = require('laravel-mix')
require('laravel-mix-merge-manifest');
mix.sass('resources/adminapp/sass/app.scss', 'public/adminapp/css').mergeManifest();

