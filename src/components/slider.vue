<template>
    <div class="container-fluid">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner" id="carousel">
                <div class="carousel-item active">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6" id="description">
                                <h1>Everything is horrible, It doesn't have to be you</h1>
                                <p>Talk and connect with professionals within your reach.</p>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <img src="@/assets/svgs/First.svg" class="img-fluid" alt="Doctor and Nurse">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6" id="description">
                                <h1>Write, Discuss, and share your story</h1>
                                <p>Share your experiences, network and meet new people.</p>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <img src="@/assets/svgs/second.svg" class="img-fluid" alt="image illustrating writing your story">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6" id="description">
                                <h1>Events and Discussion Board</h1>
                                <p>Create events and discussion boards with friends and professionals.</p>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <img src="@/assets/svgs/third.svg" class="img-fluid" alt="illustrating showing events board">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6" id="description">
                                <h1>Be the first to know</h1>
                                <p>Get updates about diseases outbreak and tips for protecting yourself and family.</p>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <img src="@/assets/svgs/fourth.svg" class="img-fluid" alt="illustrating showing someone being the first to know about outbreaks">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6" id="description">
                                <h1>Resources Library</h1>
                                <p>Are you doing a research and you need data on specific topic? Search for anything on our resource library</p>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <img src="@/assets/svgs/fifth.svg" class="img-fluid" alt="Illustration showing research">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="">
                            <div class="col-sm-12 col-md-12 text-center" id="description">
                                <h1>Subscribe to our newsletter</h1>
                                <p>Kindly subscribe for more details on our first version release.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" id="icon" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span><i class="fas fa-chevron-left"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" id="icon" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span><i class="fas fa-chevron-right"></i>
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
    #carousel {
        height: 55vh;
        
    }
    #icon {
        color: black;
    }
    #description {
        padding-top: 8rem;
    }
    #description h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 2.94rem;
    }
    img {
        padding-top: 5rem;
        padding-left: 8rem;
        height: 23rem;
        width: 35rem;
    }
</style>