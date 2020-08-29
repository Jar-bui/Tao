<?php
header('content-type:text/html;charset="utf-8"');
// echo $_POST
$arr = array('cons'=>0,'msg'=>'');

$nnn = $_POST['nnn'];
$password = $_POST['password'];
$topassword = $_POST['topassword'];
// echo $_POST;

if(!$nnn){
    $arr['cons'] = 1;
    $arr['msg'] = '用户名不能为空';
       echo json_encode($arr);
    exit;
}
if(!$password){
    $arr['cons'] = 2;
    $arr['msg'] = '密码不能为空';
       echo json_encode($arr);
    exit;
}
if($password != $topassword){
    $arr['cons'] = 3;
    $arr['msg'] = '两次输入密码不一致';
       echo json_encode($arr);
    exit;
}

$link = mysqli_connect("127.0.0.1", "root", "momo199212");

if(!$link){
    $arr['cons'] = 6;
    $arr['msg'] = "服务器忙";
    echo json_encode($arr);
    exit; //退出程序
}

mysqli_set_charset($link, "utf8");

mysqli_select_db($link, "qd2003");

$sql = "SELECT * FROM user WHERE nnn='{$nnn}'";

$res = mysqli_query($link, $sql);
$row = mysqli_fetch_assoc($res);
// var_dump($row);
if($row){
    $arr['cons'] = 4;
    $arr['msg'] = '用户名已存在';
       echo json_encode($arr);
    exit; 
}




$soe = "INSERT INTO user(nnn,password) VALUES('{$nnn}','{$password}')";

  $sow = mysqli_query($link,$soe);
  if($sow){
    $arr["msg"] = "注册成功";
    echo json_encode($arr);
  }else{
    $arr['cons'] = 5;
    $arr['msg'] = "注册失败";
    echo json_encode($arr);
    exit;
  }
  mysqli_close($link);
