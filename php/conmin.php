<?php
  header('content-type:text/html;charset="utf-8"');
// echo $_POST
$arr = array("cons" => 0, "msg" => "");

$nnn = $_POST['nnn'];
$password = $_POST['password'];
if(!$nnn){
    $arr['cons'] = 1;
    $arr['msg'] = "输入用户名";
    echo json_encode($arr);
    exit;
}

if(!$password){
    $arr['cons'] = 2;
    $arr['msg'] = "输入密码";
    echo json_encode($arr);
    exit;
}

$link = mysqli_connect("127.0.0.1", "root", "momo199212");

  //2、判断数据库是否链接成功
  if(!$link){
    $arr['code'] = 6;
    $arr['msg'] = "服务器忙";
    echo json_encode($arr);
    exit; //退出程序
  }

  //3、设置访问字符集
  mysqli_set_charset($link, "utf8");

  //4、选择访问的数据库
  mysqli_select_db($link, "qd2003");

  // $syz= md5($password);

$sql = "SELECT * FROM user WHERE nnn='{$nnn}' AND password='{$password}'";

  $res = mysqli_query($link, $sql);

  $row = mysqli_fetch_assoc($res);

  if($row){
    $arr['msg'] = "登陆成功";
    echo json_encode($arr);
  }else{
    $arr['cons'] = 3;
    $arr['msg'] = "用户名或密码错误";
    echo json_encode($arr);
    exit;
  }

  mysqli_close($link);

?>