<?php

use App\Http\Controllers\ReceitaController;
use App\Http\Controllers\UsuarioController;

Route::get('/', [ReceitaController::class, 'index']);
Route::get('/login', [UsuarioController::class, 'login']);
Route::get('/register', [UsuarioController::class, 'register']);
Route::get('/perfil', [UsuarioController::class, 'perfil']);
Route::get('/receita/{id}', [ReceitaController::class, 'show']);
Route::get('/adicionar-receita', [ReceitaController::class, 'create']);
Route::post('/adicionar-receita', [ReceitaController::class, 'store']);

Route::get('/', function () {
    return view('receitas.index');
});
