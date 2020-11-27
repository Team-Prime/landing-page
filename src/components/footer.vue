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
        height: 200px;
        background: black;
        padding-top: 1rem;
        text-align: center;
    }

    h1 {
        text-align: center;
        font-size: 20px;
        color: white;
        margin-bottom: 18.05px;
    }
    input[type="email"] {
        margin: 0 auto;
        width: 15rem;
    }
    button {
        color: white;
        background: #2A5FFC;
        position: relative;
        font-size: 12px;
        bottom: 38.3px;
        left: 80px;
        padding: 9.4px 15px;
    }
    p {
        color: #FFFFFF;
        font-size: 14.75px;
    }
    hr {
        background: #FFFFFF;
        margin: 0 auto;
        height: 1px;
        width: 8rem;
        margin-top: 18px;
    }

    /* Footer 768px media query */
    @media screen and (min-width: 768px) {
        .footer {
            height: 319px;
            background: black;
            padding-top: 3rem;
            text-align: center;
        }

        h1 {
            text-align: center;
            font-size: 40px;
            color: white;
            line-height: 34.05px;
            margin-bottom: 50px;
            font-weight: 700;
            font-style: normal;
        }
        input[type="email"] {
            margin: 0 auto;
            width: 32rem;
            background: #000000;
            color: white;
            padding: 1.8em 2em;
        }
        button {
            position:relative;
            bottom: 3.9rem;
            left: 10rem;
            color: white;
            background: #2A5FFC;
            margin: 1px auto;
            padding: .7em 2.2em;
            font-family: 'Roboto', sans-serif;
            font-size: 22px;
            border: none;
        }
        p {
            color: #FFFFFF;
            /* margin-top: 1rem; */
            font-size: 18.75px;
        }
        hr {
            display: none;
        }
    }



    /* Footer 768px media query */
    @media screen and (min-width: 1025px) {
        .footer {
            height: 319px;
            background: black;
            padding-top: 3rem;
            text-align: center;
        }

        h1 {
            text-align: center;
            font-size: 40px;
            color: white;
            line-height: 34.05px;
            margin-bottom: 50px;
            font-weight: 700;
            font-style: normal;
        }
        input[type="email"] {
            margin: 0 auto;
            width: 32rem;
            background: #000000;
            color: white;
            padding: 1.8em 2em;
        }
        button {
            position:relative;
            bottom: 3.9rem;
            left: 10rem;
            color: white;
            background: #2A5FFC;
            margin: 1px auto;
            padding: .7em 2.2em;
            font-family: 'Roboto', sans-serif;
            font-size: 22px;
            border: none;
        }
        p {
            color: #FFFFFF;
            /* margin-top: 1rem; */
            font-size: 18.75px;
        }
        hr {
            display: none;
        }
    }
</style>