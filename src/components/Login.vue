<template>
    <div id="body">

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6" id="col-1">
                    <h1 class="mb-4">New Here?</h1>
                    <p class="mb-4">Create an account to join a community of amazing professionals and enjoy first hand all-inclusive health information.</p>
                    <router-link to="/register" id="button">Sign Up</router-link>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6" id="col-2">

                    <form class="container">
                        <h1 class="mb-4 text-center">Sign In</h1>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control mb-4" placeholder="Email Address">
                        </div>

                        <div class="form-group">
                            <input type="password" name="password" class="form-control " placeholder="***********">
                        </div>

                        <button class="btn">Login</button>
                        <router-link class="ml-5" to="/forgot-password" id="forgot">Forgot Password?</router-link>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    form {
        padding: 12rem 4rem ;
        
        font-family: 'Roboto', sans-serif;
    }

    #body {
        background: #FFFFFF;
    }
    

    #col-1 {
        background: #2A5FFC;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        color: white;
        text-align: center;
        padding: 15rem 5rem;
    }

    #col-1 #button {
        border: 2px solid white;
        background: #2A5FFC;
        color: white;
        border-radius: 40px;
        padding: 10px 2rem;
        text-decoration: none;
    }

    h1 {
        font-size: 2rem;
        font-weight: 700;
        
    }

    form input {
        padding: 1.5rem 1rem;
    }

    button {
        margin: 0 auto;
        background: #2A5FFC;
        color: white;
        border-radius: 40px;
        padding: 10px 2rem;
    }

    #forgot {
        text-decoration: none;
        
        background: #2A5FFC;
        color: white;
        border-radius: 40px;
        padding: 10px 2rem;
    }
</style>