<?php
// Путь к файлу конфигурации MODX
require_once './config.core.php';
require_once MODX_CORE_PATH . 'model/modx/modx.class.php';

$secretKey = 'guatESY2';

if ($_GET['key'] !== $secretKey) {
    die("Недопустимый доступ");
}

$modx = new modX();
$modx->initialize('web');
$modx->cacheManager->refresh();
