@extends('indigo-layout::main')

@section('meta_title', config('app.name'))
@section('meta_description', config('app.name') . ' system')

@push('head')

@endpush

@section('create_button')

@endsection

@section('content')
Home<input type="text">

@endsection

@section('modals')

@endsection
