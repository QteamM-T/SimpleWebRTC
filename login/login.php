<!DOCTYPE html>gi
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Q-team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</head>
<body>
    <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
            <div class="user-card">
                <div class="d-flex justify-content-center">
                    <div class="brand_logo_container">
                        <img src="images/timLogo.jpg" class="brand_logo" alt="Q-team logo">
                    </div>
                </div>
                <div class="d-flex justify-content-center form_container" >
                    <form>
                        <div class="input-group mb-3">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="bi bi-person-circle"></i></span>
                            </div>
                            <input type="text" name="username" placeholder="Username" id="username" class="form-control input_user"required>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="bi bi-key"></i></span>
                            </div>
                            <input type="password" name="password" placeholder="Password" id="password" class="form-control input_pass"required>
                        </div>
                        <!--<div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" name="rememberMe" class="custom-control-input" id="customControlInline">
                                <label for="customControlInline" class="custom-control-label">Remember me</label>
                            </div>
                        </div>-->
                    
                        </div>
                        <div class="d-flex justify-content-center mt-3 login_container">
                            <button type="button" name="button" id="login" class="btn login_btn">Login</button>
                        </div>
                    </form>
                <!--<div class="mt-4 linked">
                    <div class="d-flex justify-content-center links">
                        Don't have an account? <a href="#" class="ms-2"> Sign up </a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>-->
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        $(function(){
            $('#login').click(function(e){
                var valid=this.form.checkValidity();
                if(valid){
                    var username=$('#username').val();
                    var password=$('#password').val();
                }
                e.preventDefault();

                $.ajax({
                    type:'POST',
                    url:'jslogin.php',
                    data:{username:username,password,password},
                    success:function(data){
                        alert('succes');
                    },
                    eror:function(data){
                      alert('there were errors');
                    }
                });
            });

        });
    </script>
</body>
</html>