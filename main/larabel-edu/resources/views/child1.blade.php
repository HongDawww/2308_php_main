@extends('inc.layout')
@section('title','자식1 타이틀')

@section('main')
<h2>자식1 화면입니다.</h2>
<p>여러 데이터를 표시합니다</p>
<hr>
@if($gender === '0')
    <span>성별 : 남자</span>
@elseif($gender === '1')
    <span>성별 : 여자</span>
@else
    <span>성별 : 기타</span>
@endif
<hr>
<h3>for문</h3>
@for($i = 0; $i < 5; $i++)
    <span>{{$i}}</span>
@endfor
<hr>
<h3>foreach문</h3>
@foreach($data as $key => $val)
    <p>{{$loop->count.' >> '.$loop->iteration}}</p>
    <span>{{$key.' : '.$val}}</span>
    <br>
@endforeach
<hr>
<h3>forelse</h3>
@forelse($data2 as $key => $val)
    <span>{{$key.' : '.$val}}</span>
    <br>
@empty
    <span>빈 배열입니다</span>
@endforelse
<hr>




@endsection

@section('show')
<h2>자식1 show 입니다</h2>
<p>자식1자식1자식1자식1</p>
@endsection
