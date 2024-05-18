<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $type }} Showcase</title>
    @vitereactrefresh

    @vite(['resources/sass/app.scss', 'resources/js/app.js' ])
</head>
    <body class="bg-black p-4">
        <!-- Header Fixed -->
        <div id="header" class="shadow-gray sticky top-0 z-10 shadow-sm max-lg:shadow-none"></div>

        @if ($type == 'webkul')
            <div id="webkulShowcase"></div>
        @elseif ($type == 'etlab')
            <div id="etlabShowcase"></div>
        @elseif ($type == "infotrench")
            <div id="infotrenchShowcase"></div>
        @endif
        
        <!-- Footer -->
        <div id="footer"></div>
    </body>
</html>
