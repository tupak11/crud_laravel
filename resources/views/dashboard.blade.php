@extends('app')

@section('content')

<div id="crud" class="row">
    <div class="col-xl-12">
        <h1 class="page-header">crud laravel y vuejs</h1>
    </div>
    <div class="col-sm-7">
        <a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#create">nueva tarea</a>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>tarea</th>
                    <th colspan="2">
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="keep in keeps">
                    <td width="10px">@{{keep.id}}</td>
                    <td>@{{keep.keep }}</td>
                    <td width="10px">
                        <a href="#" class="btn btn-warning btn-sm">editar</a>

                    </td>
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent    ="deleteKeep(keep)">eliminar</a>

                    </td>
                </tr>
            </tbody>
        </table>
        @include('create')
    </div>
    <div class="col-sm-5">
        <pre>
            @{{$data}}
        </pre>
    </div>
</div>

@endsection