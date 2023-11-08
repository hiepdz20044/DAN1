const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000);
        // banner chu
         // Optional: Stop the animation when the user hovers over the banner
         var banner = document.getElementById('bannerchu');
         banner.addEventListener('mouseover', function() {
             this.style.animationPlayState = 'paused';
         });
         banner.addEventListener('mouseout', function() {
             this.style.animationPlayState = 'running';
         });
        //  banner duoi
        var images = [
            "/img/bannerduoi1.jpg",
            "/img/bannerduoi2.jpg",
            "/img/bannerduoi3.jpg",
            "/img/bannerduoi4.jpg",
            "/img/bannerduoi5.jpg",
            "/img/bannerduoi6.jpg",
            "/img/bannerduoi7.jpg"
        ];
        var currentIndex = 0;
        var bannerImage = document.getElementById("currentImagee");
        var thumbnails = document.querySelectorAll(".thumbnail");
        
        function showImage(index) {
            bannerImage.src = images[index];
            currentIndex = index;
        
            for (var i = 0; i < thumbnails.length; i++) {
                if (i === index) {
                    thumbnails[i].classList.add("selected");
                } else {
                    thumbnails[i].classList.remove("selected");
                }
            }
        }
        
        function changeImage(index) {
            showImage(index);
        }
        
        function previousImage() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            showImage(currentIndex);
        }
        
        function nextImage() {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            showImage(currentIndex);
        }
        
        showImage(currentIndex); // Hiển thị ảnh đầu tiên
        setInterval(nextImage, 3000); // Chuyển ảnh sau 3 giây
        