<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <style>


      .carousel-inner .carousel-item-right.active,
      .carousel-inner .carousel-item-next {
        transform: translateX(33.33%);
      }

      .carousel-inner .carousel-item-left.active, 
      .carousel-inner .carousel-item-prev {
        transform: translateX(-33.33%)
      }
        
      .carousel-inner .carousel-item-right,
      .carousel-inner .carousel-item-left{ 
        transform: translateX(0);
      }

      .carousel-inner .carousel-item.active,
      .carousel-inner .carousel-item-next,
      .carousel-inner .carousel-item-prev {
        display: flex;
      }

      .card-body {
        padding: 0;
        padding-top: 10px;
        background-color: #ffffff;
        border: none;

      }

      .card{
        background-color: #ffffff;
        border: none;

      }

      .text-center {
          text-align: center!important;
      }

      .form-control-underline {
          border-width: 0 0 1px 0;
          border-radius: 0;
      }

      .btn-underline {
          border-width: 0 0 1px 0;
          border-radius: 0;
          font-size: .9375rem;
          font-weight: 500;
          color: #111;
      }
      
  </style>
</head>
<body>
  <div class="container text-center my-3">
    <h2>New Arrivals</h2>
    <div class="row mx-auto my-auto">
        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
          <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" style="color: red; background-color: red; margin-left: -200px;"></span>
            <span class="sr-only">Previous</span>
          </a>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">  
                  <div class="col-12 col-md-4 border-0">
                    <div class="card mb-2">
                      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (29).jpg" alt="Card image cap">
                      <div class="card-body">
                        <div class="card-text-top">
                          <a class="card-text" style="float: left; color: #111!important; font-size: .9375rem!important;font-weight: 500!important">Straight Trouser with Belt</a>
                          <p style="float: right; color: #767676!important; font-size: .9375rem!important;font-weight: 500!important">$79.00</p>
                        </div> <br>
                        <div style="float: left">
                          <a class="" style="bottom: 0;color: #767676!important; font-size: .9375rem!important;">Trousers</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="col-12 col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (29).jpg" alt="Card image cap">
                      <div class="card-body">
                        <div class="card-text-top">
                          <a class="card-text" style="float: left;color: #111!important; font-size: .9375rem!important;font-weight: 500!important">Fine quality jeans</a>
                          <p style="float: right; color: #767676!important; font-size: .9375rem!important;font-weight: 500!important">$69.00</p>
                        </div> <br>
                        <div style="float: left">
                          <a class="" style="bottom: 0;color: #767676!important; font-size: .9375rem!important;">Trousers</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="col-12 col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (29).jpg" alt="Card image cap">
                      <div class="card-body">
                        <div class="card-text-top">
                          <a class="card-text" style="float: left;color: #111!important; font-size: .9375rem!important;font-weight: 500!important">Striped knit Top</a>
                          <p style="float: right; color: #767676!important; font-size: .9375rem!important;font-weight: 500!important">$39.00</p>
                        </div> <br>
                        <div style="float: left">
                          <a class="" style="bottom: 0;color: #767676!important; font-size: .9375rem!important;">Tops</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="col-12 col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (29).jpg" alt="Card image cap">
                      <div class="card-body">
                        <div class="card-text-top">
                          <a class="card-text" style="float: left;color: #111!important; font-size: .9375rem!important;font-weight: 500!important">Floral print Dress</a>
                          <p style="float: right; color: #767676!important; font-size: .9375rem!important;font-weight: 500!important">$60.00</p>
                        </div> <br>
                        <div style="float: left">
                          <a class="" style="bottom: 0;color: #767676!important; font-size: .9375rem!important;">Dress</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"  style="color: red; background-color: red; margin-right: -200px;"></span>
              <span class="sr-only">Next</span>
          </a>
        </div>
    </div>
    <h4>Advances all 4 slides each time</h4>
</div>
<section class="py-12" style="padding-top: 100px;">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3>
          Subscribe to our Newsletter
        </h3>
        <p class="mb-7 font-size-lg text-gray-500">
          Receive an exclusive 10% discount code when you signup.
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <form>
          <div class="input-group">
            <input class="form-control form-control-underline form-control-sm border-dark" type="email" placeholder="Enter Email *">
            <div class="input-group-append">
              <button class="btn btn-underline btn-sm border-dark" type="button">Subscribe</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
</section>
<section class="bg-light">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="row h-100">
          <div class="col-6 bg-cover" style="background-image: url("https://a.wattpad.com/cover/108944176-352-k235689.jpg");"></div>
          <div class="col-6 bg-cover" style="background-image: url("https://a.wattpad.com/cover/108944176-352-k235689.jpg");"></div>
          <div class="col-6 bg-cover" style="background-image: url("https://a.wattpad.com/cover/108944176-352-k235689.jpg");"></div>
          <div class="col-6 bg-cover" style="background-image: url("https://a.wattpad.com/cover/108944176-352-k235689.jpg");"></div>
        </div>
      </div>
      <div class="col-12 col-lg-4 py-12 px-9 text-center">
        <i class="fe fe-instagram h3 mb-6"></i>
        <h2 class="mb-6">Instashop</h2>
        <p class="mb-8 font-size-lg text-muted">
          Appear, dry there darkness they're seas, dry
          waters thing fly midst. Beast, above fly
          brought Very green.
        </p>
        <a href="#!" class="link-underline">Go to Instagram</a>
      </div>
      <div class="col-12 col-lg-4">
        <div class="row h-100">
          <div class="col-6 bg-cover" style="background-image: url("https://a.wattpad.com/cover/108944176-352-k235689.jpg");"></div>
          <div class="col-6 bg-cover" style="background-image: url("https://a.wattpad.com/cover/108944176-352-k235689.jpg");"></div>
          <div class="col-6 bg-cover" style="background-image: url("https://a.wattpad.com/cover/108944176-352-k235689.jpg");"></div>
          <div class="col-6 bg-cover" style="background-image: url("https://a.wattpad.com/cover/108944176-352-k235689.jpg");"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<script>
  $('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
</script>
</body>
</html>
