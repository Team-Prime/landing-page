<template>
    <div>
        <!-- Carousel -->
        <div id="mednow" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#mednow" data-slide-to="0" class="active"></li>
                <li data-target="#mednow" data-slide-to="1"></li>
                <li data-target="#mednow" data-slide-to="2"></li>
                <li data-target="#mednow" data-slide-to="3" class="active"></li>
                <li data-target="#mednow" data-slide-to="4"></li>
                <li data-target="#mednow" data-slide-to="5"></li>
            </ol>
            <div class="carousel-inner" id="slider">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <img src="@/assets/svgs/First.svg" alt="First SVG Illustration" class="img-fluid">
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6" id="description">
                            <h1 id="multiple">Everything is horrible, it doesn't have to be for you</h1>
                            <p id="multiple">Talk and connect with professionals without geographical limitations</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <img src="@/assets/svgs/second.svg" alt="Second SVG Illustration" class="img-fluid">    
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6" id="description">
                            <h1 id="multiple">Write, discuss and share your story</h1>
                            <p id="multiple">Share your experience, network and meet new people</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <img src="@/assets/svgs/third.svg" alt="Third SVG Illustration" class="img-fluid">
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6" id="description">
                            <h1 id="multiple">Event and Discussion Board</h1>
                            <p id="multiple">Create events and discussion boards with friends and professionals</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <img src="@/assets/svgs/fourth.svg" alt="First SVG Illustration" class="img-fluid">
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6" id="description">
                            <h1 id="multiple">Be the first to know</h1>
                            <p id="multiple">Get updates about diseases outbreak and tips to protecting yourself and family</p>
                        </div>
                    </div>
                    
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <img src="@/assets/svgs/fifth.svg" alt="First SVG Illustration" class="img-fluid">
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6" id="description">
                            <h1 id="multiple">Resource Library</h1>
                            <p id="multiple">Looking for anything? Our resource library might be helpful</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-12 col-lg-12" id="last">
                            <h1 class="text-center" id="multiple">Thank you for your time</h1>
                            <p class="text-center" id="multiple">Kindly subscribe for more details on our first version release</p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#mednow" role="button" data-slide="prev">
                <!-- <span class="carousel-control-prev-icon" aria-hidden="true" style="color: black;"></span> -->
                <i class="fas fa-chevron-left carousel-control-prev-icon" aria-hidden="true" style="color: black;" id="icon"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#mednow" role="button" data-slide="next">
                <i class="fas fa-chevron-right carousel-control-prev-icon" aria-hidden="true" style="color: black;" id="icon"></i>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    img {
        width: 200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    #slider {
        height: 58vh;
        padding-top: 2rem;
        padding-bottom: 4rem;
        text-align: center;
    }
    h1 {
        font-size: 18px;
        text-align: center;
        margin: 2em auto 1.1rem auto;
        font-weight: 700;
        width: 15.5rem; 
        font-family: 'Open Sans', sans-serif;
        padding: 0 0 0 0;
    }
    p {
        margin-bottom: 4em;
        font-size: 15px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        color: #535357;
        width: 300px;
        margin: 0 auto;
    }
    #icon {
        position: relative;
        bottom: 4rem;
    }
    .carousel-indicators li {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        list-style-type: circle;
        color: black;
    }

    /* Media query for 768 */
    @media screen and (min-width: 768px) {
        #icon {
            bottom: 2rem;
        }
        img {
            width: 400px;
            height: 209.86px;
            display: block;
            
        }
        #slider {
            height: 80vh;
            padding-top: 2rem;
            padding-bottom: 5rem;
        }
        h1 {
            font-size: 40px;
            line-height: 54.47px;
            margin-top: 2em;
            font-weight: 700;
            margin-bottom: 1.1em;
            font-family: 'Open Sans', sans-serif;
            
        }
        p {
            margin-bottom: 4em;
            font-size: 17px;
            line-height: 29.96px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            color: #535357;
            width: 1000px;
            padding-right: 400px;
            padding-left: 60px;
        }
        
        #multiple {
            padding-right: 50px;
            padding-left: 50px;
            width: 700px;
        }
        #last {
            text-align: center;
            padding: 0;
            margin: 0 auto 5rem auto;
            width: 100%;
        }
        
    }

    /* Media query for min-width 1025px */
    @media screen and (min-width: 1025px) {
        img {
            width: 50rem;
            display: block;
            position: relative;
            left: 44.65rem;
            right: 7.5%;
            /* padding-top:1rem; */
            bottom: -25px;
        }
        #slider {
            height: 51vh;
        }
        h1 {
            font-size: 40px;
            line-height: 54.47px;
            font-weight: 700;
            margin-bottom: 1.1em;
            font-family: 'Open Sans', sans-serif;
            text-align: left;
        }
        p {
            text-align: left;
            font-size: 22px;
            line-height: 35px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            color: #535357;
        }
        #description {
            position: absolute;
            right: 44.65rem;
            left: 7.5%;
            /* top: 0; */
            top: -45px;
        }
    }
</style>