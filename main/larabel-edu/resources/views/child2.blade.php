@extends('inc.layout')

@section('title','자식2 타이틀')

@section('main')

@for($i = 1; $i <= 9; $i++)
    <span>{{$i.'단'}}</span>
    <br>
    @for($j = 1; $j < 10; $j++)
        <span>{{$i.' x '.$j.' = '.($i * $j)}}</span>
        <br>
    @endfor
@endfor



@endsection