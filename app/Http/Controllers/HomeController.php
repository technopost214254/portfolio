<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function __construct() {
    }

    /**
     * Index
     */
    public function index()
    {
        return view('index');    
    }

    /**
     * Showing all projects
     */
    public function showCase()
    {
        return view('showcase');
    }

    /**
     * Showing projects via type
     */
    public function showcaseType($type)
    {
        return view('company-showcase', compact('type'));
    }
}
