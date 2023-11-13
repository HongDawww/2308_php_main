@extends('inc.layout')

@section('title','자식1 타이틀')

@section('main')
<h2>자식1 화면입니다.</h2>
<p>여러 데이터를 표시합니다</p>

@if($gender === '0')
    <span>성별 : 남자</span>
@elseif($gender === '1')
    <span>성별 : 여자</span>
@else
    <span>성별 : 기타</span>
@endif

@endsection

@section('show')
<h2>자식1 show 입니다</h2>
<p>자식1자식1자식1자식1</p>
@endsection
