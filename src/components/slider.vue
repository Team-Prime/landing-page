<template>
    <div>
        <!-- Carousel -->
        <div id="mednow" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" id="slider">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <img src="@/assets/svgs/First.svg" alt="First SVG Illustration" class="img-fluid">
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <h1>Everything is horrible, it doesn't have to be for you</h1>
                            <p>Talk and connect with professionals without geographical limitations</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <img src="@/assets/svgs/second.svg" alt="Second SVG Illustration" class="img-fluid">    
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <h1>Write, discuss and share your story</h1>
                            <p>Share your experience, network and meet new people</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <img src="@/assets/svgs/third.svg" alt="Third SVG Illustration" class="img-fluid">
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <h1>Event and Discussion Board</h1>
                            <p>Create events and discussion boards with friends and professionals</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <img src="@/assets/svgs/fourth.svg" alt="First SVG Illustration" class="img-fluid">
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <h1>Be the first to know</h1>
                            <p>Get updates about diseases outbreak and tips to protecting yourself and family</p>
                        </div>
                    </div>
                    
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <img src="@/assets/svgs/fifth.svg" alt="First SVG Illustration" class="img-fluid">
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <h1>Resource Library</h1>
                            <p>Looking for anything? Our resource library might be helpful</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <h1>Thank you for your time</h1>
                            <p>Kindly subscribe for more details on our first version release</p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#mednow" role="button" data-slide="prev">
                <!-- <span class="carousel-control-prev-icon" aria-hidden="true" style="color: black;"></span> -->
                <i class="fas fa-chevron-left carousel-control-prev-icon" aria-hidden="true" style="color: black;"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#mednow" role="button" data-slide="next">
                <i class="fas fa-chevron-right carousel-control-prev-icon" aria-hidden="true" style="color: black;"></i>
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
        width: 12em;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    #slider {
        height: 65vh;
        padding-top: 4rem;
        padding-bottom: 4rem;
        padding-right: 2rem;
        padding-left: 3rem;
    }
    h1 {
        font-size: 22px;
        text-align: center;
        margin-top: 2em;
        font-weight: 700;
        margin-bottom: 1.1em;
        font-family: 'Open Sans', sans-serif;
    }
    p {
        margin-bottom: 4em;
        font-size: 16px;
        line-height: 21.79px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        color: #535357;
    }
</style>