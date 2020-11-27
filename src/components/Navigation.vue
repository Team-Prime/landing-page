<template>
    <div>
            <!-- As a link -->
        <nav class="navbar navbar-light" id="navbar">
            <a class="navbar-brand" href="#"><i class="fas fa-plus mr-3 ml-3" id="icon"></i> HEALTHNOW</a>
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
            padding-left: 11em;
        }
    }
</style>