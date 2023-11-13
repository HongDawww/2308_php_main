<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title','부모 타이틀')</title>
</head>
<body>
    @include('inc.header')
    @yield('main')
    @section('show')
    <h2>부모의 show입니다</h2>
    <p>부모부모부모</p>
    @show

    @include('inc.footer',['key1' => 'key1 부모에서 셋팅'])
</body>
</html>