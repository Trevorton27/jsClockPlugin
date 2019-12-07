<?php
/**
 * Plugin Name: JS Clock Plugin
 * Plugin URI: https://trevormearns.com/
 * Description: A plugin to inject a javascript clock into page content
 * Version: 1.0
 * Author: Trevor Mearns
 * Author URI: https://trevormearns.com/
 */
 
 
 function insert_js_clock($the_content) {
     if (is_page ('1044')) {
    ?>
     <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <div class="container">
        <div class="row align-items-center justify-content-center ">
           <div class="clock-wrap">
                <div class="clock"></div>
                <div class="date"></div>
                <button id="timechange-button" type="submit" class="btn btn-primary btn-lg">Click Me.</button>
            </div>
        </div>
    </div>
  <script src="timeworks.js"></script>
       <?php
     }
 };
 
 add_action('the_content', insert_js_clock);