<template>
    <div>
        <div class="footer">
            <h1>Subscribe to our newsletter</h1>

            <input type="email" name="email" class="form-control" placeholder="enter email address">
            <button class="btn">Subscribe</button>

            <p>We will let you know when we launch!</p>

            <hr>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .footer {
        height: 314px;
        background: black;
        padding-top: 2rem;
        text-align: center;
    }

    h1 {
        text-align: center;
        font-size: 25px;
        color: white;
        line-height: 34.05px;
        margin-bottom: 34.05px;
    }
    input[type="email"] {
        margin-left: 3rem;
        width: 18rem;
    }
    button {
        color: white;
        background: #2A5FFC;
        margin: 4px 0;
    }
    p {
        color: #FFFFFF;
        margin-top: 1rem;
        font-size: 18.75px;
    }
    hr {
        background: #FFFFFF;
        margin: 0 auto;
        height: 1px;
        width: 11rem;
        margin-top: 4rem;
    }
</style>