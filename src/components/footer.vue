<template>
    <div class="footer text-center container-fluid">
        <h1 class="text-white mb-4">Subscribe to our newsletter</h1>

        <input type="text" placeholder="enter email address">
        <button class="button mb-3">Subscribe</button>

        <p class="text-white">We will let you know when we launch!</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer {
        background: black;
        padding: 3rem 0;
        height: 37vh;
    }

    input {
        /* padding: 1em 6em; */
        padding-top: 1em;
        padding-bottom: 1em;
        padding-right: 13em;
        padding-left: 1em;
        background: black;
        color: white;
        border-radius: 2px;
        border: 1px solid white;
        outline: none;
    }
    button {
        padding-top: 1em;
        padding-bottom: 1em;
        padding-left: 2em;
        padding-right: 2em;
        margin:0 0.1em;
        border-radius: 2px;
        box-sizing: border-box;
        text-decoration:none;
        font-family:'Roboto',sans-serif;
        font-weight:400;
        color:#FFFFFF;
        background-color:#3369ff;
        box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
        text-align:center;
    }
    input[type="text"]::placeholder {       
        /* Firefox, Chrome, Opera */ 
        text-align: left; 
        color: white;
        font-family: 'PT Sans', sans-serif;
    } 
    button:focus {
        outline: none;
    }
    p {
        font-size: 1.1em;
        font-family:'Roboto',sans-serif;
    }
</style>