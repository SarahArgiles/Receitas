const mix = require('laravel-mix');

// Compila o arquivo JavaScript e coloca o resultado em public/js
mix.js('resources/js/app.js', 'public/js')
   .css('resources/css/app.css', 'public/css')

// Compila o arquivo Sass para CSS e coloca o resultado em public/css
   .sass('resources/sass/app.scss', 'public/css')

// Se você estiver usando outras opções como imagens ou fontes, pode adicionar mais configurações:
   .copy('resources/images', 'public/images')
   .copy('resources/fonts', 'public/fonts')
   .version();

// Outras configurações podem incluir minificação, versão (cache busting), etc.

const mix = require('laravel-mix');

