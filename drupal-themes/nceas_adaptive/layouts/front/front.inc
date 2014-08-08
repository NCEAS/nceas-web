<?php

// Plugin definition
$plugin = array(
  'title' => t('Front Layout'),
  'category' => t('Grid'),
  'icon' => 'front.png',
  'theme' => 'front',
  'css' => 'grid.css',
  'regions' => array(
  	'promo' => t('Promo'),
  	'bottom_left' => t('Bottom Left'),
    'bottom_center' => t('Bottom Center'),
    'sidebar' => t('Sidebar')
  )
);
