<template>
    <div>
            <!-- As a link -->
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
            <a class="navbar-brand" href="#"><i class="fas fa-plus mr-2" id="icon"></i> HEALTHNOW</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link mr-3" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Sign Up</router-link>
                    </li>
                    
                </ul>
            </div>
        </nav>

        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #navbar {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-style: normal;
        height: 80px;
        background: #F5F5F5;
        padding-left: 3rem;
    }
    #icon {
        border-radius: 40px;
        background: #2A5FFC;
        color:white;
        padding: 5px;
        font-size: 19px;
    }
    
    /* Media query for Navigation */
    @media screen and (min-width: 768px) {
         #navbar {
            padding-left: 10em;
        }
        ul li {
            font-size: 1.2rem;
            font-family: 'Open Sans', sans-serif;
            color: black;
            font-weight: 600;
        }
        ul li:nth-child(2) {
            margin-right: 5rem;
        }
    }
</style>